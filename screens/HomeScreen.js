import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';

const GOOGLE_PLACES_API_KEY = 'AIzaSyC2bN80FSJwlU9sZw-7myHwaaMLrYAFuUc';

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}> 
        <Image 
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain"
          }}
          source={{
            url: "https://logodownload.org/wp-content/uploads/2015/05/uber-logo-7.png",
          }}
        />

        <GooglePlacesAutocomplete 
          placeholder='Pra onde?'
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"Search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_PLACES_API_KEY,
            language: 'en', // language of the results
          }}
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        <NavOptions/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: 'blue',
  }
})