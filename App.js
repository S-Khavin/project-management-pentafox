import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { addEmployee, addProjectStatus } from './services/masters';
import BottomTabNavigation from './Components/BottomNavBar';
import EmployeeForm from './screens/EmployeeForm';
import ProjectForm from './screens/ProjectForm';
import ProjectCustomerForm from './screens/ProjectCustomerForm';
export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <Button onPress={
    //     async () => {
    //       addProjectStatus()
    //     }
    //   } title='Test' />
    //   <StatusBar style="auto" />
    // </View>

    <View style={styles.safe_area}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center", }}>
        {/* <EmployeeForm/> */}
        {/* <ProjectForm></ProjectForm> */}
        <ProjectCustomerForm></ProjectCustomerForm>
      </View>
      <View>
        {/* <BottomTabNavigation /> */}
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

const styles = StyleSheet.create({
  safe_area: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 25 : 0,
    // paddingLeft: Platform.OS === 'android' ? 25 : 0,
    // paddingRight: Platform.OS === 'android' ? 25 : 0,
    
  },
  input: {
    borderBottomWidth: 0.5,
  }
});