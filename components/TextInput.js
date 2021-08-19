import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';

const Textinput = () => {
  const styles = {
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
  };

  const [name, setName] = useState('Sarim');
  const [age, setAge] = useState('30');

  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        onChangeText={val => (setName = val)}
      />

      <Text>Enter Age:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        onChangeText={val => (setAge = val)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
};

export default Textinput;
