"""
AayuMove Python Build & Verification Script
Verifies project files, dependencies, environment, and readiness.
"""

import os
import sys
import re

print("=" * 55)
print("       AayuMove Python Project Build & Verification   ")
print("=" * 55)

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
errors = 0

def check_file(rel_path):
    global errors
    full = os.path.join(BASE_DIR, rel_path)
    if os.path.exists(full):
        size_kb = os.path.getsize(full) / 1024
        print(f"[OK] {rel_path} found ({size_kb:.1f} KB)")
        return True
    else:
        print(f"[ERROR] Missing {rel_path}")
        errors += 1
        return False

print("\n[1/4] Verifying Core Files...")
files = [
    "index.html",
    "app.js",
    "styles/main.css",
    "package.json",
    "requirements.txt",
    "server.js",
    "server.py"
]
for f in files:
    check_file(f)

print("\n[2/4] Verifying Python Virtual Environment...")
venv_dir = os.path.join(BASE_DIR, "venv")
if os.path.isdir(venv_dir):
    print(f"[OK] Virtual environment found at {venv_dir}")
else:
    print("[ERROR] Virtual environment 'venv' not found")
    errors += 1

print("\n[3/4] Verifying Installed Dependencies in venv...")
try:
    import flask
    import flask_cors
    from importlib.metadata import version
    print(f"[OK] Flask {version('flask')} installed")
    print(f"[OK] Flask-Cors {version('flask-cors')} installed")
except ImportError as e:
    print(f"[ERROR] Dependency missing: {e}")
    errors += 1

print("\n[4/4] Verifying Frontend Assets & Data...")
check_file("data/activitiesData.js")
check_file("data/mealsData.js")
check_file("services/storage.js")
check_file("services/aiAssistant.js")

print("\n" + "-" * 55)
if errors == 0:
    print("PYTHON BUILD CHECK PASSED! Project is ready to run.")
    print("-" * 55)
    sys.exit(0)
else:
    print(f"BUILD FAILED with {errors} error(s).")
    print("-" * 55)
    sys.exit(1)
