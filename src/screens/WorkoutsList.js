import React, { Component } from 'react';
import { MenuProvider } from 'react-native-popup-menu';

import {
  SafeAreaView,
  FlatList,
  Button
} from 'react-native';
import { ListItem } from 'react-native-elements';


const workoutsData = require('../data/workouts.json');

class WorkoutsList extends Component {

  constructor() {
    super();
    console.log('ctor was called');
  }

  handleAddWorkout = () => {
    console.log('add workout buttong was pressed');
  }

  renderItemSeperator = () => {
    return (
      <SafeAreaView 
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#0398fc'
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
        );
      }}>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron/>
      </ListItem>
    );
  }

  render() {
    const { navigation } = this.props;

    return (
      <MenuProvider>
        <SafeAreaView>
          <FlatList
            data={workoutsData}
            renderItem={this.renderItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={this.renderItemSeperator}
          />
          <Button title='Add Workout' onPress={this.handleAddWorkout} />
        </SafeAreaView>
        </MenuProvider>
    );
  }
};

export default WorkoutsList;
