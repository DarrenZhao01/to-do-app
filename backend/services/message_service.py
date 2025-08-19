class MessageService:
    def __init__(self):
        self.custom_message = "Hello from the backend!"

    def get_message(self):
        return {"message": self.custom_message}

    def update_message(self, new_message: str):
        self.custom_message = new_message
        return {"message": self.custom_message}

# Create a singleton instance
message_service = MessageService()