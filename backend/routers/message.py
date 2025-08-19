from fastapi import APIRouter
from models.message import MessageInput
from services.message_service import message_service

router = APIRouter()

@router.get("/message")
async def get_message():
    return message_service.get_message()

@router.post("/receive_a_msg")
async def receive_a_message(message_input: MessageInput):
    return message_service.update_message(message_input.message)