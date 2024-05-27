import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { addCustomers } from '../services/masters';

var width = Dimensions.get('window').width

const CustomerForm = () => {
  const [name, setName] = useState('');
  const [gst, setGst] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Customer</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter name" onChangeText={(text) => setName(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>GST</Text>
        <TextInput style={styles.input} placeholder="Enter name" onChangeText={(text) => setGst(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Address</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType='email-address' onChangeText={(text) => setAddress(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile</Text>
        <TextInput style={styles.input} placeholder="Enter mobile number" keyboardType='numeric' onChangeText={(text) => setMobile(text)} />
      </View>

      <Button title="Submit" onPress={() => {
        addCustomers({ name: name, gst: gst, email: email, mobile: mobile, address: address })
      }} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
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
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  button: {
    marginTop: 20,
  }
});

export default CustomerForm;