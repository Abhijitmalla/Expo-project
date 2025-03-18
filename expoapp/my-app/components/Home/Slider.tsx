// import { View, Text, Dimensions, StyleSheet, Image, FlatList } from 'react-native';
// import React, { useEffect, useState } from 'react';
// import { collection, getDocs } from 'firebase/firestore';
// import { db } from './../../FirebaseConfig';

// export default function Slider() {
//   const [sliderList, setSliderList] = useState([]);

//   useEffect(() => {
//     const GetSliders = async () => {
//       try {
//         const snapshot = await getDocs(collection(db, 'Sliders'));
//         const sliders = [];
//         snapshot.forEach((doc) => {
//           sliders.push(doc.data()); // Collect all data first
//         });
//         setSliderList(sliders); // Set state once
//       } catch (error) {
//         console.error("Error fetching sliders:", error);
//       }
//     };

//     GetSliders();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={sliderList}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.sliderContainer}>
//             <Image source={{ uri: item?.imageUrl }} style={styles.sliderImage} />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     marginTop: 10,
//   },
//   sliderContainer: {
//     marginBottom: 10,
//   },
//   sliderImage: {
//     height: 160,
//     width: Dimensions.get('screen').width * 0.9,
//     borderRadius: 15,
//     resizeMode: 'cover', // Ensure image fits properly
//   },
// });
import { View, Text,Dimensions, StyleSheet, FlatList } from 'react-native';
import React from 'react';
import ImageFile from './../Image';
export default function Slider() {
  return (
    <View>
      <ImageFile/>
    </View>
  )
};