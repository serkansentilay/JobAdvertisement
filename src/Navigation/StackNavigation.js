import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Jobs from '../Pages/Jobs'
import Detail from '../Pages/Detail'

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false, statusBarColor: '#EF5350', navigationBarColor: '#EF5350' }}>
            <Stack.Screen name="Job" component={Jobs} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}

export default StackNavigation

