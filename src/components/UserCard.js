import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserCard = ({ user }) => {
  if (!user) return <Text>User not found.</Text>;

  return (
    <View style={styles.card}>
      {user.avatar ? (
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      ) : (
        <Text>No Avatar Available</Text>
      )}
      <Text style={styles.text}>ID: {user.id || "N/A"}</Text>
      <Text style={styles.text}>UID: {user.uid || "N/A"}</Text>
      <Text style={styles.text}>Password: {user.password || "N/A"}</Text> 
      <Text style={styles.text}>Firstname: {user.first_name || "N/A"}</Text>
      <Text style={styles.text}>Lastname: {user.last_name || "N/A"}</Text>

      {/* <Text style={styles.text}>
        Name: {user.first_name || "N/A"} {user.last_name || "N/A"}
      </Text> */}
      <Text style={styles.text}>Username: {user.username || "N/A"}</Text>
      <Text style={styles.text}>Email: {user.email || "N/A"}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    alignItems: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
});

export default UserCard;
