import React, {useState,} from "react";
import { View, StyleSheet, Text, Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const searchfilter = () => {
  return (
      <ScrollView>
    <View style={styles.basic1}>
          <View style={styles.heading}>
            <View style={styles.basic}>
            <Image style={styles.onpostpic}
        source={require('../assets/image/galgadot.jpeg')}></Image>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>College Student</Text>
        </View>
        <View style={styles.ellipsis}>
        <Icon name="ellipsis-vertical-outline" color="grey" size={25}/>
        </View>
            </View>
            
            <View style={styles.detailbox}>
              <View style={styles.detail1}>
                <View style={styles.touch}>
                  <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing')}>
                  <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                  <Text style={styles.chaptername}>Algebra</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.procontainer1}>
          <View style={styles.basic}>
          <Text style={styles.pointsbot}>300</Text>
          </View>
          <View style={styles.flameicon}>
          <Icon name="flame-outline" color="yellow" size={18}/>
          </View>
          
          
        </View>
              </View>
              <View style={styles.captionview}>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm.</Text>
              </View>
              <View style={styles.imageview}>
              <View style={styles.insideview}>
            <Image style={styles.insidepic}
           
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('4%')}}>
            <Image style={styles.insidepic}
            
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        </View>
            </View>
            
            <View style={styles.heading}>
            <View style={styles.basic}>
            <Image style={styles.onpostpic}
        source={require('../assets/image/gal.png')}></Image>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Gal_Gadot</Text>
          <Text style={styles.occupation}>Actress / Model </Text>
        </View>
        <View style={styles.ellipsis}>
        <Icon name="ellipsis-vertical-outline" color="grey" size={25}/>
        </View>
            </View>
            <View style={styles.basic}>
            <View style={styles.detailbox}>
              <View style={styles.detail1}>
                <View style={styles.touch}>
                <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing')}>
                  <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                  <Text style={styles.chaptername}>Algebra</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.procontainer1}>
          <View style={styles.basic}>
          <Text style={styles.pointsbot}>300</Text>
          </View>
          <View style={styles.flameicon}>
          <Icon name="flame-outline" color="yellow" size={18}/>
          </View>
          
          
        </View>
              </View>
              <View style={styles.captionview}>
                <Text style={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm.</Text>
              </View>
              <View style={styles.imageview}>
              <View style={styles.insideview}>
            <Image style={styles.insidepic}
            
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('4%')}}>
            <Image style={styles.insidepic}
           
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        </View>
            </View>
            </View>
            </View>
            
            </ScrollView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default searchfilter;