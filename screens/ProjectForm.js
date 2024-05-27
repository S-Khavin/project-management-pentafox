import React, { useState, useRef } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { addEmployee } from '../services/masters';
import MultiSelect from 'react-native-multiple-select';
import DateTimePicker from '@react-native-community/datetimepicker';

var width = Dimensions.get('window').width


const employees = [{
    id: '92iijs7yta',
    name: 'Ondo'
}, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun'
}, {
    id: '16hbajsabsd',
    name: 'Calabar'
}, {
    id: 'nahs75a5sg',
    name: 'Lagos'
}, {
    id: '667atsas',
    name: 'Maiduguri'
}, {
    id: 'hsyasajs',
    name: 'Anambra'
}, {
    id: 'djsjudksjd',
    name: 'Benue'
}, {
    id: 'sdhyaysdj',
    name: 'Kaduna'
}, {
    id: 'suudydjsjd',
    name: 'Abuja'
}
];

const ProjectForm = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState(new Date());
    const [open, setOpen] = useState(false);
    const [owner, setOwner] = useState('');
    const [selectedEmpoloyees, setSelectedEmployees] = useState([]);
    const multiSelect = useRef(null);
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');

    const showDatePicker = () => {
        setOpen(true);
    };

    const hideDatePicker = () => {
        setOpen(false);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setDate(currentDate);
        hideDatePicker();
      };
    const onSelectedItemsChange = (selectedEmpoloyees) => {
        setSelectedEmployees(selectedEmpoloyees);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.header}>Project Details</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} placeholder="Project name" onChangeText={(text) => setName(text)} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                        editable
                        multiline                
                    numberOfLines={5} maxLength={200}
                    style={styles.input} placeholder="Project Description" onChangeText={(text) => setDescription(text)} />
            </View>

            <Button title="Open" onPress={showDatePicker} />
            {open && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode="date"
                    is24Hour={true}
                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                    onChange={handleDateChange}
                />
            )}

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Owner</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={owner}
                        onValueChange={(itemValue) => setOwner(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Kanish Bro" value="Kanish Bro" />
                        <Picker.Item label="Khavin" value="Khavin" />
                        <Picker.Item label="Santhosh Bro" value="Santhosh Bro" />
                    </Picker>
                </View>
            </View>

            <MultiSelect
                // hideTags
                items={employees}
                uniqueKey="id"
                ref={(component) => { this.multiSelect = component }}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={selectedEmpoloyees}
                selectText="Pick Employees "
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
            />
            <View>
                {multiSelect.current && multiSelect.current.getSelectedItemsExt(selectedEmpoloyees)}
            </View>


            <View style={styles.inputContainer}>
                <Text style={styles.label}>Project Status</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={status}
                        onValueChange={(itemValue) => setStatus(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Not-Started" value="Not-Started" />
                        <Picker.Item label="On-Hold" value="On-Hold" />
                        <Picker.Item label="In-Progress" value="In-Progress" />
                        <Picker.Item label="Completed" value="Completed" />
                    </Picker>
                </View>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Project Type</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={type}
                        onValueChange={(itemValue) => setType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Prospect" value="Prospect" />
                        <Picker.Item label="Project" value="Project" />
                    </Picker>
                </View>
            </View>


            <Button title="Submit" onPress={() => {
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

export default ProjectForm;