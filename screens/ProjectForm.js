import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Dimensions, Platform, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MultiSelect from 'react-native-multiple-select';
import DateTimePicker from '@react-native-community/datetimepicker';
import { addOrUpdateProject, getEmployeesDetails } from '../services/project'; // Ensure this path is correct

const ProjectForm = ({ route, navigation }) => {
    const { project, isEditing } = route.params || {};
    const [p_name, setName] = useState(project?.name || '');
    const [p_description, setDescription] = useState(project?.description || '');
    const [p_date, setDate] = useState(new Date(project?.start_date || Date.now()));
    const [open, setOpen] = useState(false);
    const [p_owner, setOwner] = useState(project?.owner || '');
    const [employees, setEmployees] = useState([]);
    const [p_team, setSelectedEmployees] = useState(project?.team || []);
    const multiSelect = useRef(null);
    const [p_status, setStatus] = useState(project?.status || '');
    const [p_type, setType] = useState(project?.type || '');

    
    useEffect(() => {
        if (project) {
            setName(project.name);
            setDescription(project.description);
            setDate(new Date(project.start_date));
            setOwner(project.owner);
            setSelectedEmployees(project.team);
            setStatus(project.status);
            setType(project.type);
        }
    }, [project]);


    useEffect(() => {
        async function fetchEmployees() {
            const employeesData = await getEmployeesDetails();
            setEmployees(employeesData);
        }
        fetchEmployees();
    }, []);

    const showDatePicker = () => {
        setOpen(true);
    };

    const hideDatePicker = () => {
        setOpen(false);
    };

    const handleDateChange = (event, selectedDate) => {
        const currentDate = selectedDate || p_date;
        setDate(currentDate);
        hideDatePicker();
    };

    const onSelectedItemsChange = (selected_employees) => {
        setSelectedEmployees(selected_employees);
    };

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>Project Details</Text>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Project Name"
                    value={p_name}
                    onChangeText={(text) => setName(text)}
                />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Description</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={5}
                    maxLength={200}
                    style={styles.input}
                    placeholder="Project Description"
                    value={p_description}
                    onChangeText={(text) => setDescription(text)}
                />
            </View>

            <Button title="Pick Start Date" onPress={showDatePicker} />
            {open && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={p_date}
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
                        selectedValue={p_owner}
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
                items={employees}
                uniqueKey="id"
                ref={multiSelect}
                onSelectedItemsChange={onSelectedItemsChange}
                selectedItems={p_team}
                selectText="Pick Employees"
                searchInputPlaceholderText="Search Items..."
                onChangeInput={(text) => console.log(text)}
            />
            <View>
                {multiSelect.current && multiSelect.current.getSelectedItemsExt(p_team)}
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.label}>Project Status</Text>
                <View style={styles.pickerContainer}>
                    <Picker
                        selectedValue={p_status}
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
                        selectedValue={p_type}
                        onValueChange={(itemValue) => setType(itemValue)}
                        style={styles.picker}
                    >
                        <Picker.Item label="Prospect" value="Prospect" />
                        <Picker.Item label="Project" value="Project" />
                    </Picker>
                </View>
            </View>

            <Button title="Submit" onPress={() => {
    const projectData = {
        projectId: project.id, // If editing existing project
        c_gst: '', // Add customer GST value here
        c_name: '', // Add customer name value here
        c_email: '', // Add customer email value here
        c_mobile: '', // Add customer mobile value here
        c_address: '', // Add customer address value here
        p_name,
        p_description,
        p_date,
        p_owner,
        p_team,
        p_status,
        p_type
    };

    addOrUpdateProject(projectData);
    navigation.goBack();
}} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
    },
    pickerContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    picker: {
        height: 50,
        width: '100%',
    },
});

export default ProjectForm;
