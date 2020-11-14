import React, { Component } from 'react';

import {
  SafeAreaView,
  FlatList,
  View
} from 'react-native';
import { ListItem } from 'react-native-elements';


const workoutsData = require('../data/workouts.json');

class WorkoutsList extends Component {

  renderItemSeperator = () => {
    return (
      <View 
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#808080'
        }}
      />
    );
  }

  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <ListItem onPress={() => {
        console.debug(item.name + ' was clicked');
        navigation.navigate(
          'Workout',
          { 
            id: item.id, 
            title: item.name,
            tasks: item.tasks
          }
        )
      }}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron/>
        <ListItem.Input></ListItem.Input>
      </ListItem>
    );
  }

  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={workoutsData}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={this.renderItemSeperator}
        />
      </SafeAreaView>
    );
  }
};

export default WorkoutsList;
