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
import LottieView from 'lottie-react-native';

const Order = () => {
    const navigation = useNavigation();
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setTimeout(async() => {
          setIsLoading(false);
           
        }, 3000);
      }, []);
    
      if(isLoading){
        return(
          <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <LottieView source={require('./62961-loading.json')} autoPlay loop duration={2000}/>
          </View>
        )
        }


    return (
        <View style={styles.container}>
            <View style={styles.SecondContainer}>
                <View style={{flexDirection: 'row', marginTop: '5%', padding: 10}}>
                    <Text style={{fontSize: 30, fontWeight: '700', color: 'white'}}>Order</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                        <Text style={{fontSize: 15, color: 'white', marginLeft: '75%', marginTop: '3%'}}>Close</Text>
                    </TouchableOpacity>
                </View>
                <View style={{padding: 15}}>
                    <Card style={{padding: 20, borderRadius: 15}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>SubTotal</Text>
                            <Text style={{fontSize: 18, marginLeft: '55%'}}>$49.50</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>Taxes & Fees</Text>
                            <Text style={{fontSize: 18, marginLeft: '47%'}}>$2.75</Text>
                        </View>

                        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                            <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>Delivery</Text>
                            <Text style={{fontSize: 17, marginLeft: '64%'}}>Free</Text>
                        </View>

                        <Divider/>

                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{fontSize: 25, fontWeight: '700', color: 'black'}}>Total</Text>
                            <Text style={{fontSize: 23, marginLeft: '55%', color: 'black'}}>$52.25</Text>
                        </View>
                    </Card>
                </View>

            </View>
            <View style={{padding: 15}}>
                <Card style = {{marginTop: '30%', padding: 10, borderRadius: 15}}>
                        <View style = {{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
                            <Image
                                style={{width: '30%', height: '100%'}}
                                source={{
                                    uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
                                }}
                            />
                            <View style={{flexDirection: 'column', marginLeft: 5}}>
                                <Text style={{fontSize: 18, color: 'black'}}>Crispy Chicken San</Text>
                                <Text style={{fontSize: 12}}>2x Kashmiri, 3x Vegetable, 1x noodie</Text>
                                <Text style={{fontSize: 15, color: 'red'}}>$29.50</Text>
                            </View>
                        </View>

                        <Divider/>

                        <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                                <Image
                                    style={{width: '30%', height: '100%'}}
                                    source={{
                                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
                                    }}
                                />
                                <View style={{flexDirection: 'column', marginLeft: 5}}>
                                    <Text style={{fontSize: 18, color: 'black'}}>Crispy Chicken San</Text>
                                    <Text style={{fontSize: 12}}>2x Kashmiri, 3x Vegetable, 1x noodie</Text>
                                    <Text style={{fontSize: 15, color: 'red'}}>$29.50</Text>
                                </View>
                        </View>

                        <Divider/>

                        <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                                <Image
                                    style={{width: '30%', height: '100%'}}
                                    source={{
                                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
                                    }}
                                />
                                <View style={{flexDirection: 'column', marginLeft: 5}}>
                                    <Text style={{fontSize: 18, color: 'black'}}>Crispy Chicken San</Text>
                                    <Text style={{fontSize: 12}}>2x Kashmiri, 3x Vegetable, 1x noodie</Text>
                                    <Text style={{fontSize: 15, color: 'red'}}>$29.50</Text>
                                </View>
                        </View>

                        <Divider/>

                        <View style = {{flexDirection: 'row', marginTop: 20, marginBottom: 10}}>
                                <Image
                                    style={{width: '30%', height: '100%'}}
                                    source={{
                                        uri: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg',
                                    }}
                                />
                                <View style={{flexDirection: 'column', marginLeft: 5}}>
                                    <Text style={{fontSize: 18, color: 'black'}}>Crispy Chicken San</Text>
                                    <Text style={{fontSize: 12}}>2x Kashmiri, 3x Vegetable, 1x noodie</Text>
                                    <Text style={{fontSize: 15, color: 'red'}}>$29.50</Text>
                                </View>
                        </View>    
                </Card>
            </View>

            <View style={{padding: 15}}>
                <TouchableWithoutFeedback onPress={() => navigation.navigate('Checkout')}>
                                <Card style={{padding: 10, backgroundColor: '#f53179', borderRadius: 10}}>
                                        <Text style={{fontSize: 20, textAlign: 'center', fontWeight: '700', color: 'white'}}>Checkout</Text>
                                </Card>      
                </TouchableWithoutFeedback>
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
        borderBottomLeftRadius: 25, 
        borderBottomRightRadius: 25, 
        maxHeight: 200
    }
  });
export default Order;
