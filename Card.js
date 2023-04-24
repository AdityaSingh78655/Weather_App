import {View, Text, TouchableOpacity, ImageBackground} from 'react-native';
import React from 'react';
import {DeviceHeight, DeviceWidth} from '../utills/Dimensions';
import { useNavigation } from '@react-navigation/native';

const Card = ({name, image}) => {

  const navigation=useNavigation();

  return (
    <TouchableOpacity
      style={{marginHorizontal: 10}}
      onPress={()=>navigation.navigate('Details',{name})}
      >
      <ImageBackground
        source={image}
        style={{height: DeviceHeight / 5, width: DeviceWidth / 2 - 50}}
        imageStyle={{borderRadius: 16}}
      />
      <View style={{position: 'absolute', height: '100%', width: '100%'}}>
        <Text
          style={{
            fontSize: 28,
            width: '100%',
            height: '100%',
            textAlign: 'center',
            textAlignVertical: 'center',
            color: 'black',
            fontWeight:'bold',
          }}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
