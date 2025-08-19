from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    allowed_origins: list[str] = [
        "http://localhost:3000",  # Local development
        # Add your custom prod domain too if you have one, e.g. "https://yourdomain.com"
    ]
    # Allow all *.vercel.app subdomains (preview + prod)
    allowed_origin_regex: str = r"https://.*\.vercel\.app"

class Config:
    env_file = ".env"

settings = Settings()