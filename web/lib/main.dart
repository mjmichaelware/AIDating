// lib/main.dart
// This is the main entry point for your Flutter application.

import 'package:flutter/material.dart'; // Import Flutter's Material Design library

void main() {
  // runApp takes the given Widget and makes it the root of the widget tree.
  // It starts the Flutter application.
  runApp(const MyApp());
}

// MyApp is the root widget of your application.
// It's a StatelessWidget because its content doesn't change over time.
class MyApp extends StatelessWidget {
  // Constructor for MyApp.
  // The 'key' parameter is used by Flutter internally for widget identification.
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    // MaterialApp is a convenient widget that wraps a number of widgets
    // that are commonly required for Material Design applications.
    return MaterialApp(
      title: 'BlindAIDating', // Title that appears in the task switcher on Android, and in the browser tab for web.
      theme: ThemeData(
        primarySwatch: Colors.purple, // Defines the primary color palette for the app.
        // visualDensity adjusts the visual density of the UI components.
        // adaptivePlatformDensity adapts the density based on the platform.
        visualDensity: VisualDensity.adaptivePlatformDensity,
        // useMaterial3 enables the new Material Design 3 features and styling.
        useMaterial3: true,
        // Define a custom font for the entire app if you have one.
        // Make sure to declare the font in your pubspec.yaml file under 'flutter: fonts:'
        fontFamily: 'Inter',
      ),
      home: const HomeScreen(), // Sets the initial screen (home page) of your application.
    );
  }
}

// HomeScreen is a StatefulWidget because its internal state can change over time.
// This screen will handle the core logic and UI for the blind AI dating interaction.
class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key}); // Constructor for HomeScreen

  @override
  State<HomeScreen> createState() => _HomeScreenState(); // Creates the mutable state for this widget.
}

// The State class for HomeScreen. It holds the mutable state of the widget.
class _HomeScreenState extends State<HomeScreen> {
  // A string to display the AI's response or instructions to the user.
  String _aiResponse = "Tap the microphone to start your blind date!";
  // A boolean to track if the app is currently listening for user input.
  bool _isListening = false;

  // Function to toggle the listening state and simulate AI interaction.
  void _toggleListening() {
    setState(() {
      _isListening = !_isListening; // Toggle the boolean state.
      if (_isListening) {
        _aiResponse = "Listening... please speak clearly."; // Update UI when listening starts.
        // In a real application, you would integrate speech-to-text here (e.g., using speech_to_text package).
        // Then send the transcribed text to an LLM API (e.g., Gemini API via a backend function).
        _simulateAIResponse(); // Simulate the AI response process.
      } else {
        _aiResponse = "Voice chat paused. Tap to continue."; // Update UI when listening stops.
        // In a real app, you might stop speech-to-text or reset the input.
      }
    });
  }

  // A Future function to simulate an asynchronous AI response.
  // This simulates network delay and a basic AI reply.
  Future<void> _simulateAIResponse() async {
    // Simulate a delay for processing the voice input and generating a response.
    await Future.delayed(const Duration(seconds: 3));

    // Only update if still in listening state (e.g., user didn't tap to stop prematurely).
    if (_isListening) {
      setState(() {
        _aiResponse = "AI: It's lovely to meet you! Tell me, what are you passionate about?";
        _isListening = false; // Stop listening automatically after a simulated response.
      });
      // After a simulated AI response, you might immediately prompt for the next turn,
      // or wait for the user to initiate again.
      // For this example, we let the user tap again.
    }
  }

  @override
  Widget build(BuildContext context) {
    // Scaffold provides the basic visual structure for the material design app.
    return Scaffold(
      appBar: AppBar(
        title: const Text(
          'BlindAIDating', // Title displayed in the app bar.
          style: TextStyle(
            color: Colors.white, // Text color for the title.
            fontWeight: FontWeight.bold, // Bold font weight.
            fontSize: 22,
          ),
        ),
        backgroundColor: Theme.of(context).primaryColor, // Background color of the app bar.
        centerTitle: true, // Centers the title in the app bar.
        elevation: 4, // Adds a shadow below the app bar.
      ),
      body: Container(
        // Use a BoxDecoration for background gradients.
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topLeft, // Start gradient from top-left.
            end: Alignment.bottomRight, // End gradient at bottom-right.
            colors: [
              Colors.purple.shade50, // Light purple for the start.
              Colors.purple.shade200, // Slightly darker purple for the end.
            ],
          ),
        ),
        padding: const EdgeInsets.all(24.0), // Padding around the entire body content.
        child: Center(
          // Center the content horizontally and vertically.
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center, // Center items vertically.
            crossAxisAlignment: CrossAxisAlignment.center, // Center items horizontally.
            children: <Widget>[
              // Microphone icon indicating listening status.
              Icon(
                _isListening ? Icons.mic : Icons.mic_none, // Change icon based on listening state.
                size: 120, // Large icon size.
                color: Theme.of(context).primaryColor, // Icon color matching theme.
              ),
              const SizedBox(height: 40), // Spacer for vertical separation.

              // Container for displaying AI's response.
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 25, vertical: 20),
                margin: const EdgeInsets.symmetric(horizontal: 20),
                decoration: BoxDecoration(
                  color: Colors.white.withOpacity(0.95), // Semi-transparent white background.
                  borderRadius: BorderRadius.circular(25), // Rounded corners.
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withOpacity(0.15), // Soft shadow for depth.
                      blurRadius: 15,
                      offset: const Offset(0, 8),
                    ),
                  ],
                ),
                child: Text(
                  _aiResponse, // Display the current AI response/instruction.
                  textAlign: TextAlign.center, // Center the text within the container.
                  style: TextStyle(
                    fontSize: 20, // Font size for AI response.
                    color: Colors.grey.shade800, // Dark grey text color.
                    fontStyle: _isListening ? FontStyle.italic : FontStyle.normal, // Italicize when listening.
                    fontWeight: _isListening ? FontWeight.w500 : FontWeight.normal,
                  ),
                ),
              ),
              const SizedBox(height: 50), // Another spacer.

              // Elevated button to toggle listening.
              ElevatedButton(
                onPressed: _toggleListening, // Callback function when button is pressed.
                style: ElevatedButton.styleFrom(
                  backgroundColor: Theme.of(context).primaryColor, // Button background color.
                  foregroundColor: Colors.white, // Text/icon color on the button.
                  padding: const EdgeInsets.symmetric(horizontal: 50, vertical: 18), // Button padding.
                  shape: RoundedRectangleBorder(
                    borderRadius: BorderRadius.circular(35), // More rounded corners for the button.
                  ),
                  elevation: 10, // Higher elevation for more prominent shadow.
                  shadowColor: Colors.purple.shade400.withOpacity(0.6), // Shadow color.
                  animationDuration: const Duration(milliseconds: 300), // Animation for press feedback.
                  // Add a subtle scale transform on press
                  // overlayColor: MaterialStateProperty.all(Colors.white.withOpacity(0.1)),
                ),
                child: Text(
                  _isListening ? 'Stop Listening' : 'Start Voice Chat', // Button text changes based on state.
                  style: const TextStyle(
                    fontSize: 20, // Font size for button text.
                    fontWeight: FontWeight.bold, // Bold font weight.
                    letterSpacing: 0.8, // Slightly increased letter spacing.
                  ),
                ),
              ),
              const SizedBox(height: 30), // Final spacer.

              // Informative text at the bottom.
              Text(
                'Experience deeper connections through AI-powered voice conversations without visual biases.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 15,
                  color: Colors.grey.shade700,
                  height: 1.4, // Line height for readability.
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
