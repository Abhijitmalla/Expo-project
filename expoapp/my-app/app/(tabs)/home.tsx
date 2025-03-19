import { View, Text } from 'react-native';
import React from 'react';
import Header from '@/components/Home/Header';

<<<<<<< HEAD
// import Slider from '@/components/Home/Slider';


=======
import Slider from '@/components/Home/Slider';
import PetListByCategory from '@/components/Home/PetListByCategory';

>>>>>>> 0a9aaee7a57a51661e9f4d2d5d352b3ec4258022
const Home = () => {
  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      {/* Header */}
<<<<<<< HEAD
<Header/>

      {/* Sider */}

{/* <Slider/> */}
      {/* Category */}

      {/* List of pets */}

      {/* Add new pets */}
      
=======
      <Header />
      {/* Slider */}
      <Slider />
      {/* Pet List by Category */}
      <PetListByCategory />
>>>>>>> 0a9aaee7a57a51661e9f4d2d5d352b3ec4258022
    </View>
  );
};

<<<<<<< HEAD
export default Home;
=======
export default Home;
>>>>>>> 0a9aaee7a57a51661e9f4d2d5d352b3ec4258022
