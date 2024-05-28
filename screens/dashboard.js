import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import ProjectCard from '../Components/ProjectCard';

const projects = [
    {
        id: 1,
        name: 'Project 1',
        lead: 'John Doe',
        customer: 'Acme Corp',
        description: 'This is the description for Project 1.'
    },
    {
        id: 2,
        name: 'Project 2',
        lead: 'Jane Smith',
        customer: 'Global Tech',
        description: 'This is the description for Project 2.'
    },
    // Add more projects as needed
];

const Dashboard = () => {
    const [expandedProjectId, setExpandedProjectId] = useState(null);

    const handlePress = (projectId) => {
        setExpandedProjectId(projectId === expandedProjectId ? null : projectId);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Dashboard</Text>
            <FlatList
                data={projects}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <ProjectCard
                        project={item}
                        expanded={item.id === expandedProjectId}
                        onPress={() => handlePress(item.id)}
                    />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default Dashboard;
