from flask import Flask, request, jsonify
from flask_cors import CORS
from sentence_transformers import SentenceTransformer, util
import pandas as pd
import joblib
import torch

app = Flask(__name__)
CORS(app)  

# Load model and data once when the app starts
model = SentenceTransformer("saved_model")
question_embeddings = joblib.load("question_embeddings.pkl")
chat_data = pd.read_csv("chat_data.csv")  # You can also use .pkl if saved as such

@app.route('/', methods=['GET'])
def home():
    return "Chatbot API is running. Use POST /chat to interact."

@app.route('/chat', methods=['POST'])
def chat():
    print("Received request:", request.json)
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 415

    try:
        data = request.get_json()
        user_input = data.get("message")

        if not user_input:
            return jsonify({"response": "Please provide a message."}), 400

        # Encode user input
        user_embedding = model.encode(user_input, convert_to_tensor=True)

        # Ensure both tensors are on the same device
        # Convert numpy array to tensor
        question_embeddings_tensor = torch.tensor(question_embeddings)

        # Move to same device as user input
        question_embeddings_tensor = question_embeddings_tensor.to(user_embedding.device)

        # Calculate cosine similarity
        similarities = util.cos_sim(user_embedding, question_embeddings_tensor)[0]

        best_match_idx = similarities.argmax().item()
        best_score = similarities[best_match_idx].item()

        if best_score < 0.4:
            return jsonify({"response": "Sorry, I don't understand that question."})

        response = chat_data.iloc[best_match_idx]["Answer"]
        return jsonify({"response": response})

    except Exception as e:
        print("❌ Error:", e)
        return jsonify({"error": "Internal server error", "details": str(e)}), 500

if __name__ == '__main__':
    print("Flask server starting...")
    app.run(debug=True, port=8080)
