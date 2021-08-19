import React, {useState} from 'react';
import {View, Text, FlatList} from 'react-native';

const ListAndScroll = () => {
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

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <FlatList
        keyExtractor={item => item.id}
        data={people}
        renderItem={({item}) => (
          <>
            <Text
              style={{
                marginTop: 24,
                padding: 30,
                backgroundColor: '#222',
                color: '#fff',
                fontSize: 18,
                width: 300,
              }}>
              {item.name}
            </Text>
          </>
        )}
      />
    </View>
  );
};

export default ListAndScroll;
