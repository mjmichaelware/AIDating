import functions_framework
import requests  # This is an external library
from firebase_admin import initialize_app, firestore # These are external libraries

initialize_app()
db = firestore.client()

@functions_framework.http
def my_http_function(request):
    response = requests.get("https://api.example.com/data")
    # ... more code ...
    return "Hello from Firebase!"