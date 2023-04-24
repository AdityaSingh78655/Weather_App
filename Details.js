import {View, Text, ImageBackground} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DeviceHeight, DeviceWidth} from '../utills/Dimensions';
import {Constant} from '../Constants';
import {Image} from 'react-native-animatable';
import * as Animatable from 'react-native-animatable';

const Details = props => {
  const {name} = props.route.params;

  const [data, setData] = useState('');

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${Constant.API_KEY}`,
    )
      .then(res => res.json())
      .then(res => setData(res))
      .catch(err => console.log(err));
  }, []);

  return (
    <View>
      <ImageBackground
        source={require('../../assets/image2.jpg')}
        style={{width: DeviceWidth, height: DeviceHeight}}
      />

      <View
        style={{
          position: 'absolute',
          alignContent: 'center',
          alignSelf: 'center',
          marginTop: 20,
        }}>
        <View style={{flexDirection: 'row', paddingTop: 110}}>
          <Text style={{fontSize: 40, fontWeight: 'bold', color: '#00FED7'}}>
            Weather
          </Text>
          <Animatable.Image
            animation="slideInDown"
            direction="alternate"
            iterationCount={'infinite'}
            source={require('../../assets/sun.png')}
            style={{height: 90, width: 90, marginTop: -40}}
          />
        </View>

        <Text
          style={{
            color: '#FEFA00',
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 130,
          }}>
          App
        </Text>
        {data.cod == 200 ? (
          <View
            style={{
              marginTop: DeviceHeight / 5,
              paddingHorizontal: DeviceWidth / 40,
            }}>
            <Text
              style={{
                fontSize: 30,
                color: 'red',
                fontWeight: '800',
                alignSelf: 'center',
              }}>
              City: {name}
            </Text>
            <Text style={{fontSize: 25, color: 'white'}}>
              Weather : {data['weather'][0]['main']}
            </Text>
            <Text style={{fontSize: 25, color: 'white'}}>
              Description : {data['weather'][0]['description']}
            </Text>
            <Text style={{fontSize: 25, color: 'white'}}>
              Description : {(data.main.temp - 273).toFixed(2)} °C
            </Text>
          </View>
        ) : (
          <Text
            style={{
              fontSize: 30,
              color: 'red',
              fontWeight: '800',
              alignSelf: 'center',
            }}>
            city not found
          </Text>
        )}
      </View>
    </View>
  );
};

export default Details;
