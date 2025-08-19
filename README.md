# Todo App

A full-stack Todo application built with Next.js and FastAPI.

## Development Setup

### Frontend (Next.js)

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm test
   ```

### Backend (FastAPI)

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Start the development server:
   ```bash
   uvicorn main:app --reload --port 8000
   ```

5. Run tests:
   ```bash
   pytest
   ```

## Deployment

### Frontend (Vercel)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   cd frontend
   vercel
   ```

Required environment variables:
- `NEXT_PUBLIC_API_URL`: Backend API URL

### Backend (Railway)

1. Install Railway CLI:
   ```bash
   npm i -g @railway/cli
   ```

2. Deploy:
   ```bash
   cd backend
   railway up
   ```

Required environment variables:
- `ALLOWED_ORIGINS`: Comma-separated list of allowed frontend origins

## Continuous Integration/Deployment

The project uses GitHub Actions for CI/CD. On every push to the main branch:

1. Frontend:
   - Runs tests
   - Checks types
   - Runs linting
   - Deploys to Vercel (if on main branch)

2. Backend:
   - Runs tests
   - Runs linting
   - Deploys to Railway (if on main branch)

### Required Secrets

Add these secrets to your GitHub repository:

Frontend (Vercel):
- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Backend (Railway):
- `RAILWAY_TOKEN`
- `RAILWAY_SERVICE_NAME`