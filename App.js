// import { StatusBar } from 'expo-status-bar';
// import { Button, StyleSheet, Text, View } from 'react-native';
// import { addEmployee, addProjectStatus } from './services/masters';
// import BottomTabNavigation from './Components/BottomNavBar';
// import EmployeeForm from './screens/EmployeeForm';
// import ProjectForm from './screens/ProjectForm';
// import ProjectCustomerForm from './screens/ProjectCustomerForm';
// import { getCustomerDetails } from './services/project';
// export default function App() {
//   return (
//     <View style={styles.safe_area}>
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
//         {/* <ProjectCustomerForm></ProjectCustomerForm> */}
//         <ProjectCustomerForm></ProjectCustomerForm>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   safe_area: {
//     flex: 1,
//     // paddingTop: Platform.OS === 'android' ? 25 : 0,
//     // paddingLeft: Platform.OS === 'android' ? 25 : 0,
//     // paddingRight: Platform.OS === 'android' ? 25 : 0,
//   },
//   input: {
//     borderBottomWidth: 0.5,
//   }
// });


// import React from 'react';
// import DrawerNavigator from './services/Navigation';

// const App = () => {
//     return <DrawerNavigator />;
// };

// export default App;


// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './screens/dashboard';
import ProjectForm from './screens/ProjectForm';


const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
                <Stack.Screen name="Dashboard" component={Dashboard} />
                <Stack.Screen name="ProjectForm" component={ProjectForm} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;

