import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';

export default function App() {
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Guess a number between 1-100');
  const [counter, setCounter] = useState(1);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuess = () => {
    const guessNum = parseInt(guess);

    if (isNaN(guessNum)) {
      setMessage('Your guess is not a valid number.');
    } else if (guessNum < 1 || guessNum > 100) { 
      setMessage('Your guess is out of range.');
    } else if (guessNum < randomNumber) {
      setMessage(`Your guess ${guess} is too low.`);
      setCounter(counter + 1);
    } else if (guessNum > randomNumber) {
      setMessage(`Your guess ${guess} is too high.`);
      setCounter(counter + 1);
    } else {
      Alert.alert(`You guessed the number in ${counter} guesses`);
      setRandomNumber(generateRandomNumber());
      setGuess('');
      setCounter(1);
      setMessage('Guess a number between 1-100');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{message}</Text>
      <TextInput
        style={{ width: 100, borderColor: 'gray', borderWidth: 1, margin: 10 }}
        onChangeText={(text) => setGuess(text)}
        value={guess}
        keyboardType="numeric"
      />
      <Button title="Make a guess" onPress={handleGuess} />
    </View>
  );
}