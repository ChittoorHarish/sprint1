import React, {useState} from "react";
import { View, StyleSheet, Text, Image,ScrollView } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

const hamburger = (props) => {

   const [customStyleIndex, setCustomStyleIndex] = useState(0);
 
   const handleCustomIndexSelect = (index) => {
     setCustomStyleIndex(index);
   };

  return (
    <ScrollView>
    <View style={styles.center}>
      
      <View style={styles.ham}>
      <View style={styles.icon}>
      <Icon
                name="menu"
                size={40}
                color="#ffffff"
                onPress={() => props.navigation.openDrawer()}
              />
      </View>
      <View style={styles.fiya}>
        <Image style={styles.profilepic}
        source={require('../assets/image/car.jpg')}>

        </Image>
        <Text style={styles.name}>Bentley</Text>
        <View style={styles.procontainer}>
          <View style={styles.walleticon}>
          <Icon name="wallet-outline" color="white" size={22}/>
          </View>
          <View style={styles.basic}>
          <Text style={styles.points}>300</Text>
          </View>
          <View style={styles.flameicon}>
          <Icon name="flame-outline" color="white" size={18}/>
          </View>
          
          
        </View>

      </View>
      </View>

      <View style={styles.container}>
        <SegmentedControlTab
          values={['Ongoing', 'MyPost']}
          selectedIndex={customStyleIndex}
          onTabPress={handleCustomIndexSelect}
          borderRadius={20}
          tabsContainerStyle={{
            height: hp('7%'),
            width:wp('100%'),
            backgroundColor: '#F2F2F2',
            borderBottomEndRadius:30,
            borderBottomStartRadius:30,
           
          }}
          tabStyle={{
            backgroundColor: '#F2F2F2',
            borderWidth: 0,
            borderColor: 'transparent',
            
          }}
          activeTabStyle={{backgroundColor: '#F2F2F2', marginTop: 2}}
          tabTextStyle={{color: '#888888', fontFamily:'Poppins-Bold',fontSize:moderateScale(17)}}
          activeTabTextStyle={{color: '#444444'}}
        />
        {customStyleIndex === 0 && (
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
                  <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                  <Text style={styles.chaptername}>Algebra</Text>
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
            
        )}
        {customStyleIndex === 1 && (
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
                   <Text style={styles.chaptertitle}>Lorem Ipsum</Text>
                   <Text style={styles.chaptername}>Algebra</Text>
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
        )}
      </View>
      
    </View>
    </ScrollView>
    
  );
};

// const styles = StyleSheet.create({
  
// });

export default hamburger;