import 'dart:html'; // For DOM manipulation
import 'dart:convert'; // For JSON encoding/decoding

void main() {
  // Get the button and message elements
  final ButtonElement fetchButton = querySelector('#fetchButton') as ButtonElement;
  final ParagraphElement messageElement = querySelector('#message') as ParagraphElement;

  fetchButton.onClick.listen((event) async {
    messageElement.text = 'Fetching from backend...';
    try {
      final response = await HttpRequest.getString('/api/hello'); // Call backend Cloud Function
      final Map<String, dynamic> data = jsonDecode(response);
      messageElement.text = 'Message from backend: ${data['message']}';
    } catch (e) {
      messageElement.text = 'Error: $e';
    }
  });
}