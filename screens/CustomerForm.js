import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { addCustomers } from '../services/masters';

var width = Dimensions.get('window').width;

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [gst, setGst] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {
    addCustomers({ name: name, gst: gst, email: email, mobile: mobile, address: address });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter name" onChangeText={(text) => setName(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>GST</Text>
        <TextInput style={styles.input} placeholder="Enter GST" onChangeText={(text) => setGst(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter address" onChangeText={(text) => setAddress(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile</Text>
        <TextInput style={styles.input} placeholder="Enter mobile number" keyboardType='numeric' onChangeText={(text) => setMobile(text)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleSubmit} color="#ee2524" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: width - 50,
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: width - 50,
  },
});

export default CustomerForm;
