import { config } from '../config/env';

export const api = {
  async getMessage(): Promise<{ message: string }> {
    const response = await fetch(`${config.apiUrl}/message`);
    if (!response.ok) {
      throw new Error('Failed to fetch message');
    }
    return response.json();
  },

  async sendMessage(message: string): Promise<{ message: string }> {
    const response = await fetch(`${config.apiUrl}/receive_a_msg`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
      throw new Error('Failed to send message');
    }
    return response.json();
  },
};