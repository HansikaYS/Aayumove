"""
AayuMove Python Web Server
Serves static files, handles client-side routing fallback to index.html,
and supports local testing via the created Python virtual environment.
"""

import os
from flask import Flask, send_from_directory
from flask_cors import CORS

PORT = int(os.environ.get("PORT", 3000))
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

app = Flask(__name__, static_folder=BASE_DIR, static_url_path="")
CORS(app)

@app.route("/api/health", methods=["GET"])
def health_check():
    return {
        "status": "online",
        "app": "AayuMove",
        "platform": "Student Adaptive Fitness & Wellness Engine",
        "version": "1.0.0"
    }

@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def serve_static(path):
    # Check if the requested file exists in the directory
    full_path = os.path.join(BASE_DIR, path)
    if path and os.path.isfile(full_path):
        return send_from_directory(BASE_DIR, path)
    # SPA client-side routing fallback to index.html
    return send_from_directory(BASE_DIR, "index.html")

if __name__ == "__main__":
    print(f"==================================================")
    print(f"  AayuMove Python Server is running!")
    print(f"  Access at: http://localhost:{PORT}/")
    print(f"==================================================")
    app.run(host="127.0.0.1", port=PORT, debug=False)
