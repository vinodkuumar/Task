import React, {useState, useCallback, useEffect} from 'react';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = useCallback(() => {
    setCount(count + 1);
    alert(count);
    return true;
  }, [count]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', increaseCount);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', increaseCount);
  }, [increaseCount]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
