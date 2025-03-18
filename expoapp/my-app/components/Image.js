import { View, Text,StyleSheet } from 'react-native';
import React from 'react';
import { Image } from 'react-native';

const ImageFile = () => {
  return (
    <View>
     <Image source={require('./../assets/images/petbanner.webp')} style={styles.ImageStyle}/>
    </View>
  )
}

export default ImageFile;
const styles = StyleSheet.create({
    ImageStyle:{
        height:200,
        width:350,
        borderRadius:10,
    }
});