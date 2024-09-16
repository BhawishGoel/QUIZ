import {Image, Pressable, StyleSheet, Text, View, Button} from 'react-native';
import React from 'react';

const Splash = ({navigation}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/images/image1.png')}
        style={styles.Image1}
      />
      <Text
        style={{
          fontSize: 40,
          textAlign: 'center',
          fontWeight: 'bold',
          color: 'black',
          paddingTop: 19,
          paddingBottom: 20,
        }}>
        Instructions
      </Text>
      <View style={styles.splashText}>
        <Text style={styles.textConatiner}>
          Each Questions has four Options
        </Text>
        <Text style={styles.textConatiner}>
          Progress will be shown at the Top
        </Text>
        <Text style={styles.textConatiner}>
          Score will be shown at the End
        </Text>
      </View>
      <Pressable
        style={{
          backgroundColor: 'purple',
          marginTop: 20,
          borderRadius: 10,
        }}>
        <Text
          style={{color: 'white', fontSize: 25, padding: 10}}
          onPress={() => navigation.navigate('Questions')}>
          Start
        </Text>
      </Pressable>
      {/* <Button
        title="Start"
        onPress={() => navigation.navigate("Questions")}
      /> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  Image1: {
    height: 400,
    aspectRatio: 1,
  },
  splashText: {
    backgroundColor: 'purple',
    borderRadius: 20,
    height: 130,
    width: 350,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  textConatiner: {
    color: 'white',
    fontSize: 20,
  },
});
