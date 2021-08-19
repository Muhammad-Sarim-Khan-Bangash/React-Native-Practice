import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const UseState = () => {
  const [name, setName] = useState('Sarim');
  const [person, setPerson] = useState({
    name: 'Ali',
    age: 30,
  });

  const clickHandler = () => {
    setName('John Doe');
    setPerson({
      name: 'Johnson',
      age: 25,
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
      }}>
      <Text>My name is {name}</Text>
      <Text>
        His name is {person.name} and his age is {person.age}
      </Text>
      <View style={{marginTop: 12}}>
        <Button title="Update State" onPress={clickHandler} />
      </View>
    </View>
  );
};

export default UseState;
