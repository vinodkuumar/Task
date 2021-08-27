// import React, {useState, useCallback, useEffect} from 'react';
// import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

// const App = () => {
//   const [count, setCount] = useState(0);
//   const increaseCount = useCallback(() => {
//     setCount(count + 1);
//     alert(`you clicked ${count} times`);
//     return true;
//   }, [count]);

//   useEffect(() => {
//     BackHandler.addEventListener('hardwareBackPress', increaseCount);

//     return () =>
//       BackHandler.removeEventListener('hardwareBackPress', increaseCount);
//   }, [increaseCount]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>{count}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white'
//   },
//   text: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;

// import React, {useState, Component} from 'react';
// import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

// const Context = React.createContext('default value');

// export default class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 0,
//     };
//   }
//   backAction = () => {
//     this.setState({count: this.state.count + 1});
//     alert(`you clicked ${this.state.count} times`);
//     return true;
//   };
//   componentDidMount() {
//     BackHandler.addEventListener('hardwareBackPress', this.backAction);
//   }
//   componentWillUnmount() {
//     BackHandler.removeEventListener('hardwareBackPress', this.backAction);
//   }
//   render() {
//     return (
//       <View style={styles.container}>
//         <Context.Provider value={this.state.count}>
//           <Child />
//         </Context.Provider>
//       </View>
//     );
//   }
// }

// class Child extends Component {
//   render() {
//     return (
//       <View>
//         <Context.Consumer>
//           {data => <Text>count here is : {data} </Text>}
//         </Context.Consumer>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, {useState, useContext, createContext,useEffect} from 'react';
// import {View, Text, StyleSheet, Button, BackHandler} from 'react-native';

// const Context = createContext('default value');

// export default function App() {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     const backAction = () => {
//       setCount(count + 1);
//       alert(`you clicked ${count} times`);
//       return true;
//     }
//     const backHandler = BackHandler.addEventListener("hardwareBackPress", backAction)
//     return () => backHandler.remove();
//   },[count])
//   return (
//   <Context.Provider value={count}>
//     <ChildComponent />
//   </Context.Provider>);
// }

// function ChildComponent(props) {
//   var contextData = useContext(Context);
//   return (
//     <View>
//       <Context.Consumer>
//         {data => <Text>count here is : {data} </Text>}
//       </Context.Consumer>
//     </View>
//   );
// }


import React, {useState,useEffect} from 'react';
import {Text, View, StyleSheet, BackHandler, Alert} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
    alert(`you clicked ${count} times`);
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', increaseCount);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', increaseCount);
  }, [count]);

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
    backgroundColor: 'white'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;