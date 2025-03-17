import { View, Text } from 'react-native';
import React from 'react';
import Header from '@/components/Home/Header';

import Slider from '@/components/Home/Slider';


const home = () => {
  return (
    <View style={{padding:20,
      marginTop:20
    }}>
      {/* Header */}
<Header/>

      {/* Sider */}

<Slider/>
      {/* Category */}

      {/* List of pets */}

      {/* Add new pets */}
      
    </View>
  )
}

export default home;