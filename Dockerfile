FROM python:3.11-slim

WORKDIR /app

# Install system dependencies needed by OpenCV / Pillow
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    libgl1 \
    libglib2.0-0 \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Copy and install python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend and models
COPY backend/ ./backend/

# Default port (Render uses 10000, Hugging Face uses 7860)
ENV PORT=10000
EXPOSE 10000
EXPOSE 8000
EXPOSE 7860

# Start FastAPI server supporting any dynamic PORT injected by cloud platforms
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-10000}"]
