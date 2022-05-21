import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthContext } from './context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const LoginScreen = () => {
    const navigation = useNavigation();
    const Tab = createMaterialTopTabNavigator();
    const { logIn } = React.useContext(AuthContext);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);

    const loginHandle = (userName, password) => {
        logIn(userName, password);   
        
    }


    
    return (
        <View style={styles.mainScreen}>
            <View style = {styles.container}>
                <View style ={{ width: '80%',alignSelf:'center',height:550}}>
                        
                                <View style ={{borderTopLeftRadius: 40, borderTopRightRadius: 40,borderColor:'red',borderWidth:0}}>
                                    <Text style = {{fontSize: 30, fontWeight: 'bold', color: 'black', marginTop: '10%'}}>Welcome Back</Text>

                                    <Text style = {{fontSize: 16, marginTop: '3%', color: 'grey' }}>Sign in with your account</Text>

                                    <View style = {{marginTop:'10%'}}>
                                        <Text style = {{fontSize: 14}}>Username</Text>
                                        <Input
                                            placeholder='email@address.com'
                                            leftIcon={{ type: 'font-awesome', name: 'envelope',size:20 }}
                                            value = {username} onChangeText = {(text) => setusername(text)}
                                            
                                        />
                                        
                                    </View>

                                    <View style = {{}}>
                                        <Text style = {{fontSize: 14}}>Password</Text>
                                        <Input
                                            placeholder='Password'
                                            leftIcon={{ type: 'font-awesome', name: 'lock' , size:25}}
                                            value = {password} onChangeText = {(text) => setpassword(text)}
                                            secureTextEntry={true}
                                            
                                        />
                                    </View>

                                    <View style = {{alignItems: 'center',justifyContent:'center'}}>
                                        <TouchableWithoutFeedback  
                                        style ={{
                                            width: '90%', 
                                            borderRadius: 10, 
                                            alignItems: 'center', 
                                            backgroundColor: '#1a4ad9',
                                            width:259,
                                            height:50,
                                            justifyContent:'center'
                                            }}
                                            onPress={() => navigation.navigate('Order')}>
                                            
                                            {/* <Card 
                                            style ={{
                                                width: '90%', 
                                                borderRadius: 10, 
                                                alignItems: 'center', 
                                                backgroundColor: '#5a2dfc',
                                                width:259,
                                                height:50,
                                                justifyContent:'center'
                                                }}> */}
                                                <Text style ={{fontSize: 20, fontWeight: '600', color: 'white'}}>LOGIN</Text>
                                            {/* </Card> */}
                                        </TouchableWithoutFeedback>
                                    </View>

                                    <Animatable.View style ={{flexDirection: 'row', marginTop: '7%', alignSelf: 'center', marginBottom: '0%', paddingLeft: 70, paddingRight: 70 }} animation = "bounceIn" delay={2000}>
                                        <Text style = {{fontSize: 14}}>Forgot your password? </Text>
                                            <TouchableOpacity>
                                                <Text style = {{fontSize: 15, color: 'blue'}}>Reset here</Text>
                                            </TouchableOpacity>
                                    </Animatable.View>
                                    
                                </View>
                            
                    </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    //   flex: 2,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#fff',
     borderRadius:40,
     borderWidth:1,
     borderColor:'grey',
     shadowColor: '#000',
    shadowOffset: { width: 10, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
    elevation:5,

    },
    mainScreen:{
        backgroundColor:'#01021c',
        borderBottomEndRadius:40,
        borderBottomStartRadius:40,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation:10,
    },
    Touch: {
        width : '50%',
        alignItems: 'center',
        marginTop: '5%'
    }
  });

export default LoginScreen;
