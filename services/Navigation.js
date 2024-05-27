import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import DashboardApp from '../screens/dashboard';
import CustomerForm from '../screens/CustomerForm';
import EmployeeForm from '../screens/EmployeeForm';

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
                <Drawer.Screen name="Projects" component={CustomerForm} />
                <Drawer.Screen name="Masters" component={EmployeeForm} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
};

export default DrawerNavigator;