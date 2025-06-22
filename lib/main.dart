import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'dart:convert';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Python Integration'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  String _backendMessage = "No message from backend yet.";
  final TextEditingController _nameController = TextEditingController();

  final String baseUrl = '/api';

  Future<void> _callHelloBackend() async {
    try {
      final response = await http.get(Uri.parse('$baseUrl/hello'));

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        setState(() {
          _backendMessage = data['message'];
        });
      } else {
        setState(() {
          _backendMessage = "Failed to load data: ${response.statusCode}";
        });
        print('Failed to load data: ${response.body}');
      }
    } catch (e) {
      setState(() {
        _backendMessage = "Error: $e";
      });
      print('Error making request: $e');
    }
  }

  Future<void> _callGreetBackend() async {
    final String name = _nameController.text.isEmpty ? 'Guest' : _nameController.text;
    try {
      final response = await http.post(
        Uri.parse('$baseUrl/greet'),
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(<String, String>{
          'name': name,
        }),
      );

      if (response.statusCode == 200) {
        final Map<String, dynamic> data = json.decode(response.body);
        setState(() {
          _backendMessage = data['message'];
        });
      } else {
        setState(() {
          _backendMessage = "Failed to send data: ${response.statusCode}";
        });
        print('Failed to send data: ${response.body}');
      }
    } catch (e) {
      setState(() {
        _backendMessage = "Error: $e";
      });
      print('Error making request: $e');
    }
  }

  @override
  void dispose() {
    _nameController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Text(
              _backendMessage,
              style: Theme.of(context).textTheme.headlineMedium,
              textAlign: TextAlign.center,
            ),
            const SizedBox(height: 30),
            ElevatedButton(
              onPressed: _callHelloBackend,
              child: const Text('Call "/api/hello" (GET)'),
            ),
            const SizedBox(height: 20),
            TextField(
              controller: _nameController,
              decoration: const InputDecoration(
                labelText: 'Enter your name',
                border: OutlineInputBorder(),
              ),
            ),
            const SizedBox(height: 10),
            ElevatedButton(
              onPressed: _callGreetBackend,
              child: const Text('Call "/api/greet" (POST)'),
            ),
          ],
        ),
      ),
    );
  }
}