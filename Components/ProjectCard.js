// ProjectCard.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProjectCard = ({ project, expanded, onPress }) => {
    const navigation = useNavigation();

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{project.name}</Text>
                <Text style={styles.cardLead}>Lead: {project.lead}</Text>
                <Text style={styles.cardCustomer}>Customer: {project.customer}</Text>
                <TouchableOpacity
                        style={styles.arrowIcon}
                        onPress={() => navigation.navigate('ProjectForm', { project, isEditing: true })}
                    >
                    <Icon name="arrow-forward" size={24} color="black" />
                </TouchableOpacity>
            </View>
            {expanded && (
                <View style={styles.cardDescription}>
                    <Text>{project.description}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        elevation: 5,
        position: 'relative',
    },
    cardHeader: {
        marginBottom: 10,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    cardLead: {
        fontSize: 14,
        color: '#666',
    },
    cardCustomer: {
        fontSize: 14,
        color: '#666',
    },
    cardDescription: {
        marginTop: 10,
    },
    arrowIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});

export default ProjectCard;
