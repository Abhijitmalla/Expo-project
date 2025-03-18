import { View, Text, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, CollectionReference, getDocs } from 'firebase/firestore'; 
import { db } from './../../FirebaseConfig';
import { FlatList } from 'react-native-gesture-handler';

const Category = () => {
    
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        GetCategories();
    }, []);

    const GetCategories = async () => {
        setCategoryList([]);
        
        try {
            const categoryCollection = CollectionReference(db, 'Category'); // ✅ Ensure `db` is correctly used
            const snapshot = await getDocs(categoryCollection);
            
            const categories = snapshot.docs.map(doc => doc.data()); // ✅ Collect data properly
            setCategoryList(categories); 
            
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };
    console.log(categoryList);
    


    return (
        <View style={{ margin: 20 }}>
            <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
                Category
            </Text>

            <FlatList
                data={categoryList}
                renderItem={({ item }) => (
                    <View>
                        <Image 
                            source={{ uri: item?.ImageUrl }} 
                            style={{ width: 40, height: 40 }} 
                        />
                    </View>
                )}
            
            />
        </View>
    );
};

export default Category;
