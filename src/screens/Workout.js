import React, {Component} from 'react';
import { 
  SafeAreaView,
  Text
} from 'react-native';

class Workout extends Component {
  render() {
    const { id, title, tasks } = this.props.route.params;

    console.log(tasks)
    return (
     <SafeAreaView>
       <Text>Workout Screen... </Text>
     </SafeAreaView>
    );
  }
};

export default Workout;