import { StyleSheet, Text, View ,Image, TextInput, ScrollView} from 'react-native'
import React from 'react'
import pattern from '../../assets/pattern.png';
import logo from '../../assets/mainlogo.png'
import {button1} from '../common/button';
import {formgroup, head1, head2, input, input1, lable, link, link2} from '../common/formcss';



const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
    <Image style={styles.patternbg} source={pattern}/>
    <View style={styles.container1}>
      <View style={styles.s1}>
        
      </View>
      <ScrollView style={styles.s2}>
      
         <Text  style={head1}>Create a New Account</Text>
         <Text style={link2}>Already Registered? &nbsp;
            <Text style={link}
            onPress={()=>navigation.navigate('login')}
            >
              Login here
              </Text>
            </Text>
          <View style={formgroup}>
             <Text style={lable}>Name</Text>
             <TextInput style={input} placeholder="Enter your Name"/>
          </View>
          <View style={formgroup}>
             <Text style={lable}>Email</Text>
             <TextInput style={input} placeholder="Enter your Email"/>
          </View>
          <View style={formgroup}>
             <Text style={lable}>DOB</Text>
             <TextInput style={input} placeholder="Enter your Date of Birth"/>
          </View>
          <View style={formgroup}>
             <Text style={lable}>Password</Text>
             <TextInput style={input} placeholder="Enter your Password"/>
          </View>
          <View style={formgroup}>
             <Text style={lable}> Conform Password</Text>
             <TextInput style={input} placeholder=" Conform your Password"/>
          </View>
          <View style={formgroup}>
             <Text style={lable}> Enter of your Address</Text>
             <TextInput style={input1} placeholder="Enter your Address"/>
          </View>
          <Text style={button1}>Sign up</Text>
       
      </ScrollView>
    </View>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    paddingBottom: 20,
    } ,
    patternbg: {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
    },
    container1:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'100%',
      width:'100%',
    } ,
    s1:{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '10%',
    } ,
    small1:{
       color : '#fff',
       fontSize: 17,
    },
    h1:{
        fontSize: 30,
        color: '#fff',
    },
   s2:{
       display: 'flex',
       backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding : 20,
    },

    formgroup:{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      marginVertical: 10,
    },
    lable:{
      fontSize: 17,
      color: '#000',
      marginLeft: 10,
      marginBottom: 5,
    },
    input:{
      backgroundColor: '#E490C4',
      borderRadius: 20,
      padding: 10,
      fontSize: 20,
    },
   fp:{
      display: 'flex',
      alignItems: 'flex-end',
      marginHorizontal: 10,
      marginVertical: 5,
   },
})