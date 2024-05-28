import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addEmployee } from '../services/masters';

var width = Dimensions.get('window').width;

const EmployeeForm = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleEmployeeSubmit = () => {
    addEmployee({ name: name, role: selectedRole, email: email, mobile: mobile });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} placeholder="Enter name" onChangeText={(text) => setName(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Role</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={selectedRole}
            onValueChange={(itemValue) => setSelectedRole(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Select role" value="" />
            <Picker.Item label="Frontend Developer" value="frontenddeveloper" />
            <Picker.Item label="Backend Developer" value="backenddeveloper" />
            <Picker.Item label="Designer" value="designer" />
            <Picker.Item label="Tester" value="tester" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter email" keyboardType='email-address' onChangeText={(text) => setEmail(text)} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Mobile</Text>
        <TextInput style={styles.input} placeholder="Enter mobile number" keyboardType='numeric' onChangeText={(text) => setMobile(text)} />
      </View>

      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={handleEmployeeSubmit} color="#ee2524" />
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
  buttonContainer: {
    width: width - 50,
  },
});

export default EmployeeForm;
