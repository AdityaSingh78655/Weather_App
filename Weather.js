import {
  View,
  Text,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useRef, useState,useCallback} from 'react';
import {DeviceHeight, DeviceWidth} from '../utills/Dimensions';
import Card from './Card';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Weather = props => {
  const [city, setCity] = useState('');

  const navigation = useNavigation();

  const formikRef = useRef(null);
  useFocusEffect(
    useCallback(() => {
      formikRef.current?.resetForm();
    }, [])
  );

  const cities = [
    {
      name: 'New Delhi',
      image: require('../../assets/image3.jpg'),
    },
    {
      name: 'New York',
      image: require('../../assets/image4.jpg'),
    },
    {
      name: 'London',
      image: require('../../assets/image5.jpg'),
    },
    {
      name: 'San Francisco',
      image: require('../../assets/image6.jpg'),
    },
    {
      name: 'New Jersey',
      image: require('../../assets/image7.jpg'),
    },
  ];

  return (
    <View>
      <ImageBackground
        source={require('../../assets/image1.jpg')}
        style={{width: DeviceWidth, height: DeviceHeight}}
      />

      <View
        style={{
          position: 'absolute',
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: DeviceWidth - 40,
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('../../assets/menu.png')}
            style={{tintColor: 'white'}}
          />
          <Image
            source={require('../../assets/avatar.png')}
            style={{width: 50, height: 50}}
          />
        </View>

        <View>
          <Text style={{color: 'white', marginTop: 100, fontSize: 25}}>
            Hello Aditya
          </Text>
          <Text style={{color: 'white', letterSpacing: 2, fontWeight: 'bold'}}>
            search the city by name
          </Text>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'white',
            marginTop: 15,
            borderRadius: 20,
            paddingHorizontal: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TextInput
            value={city}
            onChangeText={value => setCity(value)}
            placeholder="Search the city"
            placeholderTextColor="white"
            style={{paddingHorizontal: 10, color: 'white', fontSize: 16}}
          />
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Details', {name: city})}
            style={{alignSelf: 'center'}}>
            <Image
              source={require('../../assets/search.png')}
              style={{tintColor: 'white'}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text
            style={{
              color: 'white',
              fontSize: 25,
              paddingHorizontal: 10,
              marginTop: 220,
              marginBottom: 20,
            }}>
            My Locations
          </Text>
          <FlatList
            horizontal
            data={cities}
            renderItem={({item}) => (
              <Card name={item.name} image={item.image} />
            )}
          />
        </View>
      </View>
    </View>
  );
};

export default Weather;
