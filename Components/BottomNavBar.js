import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useRoute } from '@react-navigation/native';

const BottomTabNavigation = () => {
  const [selectedTab, setSelectedTab] = useState('Home');
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (route.name === 'Employee') {
      setSelectedTab('Home');
    } else if (route.name === 'Customer') {
      setSelectedTab('Message');
    }
  }, [route.name]);

  const handleHomePress = () => {
    setSelectedTab('Home');
    navigation.navigate('Employee');
  };

  const handleMessagePress = () => {
    setSelectedTab('Message');
    navigation.navigate('Customer');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={handleHomePress}
        >
          <Ionicons
            name="home-outline"
            size={24}
            color={selectedTab === 'Home' ? '#ee2524' : 'black'}
          />
          <Text style={{ ...styles.label, color: selectedTab === 'Home' ? '#ee2524' : 'black' }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tabItem}>
          <Image
            source={require('../assets/logo.png')}
            style={styles.iconContainer}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={handleMessagePress}
        >
          <Ionicons
            name="chatbubble-outline"
            size={24}
            color={selectedTab === 'Message' ? '#ee2524' : 'black'}
          />
          <Text style={{ ...styles.label, color: selectedTab === 'Message' ? '#ee2524' : 'black' }}>Message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tabItem: {
    alignItems: 'center',
  },
  label: {
    marginTop: 5,
    fontSize: 12,
  },
  iconContainer: {
    height: 70,
    width: 70,
    top: -30,
    borderRadius: 16,
  },
});

export default BottomTabNavigation;
