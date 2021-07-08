import React, {useState,} from "react";
import { View, StyleSheet, Text, Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';
import { useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

const searchfilter = props => {
  const [searchpost, setSearchpost] = useState([]);
  const currentSubCategory = props.route.params.subCategory;
  useEffect(async () => {
    console.log('currentSubCategory', currentSubCategory);
    let token = await AsyncStorage.getItem('auth_token');
    let userid = await AsyncStorage.getItem('auth_userid');
 //  setAuthtoken(a.id)
   fetch(`https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/get?id=${userid}&sub_category_id=${currentSubCategory.id}`,
   {
     method: 'GET',
    headers: {
      "Authorization": 'Bearer ' + token
    }
     
   })
   .then(res=>res.json())
   .then(results=>{
    console.log(
      'resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(results),
    );
    //  console.log("resp:" + JSON.stringify(results))
     setSearchpost(results.data || [])
   })
 },[]) 
  return (
      <ScrollView>
    <View style={styles.basic1}>
    {searchpost.map((run, index) => {
                return (
                  <View style={styles.basic1} key={index}>
                    <View style={styles.heading}>
                      <View style={styles.basic}>
                        <Image
                          style={styles.onpostpic}
                          source={require('../assets/image/galgadot.jpeg')}></Image>
                      </View>
                      <View style={styles.titlebox}>
                        <Text style={styles.nametitle}>Inaya_04</Text>
                        <Text style={styles.occupation}>College Student</Text>
                      </View>
                      <View style={styles.ellipsis}>
                        <Icon
                          name="ellipsis-vertical-outline"
                          color="grey"
                          size={25}
                        />
                      </View>
                    </View>
                    <View style={styles.detailbox}>
                      <View style={styles.detail1}>
                        <View style={styles.touch}>
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate('apply',{currentSubCategory,run})
                            }>
                            <Text style={styles.chaptertitle}>
                              {currentSubCategory.name}
                            </Text>
                            <View style={{flexDirection:'row'}}>
                            <Text style={styles.chaptername}>Needed By</Text>
                            <Text style={{ fontFamily:'Poppins-Regular',fontSize:moderateScale(13),color:'rgb(80,80,80)',lineHeight:21,marginLeft:wp('1%')}}>June-09-2021</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                        <View style={styles.procontainer1}>
                          <View style={styles.basic}>
                            <Text style={styles.pointsbot}>{run.fp}</Text>
                          </View>
                          <View style={styles.flameicon}>
                            <Icon
                              name="flame-outline"
                              color="orange"
                              size={18}
                            />
                          </View>
                        </View>
                      </View>
                      <View style={styles.captionview}>
                        <Text style={styles.description}>
                          {run.description}
                        </Text>
                      </View>
                      <View>
                        {/* <View style={styles.insideview}>
                          <Image
                            style={styles.insidepic}
                            source={require('../assets/image/car.jpg')}></Image>
                        </View> */}
                        {/* {post.media.map((image, imgIndex) => {
                          if (index === 0) {
                            console.log('Images: ' + imgIndex + ' // ' + image);
                          }
                          return (
                            <View key={imgIndex} style={styles.insideview}>
                              <Image
                                style={styles.insidepic}
                                source={{url: image}}></Image>
                            </View>
                          );
                        })} */}
                      </View>
                    </View>
                  </View>
                );
              })}
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
                  <TouchableOpacity onPress={() => props.navigation.navigate('apply')}>
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
                <Text style={styles.description}>This is for trial version for app</Text>
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
            
            </ScrollView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default searchfilter;