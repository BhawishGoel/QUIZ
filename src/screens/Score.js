import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';

const Score = ({navigation}) => {
  const route = useRoute();

  const {Score} = route.params;

  return (
    <View style={styles.imageContainer}>
      <Image
      resizeMode="contain"
        source={require('../assets/images/image3.png')}
        style={styles.Image1}
      />
      <Text style={styles.text}>
        Congratulations !! Your Scored {Score} points
      </Text>
      <Pressable style={styles.btnContainer} onPress={()=> navigation.navigate("Splash")} >
        <Text style={styles.btn}>Play Again</Text>
      </Pressable>
    </View>
  );
};

export default Score;

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: 'center',
    flex: 1,
  },
  Image1: {
    height: 400,
    aspectRatio: 1,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 40,
  },
  btn: {
    color: 'white',
    fontSize: 25,
    padding: 10,
  },
  btnContainer: {
    backgroundColor: 'purple',
    marginTop: 20,
    borderRadius: 10,
    width: 380,
    paddingLeft: 130,
  },
});
