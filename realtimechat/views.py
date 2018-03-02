from realtimechat import app
from flask import render_template

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chat')
def chat_page():
    return render_template('chat_page.html')