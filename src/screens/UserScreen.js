import React, { useState, useEffect } from 'react';
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native';
import UserCard from '../components/UserCard';

const API_URL = "https://random-data-api.com/api/users/random_user?size=80";

const UserScreen = () => {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data);
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      <UserCard user={users[currentIndex]} />

      <View style={styles.buttonContainer}>
        <Button
          title="Previous"
          onPress={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
        />
        <Button
          title="Next"
          onPress={() => setCurrentIndex((prev) => Math.min(prev + 1, users.length - 1))}
          disabled={currentIndex === users.length - 1}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  buttonContainer: { flexDirection: 'row', marginTop: 20, gap: 20 },
  loader: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default UserScreen;
