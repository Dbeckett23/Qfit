import React, {Component} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WorkoutsList from './screens/WorkoutsList';

const Stack = createStackNavigator();

class QFit extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Workouts'>
          <Stack.Screen name='Workouts' component={WorkoutsList} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};


export default QFit;
