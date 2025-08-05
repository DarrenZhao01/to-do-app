from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

# Add this class to define the message structure
class MessageInput(BaseModel):
    message: str

app = FastAPI()
# python -m uvicorn main:app --reload --port 8000
# Add CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Next.js default port
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
custom_message = "Hello from the backend!"

@app.get("/api/message")
async def get_message():
    return {"message": custom_message}

@app.post("/api/receive_a_msg")  # Fixed typo in URL
async def receive_a_message(message_input: MessageInput):  # Use Pydantic model
    global custom_message
    custom_message = message_input.message
    return {"message": custom_message}