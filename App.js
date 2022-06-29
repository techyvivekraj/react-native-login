import { Image, ImageBackground, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import userIcon from './assets/user.png'
import lockIcon from './assets/lock.png'
import { styles } from './assets/styles'

const App = () => {
  const image = { uri: "https://img.freepik.com/free-photo/beautiful-vertical-shot-long-mountain-peak-covered-green-grass-perfect-wallpaper_181624-4986.jpg?w=360&t=st=1656466760~exp=1656467360~hmac=11c1ffd5a79ab6bb5369c73f95b48df2c162e10465d36a4dcf0e54e736d0fdcd" };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.img}>
        <Text style={styles.headerTxt}>Travello</Text>
        <View style={styles.bottomCard}>
          <Text style={styles.loginText}>Login</Text>
          <View style={styles.inputView}>
            <Image source={userIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder='Username'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.inputView}>
            <Image source={lockIcon} style={styles.inputIcon} />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <Text style={styles.forgotTxt}>Forgot Password?</Text>
          <TouchableOpacity style={styles.loginBtn}>
            <Text style={styles.loginBtnText}>Login</Text>
          </TouchableOpacity>
          <View style={{justifyContent:'space-between',flex:1}}>
          <Text style={styles.accountText}>
            Don't have an account? <Text style={styles.registerTxt} onPress={()=>console.log('register')}>Register</Text>
          </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
}

export default App