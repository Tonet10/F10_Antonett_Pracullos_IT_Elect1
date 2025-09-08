import React, { useState } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    const message = { text: input, sender: 'user' };
    setMessages([...messages, message]);
    setInput('');

    // Simple chatbot logic
    let botResponse;
    if (input.toLowerCase().includes('hello')) {
      botResponse = 'Hi there! How are you?';
    } else if (input.toLowerCase().includes('how are you')) {
      botResponse = 'Im good, thanks! How about you?';
    } else {
      botResponse = 'I dont understand you';
    }

    const botMessage = { text: botResponse, sender: 'bot' };
    setTimeout(() => {
      setMessages([...messages, message, botMessage]);
    }, 500);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages}>
        {messages.map((message, index) => (
          <Text key={index} style={message.sender === 'user' ? styles.userMessage : styles.botMessage}>
            {message.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={input}
          onChangeText={(text) => setInput(text)}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={handleSendMessage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  messages: {
    flex: 1,
  },
  userMessage: {
    color: 'blue',
    textAlign: 'right',
    marginBottom: 10,
  },
  botMessage: {
    color: 'green',
    textAlign:'left',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  input: {
    flex: 1,
    height: 80,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
  },
});

export default App;