import React, {useState, useEffect} from 'react';
import {Text, StyleSheet, View, Image, ScrollView, ImageBackground, useWindowDimensions, TouchableOpacity} from 'react-native';
import { Button, Card, TextInput} from 'react-native-paper';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TabView, SceneMap } from 'react-native-tab-view';
import * as Animatable from 'react-native-animatable';
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder';
import {Input, Icon, Divider } from 'react-native-elements';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { AuthContext } from './context';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const Checkout = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.SecondContainer}>
                <View style={{flexDirection: 'column', marginTop: '5%', padding: 10}}>
                    <View style={{flexDirection: 'row'}}>
                        <Icon name= 'chevron-left' type= 'font-awesome' size= {18} color= 'white' style={{marginTop: 5}}/>
                        <TouchableOpacity onPress={() => navigation.navigate('Order')}>
                            <Text style={{fontSize: 16, color: 'white', marginTop: '3%', marginLeft: '10%'}}>Back</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{fontSize: 30, fontWeight: '700', color: 'white', marginTop: '7%'}}>Checkout</Text>
                    
                </View>
                <View style={{padding: 15}}>
                    <Card style={{padding: 20, borderRadius: 15}}>
                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}}>DELIVERY ADDRESS</Text>

                        <Card style={{padding: 10, marginTop: 20, borderColor: 'red', borderWidth: 1}}>
                            <Text style={{fontSize: 15, fontWeight: '600', color: 'red'}}>ADDRESS #1</Text>
                            <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>4904 Goldner Ranch</Text>
                        </Card>

                        <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black', marginTop: '20%'}}>PAYEMENT METHOD</Text>

                        <Card style= {{padding: 15, marginTop: '5%', backgroundColor: '#e9f0f7'}}>
                            <View style ={{flexDirection: 'row'}}>
                                <Image
                                    style={{width: '10%', height: '100%'}}
                                    source={{
                                        uri: 'https://play-lh.googleusercontent.com/Ux2yl9kCM9BQttLm-Id7p6y-Sb7Vawm3Dib7mkx0hFB4zWNF38jPpB5kkzIS4wJmGW8',
                                    }}
                                />
                                <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 10}}>**** **** **** </Text>
                                <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>5967 </Text>
                            </View>
                        </Card>

                        <Card style= {{padding: 15, marginTop: '5%', backgroundColor: '#e9f0f7', borderColor: 'red', borderWidth: 1}}>
                            <View style ={{flexDirection: 'row'}}>
                                <Image
                                    style={{width: '10%', height: '130%'}}
                                    source={{
                                        uri: 'https://pbs.twimg.com/profile_images/1440303464391737346/cLVCdOYu_400x400.png',
                                    }}
                                />
                                <Text style={{fontSize: 16, color: 'black', marginLeft: 10}}>wilson.casper@bernice.info </Text>
                                
                            </View>
                        </Card>

                        <Card style= {{padding: 15, marginTop: '5%', backgroundColor: '#e9f0f7'}}>
                            <View style ={{flexDirection: 'row'}}>
                                <Image
                                    style={{width: '10%', height: '100%'}}
                                    source={{
                                        uri: 'https://play-lh.googleusercontent.com/Ux2yl9kCM9BQttLm-Id7p6y-Sb7Vawm3Dib7mkx0hFB4zWNF38jPpB5kkzIS4wJmGW8',
                                    }}
                                />
                                <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold', marginLeft: 10}}>**** **** **** </Text>
                                <Text style={{fontSize: 15, color: 'black', fontWeight: 'bold'}}>3461 </Text>
                            </View>
                        </Card>

                        <View style={{padding: 15, marginTop: '20%'}}>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Checkout')}>
                                            <Card style={{padding: 10, backgroundColor: '#f53179', borderRadius: 10}}>
                                                    <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '700', color: 'white'}}>Payement</Text>
                                            </Card>      
                            </TouchableWithoutFeedback>
                        </View>
                    </Card>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#e9f0f7'
    },
    SecondContainer: {
        flex: 2,
        backgroundColor: '#f53179',
        borderBottomLeftRadius: 60, 
        borderBottomRightRadius: 60, 
        maxHeight: 220
    }
  });
export default Checkout;
