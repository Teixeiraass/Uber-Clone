import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_PLACES_API_KEY } from '../screens/HomeScreen';
import { useDispatch } from "react-redux";
import { setDestination } from '../slices/navSlice';

const NavigateCard = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Sonny</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete 
            styles={toInputBoxStyle}
            placeholder='Pra onde?'
            fetchDetails={ true }
            returnKeyType={"search"}
            minLength={2}
            onPress={(data,details = null) => {
              dispatch(setDestination({
                location: details, geometry,
                description: data.description,
              }))

              navigation.navigate('rideOptionCard')
            }}
            enablePoweredByContainer={ false }
            query={{
              key: GOOGLE_PLACES_API_KEY,
              language: "en",
            }}
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyle = StyleSheet.create({
  container: {
    backgroundColor: "White",
    paddingTop: 20,
    flex: 0
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  }
})