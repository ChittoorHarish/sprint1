import React, {useState} from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

const hamburger = ({navigation}) => {

   // For single select SegmentedControlTab
   const [selectedIndex, setSelectedIndex] = useState(0);
   // For multi select SegmentedControlTab
   const [selectedIndices, setSelectedIndices] = useState([0]);
   // For custom SegmentedControlTab
   const [customStyleIndex, setCustomStyleIndex] = useState(0);
 
   const handleSingleIndexSelect = (index) => {
     // For single Tab Selection SegmentedControlTab
     setSelectedIndex(index);
   };
 
   const handleMultipleIndexSelect = (index) => {
     // For multi Tab Selection SegmentedControlTab
     if (selectedIndices.includes(index)) {
       // Included in the selected array then remove
       setSelectedIndices(
         selectedIndices.filter((i) => i !== index)
       );
     } else {
       // Not included in the selected array then add
       setSelectedIndices([...selectedIndices, index]);
     }
   };
 
   const handleCustomIndexSelect = (index) => {
     // Tab selection for custom Tab Selection
     setCustomStyleIndex(index);
   };

  return (
    <View style={styles.center}>
      <View style={styles.ham}>
      <View style={styles.icon}>
      <Icon
                name="menu"
                size={40}
                color="#ffffff"
                onPress={() => navigation.openDrawer()}
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
          <View style={{justifyContent:'center',alignItems:'flex-start'}}>
          <View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),}}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <Image style={styles.onpostpic}
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%")}}>
          <Text style={{fontSize:moderateScale(16),fontFamily:'Poppins-Bold',color:'black'}}>Inaya_04</Text>
          <Text style={{fontSize:moderateScale(15),fontFamily:'Poppins-Regular',color:'#888888'}}>College Student</Text>
        </View>
        <View style={{justifyContent:'flex-end',alignItems:'flex-end',marginHorizontal:wp('38%')}}>
        <Icon name="ellipsis-vertical-outline" color="grey" size={25}/>
        </View>
            </View>
            <View style={{justifyContent:'flex-start',marginLeft:wp('5%'),alignItems:'flex-start',borderWidth:0.5,borderColor:'grey',height:hp("31%"),width:wp('90%'),marginTop:hp('2%'),borderRadius:10}}>
              <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:hp('1.5%')}}>
                <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
                  <Text style={{fontFamily:'Poppins-Bold',fontSize:moderateScale(16)}}>Lorem Ipsum</Text>
                  <Text style={{fontFamily:'Poppins-Regular',fontSize:moderateScale(15),color:'#888888'}}>Algebra</Text>
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
              <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('4%'),marginEnd:wp('4%'),marginTop:hp('1%')}}>
                <Text style={{fontFamily:'Poppins-Regular',fontSize:moderateScale(13)}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of lorm.</Text>
              </View>
              <View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('1%')}}>
              <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('40%')}}>
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
            
        )}
        {customStyleIndex === 1 && (
          <Text style={styles.tabContent}> MY POST TAB</Text>
        )}
      </View>
      
    </View>
    
  );
};

// const styles = StyleSheet.create({
  
// });

export default hamburger;