import pytest
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_message():
    response = client.get("/api/message")
    assert response.status_code == 200
    assert "message" in response.json()

def test_update_message():
    test_message = "Test message"
    response = client.post(
        "/api/receive_a_msg",
        json={"message": test_message}
    )
    assert response.status_code == 200
    assert response.json()["message"] == test_message

    # Verify the message was updated
    response = client.get("/api/message")
    assert response.json()["message"] == test_message