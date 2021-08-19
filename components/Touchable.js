import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

const Touchable = () => {
  const [people, setPeople] = useState([
    {name: 'Ali', id: '1'},
    {name: 'Ahmed', id: '2'},
    {name: 'John', id: '3'},
    {name: 'Sarim', id: '4'},
    {name: 'Saim', id: '5'},
    {name: 'Azam', id: '6'},
    {name: 'Kamran', id: '7'},
    {name: 'Ghulam', id: '8'},
    {name: 'Arsalan', id: '9'},
  ]);

  const pressHandler = id => {
    setPeople(prevPeople => {
      return prevPeople.filter(person => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <>
            <TouchableOpacity onPress={() => pressHandler(item.id)}>
              <Text style={styles.item}>{item.name}</Text>
            </TouchableOpacity>
          </>
        )}
      />
    </View>
  );
};
const styles = StyleSheet.create({
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
});

export default Touchable;
