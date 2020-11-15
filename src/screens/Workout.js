import React, {Component} from 'react';
import { 
  SafeAreaView,
  Text,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';

class Workout extends Component {

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
    // down to the road I'll probably render the types differently
    if (item.type === 'break') {
      item['name'] = 'break'
    }
    console.log('the item: ' + item.name);

    return(
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>{item.name}</ListItem.Title>
          <ListItem.Subtitle>{item.time} seconds</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  }

  render() {
    const { id, title, tasks } = this.props.route.params;
    return (
     <SafeAreaView>
       <FlatList
         data={tasks}
         renderItem={this.renderItem}
         keyExtractor={item => item.id}
         ItemSeparatorComponent={this.renderItemSeperator}
       />
     </SafeAreaView>
    );
  }
};

export default Workout;