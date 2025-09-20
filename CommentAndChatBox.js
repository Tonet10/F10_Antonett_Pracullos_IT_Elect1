import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  // Comments
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  // Chat
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const [isUser, setIsUser] = useState(true); // Toggle sender/receiver

  const addComment = () => {
    if (commentInput.trim()) {
      setComments([
        ...comments,
        {
          id: Date.now().toString(),
          text: commentInput,
          user: "Jessan John",
          time: new Date().toLocaleTimeString(),
        },
      ]);
      setCommentInput("");
    }
  };

  const sendChat = () => {
    if (chatInput.trim()) {
      setChatMessages([
        ...chatMessages,
        {
          id: Date.now().toString(),
          text: chatInput,
          sender: isUser ? "me" : "other",
        },
      ]);
      setChatInput("");
      setIsUser(!isUser); // Alternate messages for demo
    }
  };

  const renderComment = ({ item }) => (
    <View style={styles.commentItem}>
      <Text style={styles.commentUser}>{item.user}</Text>
      <Text style={styles.commentText}>{item.text}</Text>
      <Text style={styles.commentTime}>{item.time}</Text>
    </View>
  );

  const renderChat = ({ item }) => (
    <View
      style={[
        styles.chatBubble,
        item.sender === "me" ? styles.myBubble : styles.theirBubble,
      ]}
    >
      <Text style={styles.chatText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Comment Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Comments</Text>
        <FlatList
          data={comments}
          renderItem={renderComment}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Write a comment..."
            value={commentInput}
            onChangeText={setCommentInput}
          />
          <TouchableOpacity style={styles.button} onPress={addComment}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chatbox */}
      <View style={styles.section}>
        <Text style={styles.title}>Chat</Text>
        <FlatList
          data={chatMessages}
          renderItem={renderChat}
          keyExtractor={(item) => item.id}
          style={styles.list}
        />
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={chatInput}
            onChangeText={setChatInput}
          />
          <TouchableOpacity style={styles.button} onPress={sendChat}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 10,
  },
  section: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  list: {
    flex: 1,
    marginBottom: 5,
  },
  // Comment Styles
  commentItem: {
    backgroundColor: "#eaeaea",
    padding: 8,
    borderRadius: 6,
    marginVertical: 4,
  },
  commentUser: {
    fontWeight: "bold",
    fontSize: 14,
  },
  commentText: {
    fontSize: 16,
  },
  commentTime: {
    fontSize: 12,
    color: "#555",
    textAlign: "right",
  },
  // Chat Styles
  chatBubble: {
    padding: 10,
    borderRadius: 12,
    marginVertical: 4,
    maxWidth: "70%",
  },
  myBubble: {
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
  },
  theirBubble: {
    backgroundColor: "#e6e6e6",
    alignSelf: "flex-start",
  },
  chatText: {
    color: "#000",
  },
  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    marginRight: 5,
  },
  button: {
    backgroundColor: "#007bff",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});