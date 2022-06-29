import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import tw from 'twrnc';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const Map = () => {
  const Origin = useSelector(selectOrigin);

  return (
    <MapView 
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      {Origin?.location && (
        <Marker
          coordinate={{
            latitude: 37.78825,
            longitude: -122.4324,
          }}
          title="Origem"
          description={Origin.description}
          identifier="Origem"
        />
      )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})