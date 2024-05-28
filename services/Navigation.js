import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeForm from '../screens/EmployeeForm';
import CustomerForm from '../screens/CustomerForm';
import DashboardApp from '../screens/dashboard';
import ProjectCustomerForm from '../screens/ProjectCustomerForm';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const Tab = createMaterialTopTabNavigator();

  const CustomDrawerContent = (props) => (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );

  const EmployeeTabs = () => {
    return (
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ee2524',
          inactiveTintColor: 'black',
          labelStyle: {
            fontSize: 16,
            fontWeight: 'bold',
          },
          style: {
            backgroundColor: 'white',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          indicatorStyle: {
            backgroundColor: '#ee2524',
          },
        }}
      >
        <Tab.Screen name="Employee" component={EmployeeForm} />
        <Tab.Screen name="Customer" component={CustomerForm} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <CustomDrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={DashboardApp} />
        <Drawer.Screen name="Projects" component={ProjectCustomerForm} />
        <Drawer.Screen name="Masters" component={EmployeeTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
