import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { getCustomerDetails, getSingleCustomerDetails } from '../services/project';

var width = Dimensions.get('window').width

const ProjectCustomerForm = () => {
    const [name, setName] = useState('Select Customer');
    const [gst, setGst] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [address, setAddress] = useState('');
    const [customers, setCustomers] = useState([]);
    const [customer, setCustomer] = useState([]);
    console.log(name);
    useEffect(() => {
        async function fetchCustomers() {
            const customerData = await getCustomerDetails();
            setCustomers(customerData);
            console.log(customerData);
        }
        fetchCustomers();
    }, [])

    useEffect(() => {
        async function fetchCustomer() {
            if (name !== 'Select Customer') {
                const singleCustomerData = await getSingleCustomerDetails(name);
                setCustomer(()=>{return([...singleCustomerData])});
                console.log(singleCustomerData?.[0].gst);
                setGst(singleCustomerData?.[0]?.gst);
                setEmail(singleCustomerData?.[0]?.email);
                setAddress(singleCustomerData?.[0]?.address);
                setMobile(singleCustomerData?.[0]?.mobile);
                // if(!!singleCustomerData?.[0]?.gst){
                //     setGst(singleCustomerData?.[0]?.gst);
                //     console.log('llll',singleCustomerData)
                // }
            } else {
                setGst('');
                setEmail('');
                setAddress('');
                setMobile('');
            }
        }
        fetchCustomer();
    }, [name])
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
                        <Picker.Item label="Select Customer" value="Select Customer" />
                        {customers.map((customer, index) => {
                            return <Picker.Item key={index} label={customer.name} value={customer.name} />
                        })
                        }
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