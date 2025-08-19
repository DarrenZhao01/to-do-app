from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import message
from config import settings

app = FastAPI(title="Todo API")

# Add CORS middleware to allow requests from frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(message.router, prefix="/api")