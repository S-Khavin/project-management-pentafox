import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';

var width = Dimensions.get('window').width

const ProjectCustomerForm = () => {
    const [name, setName] = useState('');
    const [gst, setGst] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');

    useEffect(() => {

    }, name)

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Project Customer</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={name}
                        onValueChange={(itemValue) => setName(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Select Customer" value="" />
                        <Picker.Item label="KVB" value="KVB" />
                        <Picker.Item label="Petromoney" value="Petromoney" />
                        <Picker.Item label="QMS" value="QMS" />
                        <Picker.Item label="Zvolve" value="Zvolve" />
                    </Picker>
                </View>
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.label}>GST</Text>
                <TextInput style={styles.input} placeholder="None" value={gst} editable={false} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Email</Text>
                <TextInput style={styles.input} placeholder="None" value={email} editable={false} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Address</Text>
                <TextInput style={styles.input} placeholder="None" value={address} editable={false} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Mobile</Text>
                <TextInput style={styles.input} placeholder="None" value={mobile} editable={false} />
            </View>

            <Button title="Continue" onPress={() => {
                //Navigate to ProjectForm
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

export default ProjectCustomerForm;