import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const renderItem = ({ item }) => {
  return (
    <View style={styles.row}>
      <Text>{item.mission_name}</Text>
      <Text>{item.details}</Text>
    </View>
  );
};

const keyExtractor = item => item.mission_name;

export default function LaunchesScreen() {
  const [launches, setLaunches] = useState(null);

  const fetchPastLaunches = async () => {
    const response = await fetch("https://api.spacexdata.com/v3/launches/past");
    const pastLaunches = await response.json();
    setLaunches(pastLaunches);
  };

  useEffect(() => {
    fetchPastLaunches();
  }, []);
  return (
    <FlatList
      data={launches}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    borderWidth: 2,
    borderColor: "#000",
    backgroundColor: "#f1f1f1"
  }
});
