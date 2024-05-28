import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardApp from '../screens/dashboard';
import EmployeeForm from '../screens/EmployeeForm';
import CustomerForm from '../screens/CustomerForm';
import ProjectCustomerForm from '../screens/ProjectCustomerForm';
import BottomTabNavigation from '../Components/BottomNavBar';

const DrawerNavigator = () => {
    const Drawer = createDrawerNavigator();

    const CustomDrawerContent = (props) => (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );

    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
                <Drawer.Screen name="Home" component={DashboardApp} />
                <Drawer.Screen name="Projects" component={ProjectCustomerForm} />
                <Drawer.Screen name="Employee" component={EmployeeForm} />
                <Drawer.Screen name="Customer" component={CustomerForm} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;
