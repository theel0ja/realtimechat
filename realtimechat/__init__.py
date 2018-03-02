from flask import Flask, render_template
app = Flask(__name__)

import realtimechat.config

app.config.from_object('realtimechat.config.Config')

import realtimechat.views