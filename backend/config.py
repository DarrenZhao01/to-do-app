from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    allowed_origins: list[str] = ["http://localhost:3000"]  # Default for local development
    
    class Config:
        env_file = ".env"

settings = Settings()