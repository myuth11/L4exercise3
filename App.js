// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
//
// export default function App() {
//   return (
//       <View style={styles.container}>
//         <View style={styles.bigBlueBox}>
//           <Text style={[styles.smallBlueBox, {backgroundColor: 'powderblue'},styles.childOneBox]}>
//             Child One
//           </Text>
//           <Text style={[styles.smallBlueBox, {backgroundColor: 'skyblue'}]}>
//             Child Two
//           </Text>
//           <Text style={[styles.smallBlueBox, {backgroundColor: 'steelblue'},styles.childThreeBox]}>
//             Child Three
//           </Text>
//         </View>
//         <StatusBar style="auto" />
//       </View>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     justifyContent: 'center',
//   },
//   bigBlueBox:{
//     backgroundColor: '#F5fcff',
//     flexDirection: 'column', // Changed to column
//     borderColor: '#0099AA',
//     borderWidth: 5,
//     flex: 1, // Makes sure the container takes full height of the parent
//   },
//   smallBlueBox:{
//     borderWidth: 2,
//     borderColor: '#000', // Added border color for visibility
//     textAlign: 'center', // Align text to center
//     fontSize: 24,
//     flex: 1, // Each child takes equal space
//   },
//   childOneBox:{
//     width:90
//   },
//   childThreeBox:{
//     height:120
//   }
// });
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View >
        <View style={styles.bigBlueBox}>
          <Text style={[styles.smallBlueBox,{backgroundColor:'powderblue'}]}>
            Child One
          </Text>
          <Text style={[styles.smallBlueBox,{backgroundColor:'skyblue'}]}>
            Child Two
          </Text>
          <Text style={[styles.smallBlueBox,{backgroundColor:'steelblue'}]}>
            Child Three
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  bigBlueBox:{
    backgroundColor: '#F5fcff',
    flexDirection: 'column',
    borderColor: '#0099AA',
    borderWidth: 5,
    // justifyContent: 'space-evenly',
    // justifyContent:'flex-start',
    // justifyContent:'space-between',
    // justifyContent:'space-around'



  },
  smallBlueBox:{
    borderWidth: 2,
    textAlign: 'center',
    fontSize: 24,





  }
});

