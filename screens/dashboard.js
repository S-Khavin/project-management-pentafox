import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

const DashboardApp = () => {

    const HomeScreen = () => (
        <View style={styles.container}>
            <View style={styles.featuresContainer}>
                <PressableFeatureBox name="Projects Completed" number={25} image={require('../assets/closure.png')}/>
                <PressableFeatureBox name="On-Going Projects" number={10} image={require('../assets/pioneer.png')} />
            </View>
            <ProjectList />
        </View>
    );

    const PressableFeatureBox = ({ name, number, image }) => (
        <TouchableOpacity style={styles.featureBox}>
            <Image source={image} style={styles.featureImage} />
            <Text style={styles.featureNumber}>{number}</Text>
            <Text style={styles.featureName}>{name}</Text>
        </TouchableOpacity>
    );

    const ProjectCard = ({ project, expanded, onPress }) => (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <View style={styles.cardHeader}>
                <Text style={styles.cardTitle}>{project.name}</Text>
                <Text style={styles.cardLead}>Lead: {project.lead}</Text>
                <Text style={styles.cardCustomer}>Customer: {project.customer}</Text>
            </View>
            {expanded && (
                <View style={styles.cardDescription}>
                    <Text>{project.description}</Text>
                </View>
            )}
        </TouchableOpacity>
    );

    const ProjectList = () => {
        const [expandedCard, setExpandedCard] = useState(null);

        const projects = [
            {
                id: 1,
                name: 'Project A',
                lead: 'Kanish',
                customer: 'Customer A',
                description: 'Description in short'
            },
            {
                id: 2,
                name: 'Project B',
                lead: 'Khavin',
                customer: 'Customer B',
                description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
            },
        ];

        return (
            <ScrollView style={styles.projectList}>
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        expanded={expandedCard === project.id}
                        onPress={() => setExpandedCard(expandedCard === project.id ? null : project.id)}
                    />
                ))}
            </ScrollView>
        );
    };

    return (
        <HomeScreen />
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F5F9',
    },
    featuresContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 20,
    },
    featureBox: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '45%',
        aspectRatio: 1,
        backgroundColor: '#ee2524',
        borderRadius: 10,
        marginVertical: 10,
        elevation: 5,
    },
    featureImage: {
        width: 50,
        height: 50,
        marginBottom: 3,
    },
    featureNumber: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 0,
    },
    featureName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
    },
    projectList: {
        paddingHorizontal: 20,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        elevation: 5,
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
});

export default DashboardApp;
