import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';

const ListAndScroll = () => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    item: {
      marginTop: 24,
      padding: 30,
      backgroundColor: '#222',
      color: '#fff',
      fontSize: 18,
      width: 300,
    },
  };
  const [people, setPeople] = useState([
    {name: 'Ali', key: '1'},
    {name: 'Ahmed', key: '2'},
    {name: 'John', key: '3'},
    {name: 'Sarim', key: '4'},
    {name: 'Saim', key: '5'},
    {name: 'Azam', key: '6'},
    {name: 'Kamran', key: '7'},
    {name: 'Kamran', id: '7'},
    {name: 'Ghulam', id: '8'},
    {name: 'Arsalan', id: '9'},
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((v, i) => {
          return (
            <View key={i}>
              <Text style={styles.item}>{v.name}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default ListAndScroll;
