from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    allowed_origins: list[str] = [
        "http://localhost:3000",  # Local development
        "https://*.vercel.app",   # Vercel preview deployments
    ]
    
    class Config:
        env_file = ".env"

settings = Settings()