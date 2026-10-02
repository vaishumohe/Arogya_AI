import importlib.util
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

if BASE_DIR not in sys.path:
    sys.path.insert(0, BASE_DIR)

SUB_MAIN = os.path.join(BASE_DIR, "app", "main.py")

spec = importlib.util.spec_from_file_location("arogyai_backend_main", SUB_MAIN)
module = importlib.util.module_from_spec(spec)
sys.modules["arogyai_backend_main"] = module
spec.loader.exec_module(module)

app = module.app
