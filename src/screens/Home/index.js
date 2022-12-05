import {View,Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import {solarizedColors, twitterColors} from '../../common/colors'
import routes from '../../common/routes';
import { useNavigation } from '@react-navigation/native';
const Home =()=>{
    const {navigate} =useNavigation();
    const schemeList =[
        {
            scheme:twitterColors,
            title:'Twitter Colors',
        },
        {
            scheme:solarizedColors,
            title:'Solarized Colors',
        },
    ];
    return(
         <View style={styles.cotainerStyle}>
               {schemeList.map(({scheme,title})=>(
              <Pressable onPress={()=> navigate(routes.palette ,{name : title ,colors:scheme})}
            style={[
                styles.itemContainer,
            {
             backgroundColor:scheme[3].hexCode,
            },
            ]}>
            <Text style={styles.titleStyle}>{title}</Text>
            <View style={styles.colorsContainer}>
            {scheme.slice(0,3).map(({colorName,hexCode})=>(
            <View style={[styles.colorItem ,{backgroundColor:hexCode}]} 
            key={hexCode}/>))}
            </View>
             </Pressable>  
              ))}
         </View>
        )
};

export default Home;


     {/* <Pressable onPress={()=> navigate(routes.palette)}
               style={styles.itemContainer}>
            <Text style={styles.titleStyle}>Solarized Colors</Text>
            <View style={styles.colorsContainer}>
            {solarizedColors.slice(0,3).map(({colorName,hexCode})=>(
            <View style={[styles.colorItem ,{backgroundColor:hexCode}]} 
            key={hexCode}/>))}
            </View>
             </Pressable>  */}

