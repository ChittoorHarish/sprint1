import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import styles from './styles';
import OptionsMenu from "react-native-option-menu";
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale, heightPercentageToDP } from '../../services/responsiveFunc';

const homeongoing = (props) => {
    const myIcon = (<Icon name="ellipsis-vertical-outline" color="grey" size={25} />)
   
  return (
      <ScrollView>
      <View style={styles.basic1}>
    <View style={styles.headertitle}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/galgadot.jpeg')}></Image>
</View>
<View style={styles.titlebox}>
  <Text style={styles.nametitle}>Inaya_04</Text>
  <Text style={styles.occupation}>College Student</Text>
</View>
<View style={styles.ellipsis}>
<OptionsMenu
  customButton={myIcon}
  destructiveIndex={1}
  options={["Edit", "Discard", "Cancel"]}
   />
</View>
    </View>
    <View style={styles.bodyview}>
              <View style={styles.info}>
                <View style={{justifyContent:'center',alignItems:'flex-start',flexDirection:'column'}}>
                 
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
        <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('4%'),}}>
            <Image style={styles.insidepic}
        source={require('../assets/image/car.jpg')}></Image>
        </View>
        </View>
            </View>
            <View style={styles.dateview}>
                <Text style={styles.needtext}>Needey by:</Text>
                <Text style={styles.datetext}>20-march-2021</Text>
                <View style={styles.calicon}>
<Icon name="calendar-outline" color="black" size={25}/>
</View>
            </View>
            <View style={styles.dateview}>
                <Text style={styles.needtext}>Communication Preferred:</Text>
                <Text style={styles.datetext}>Chat</Text>
                <View style={styles.calicon}>
<Icon name="chatbox-ellipses-outline" color="black" size={25}/>
</View>
            </View>
            <View
style={{
  borderBottomColor: 'grey',
  borderBottomWidth: 1,
  width:wp("90%"),
  marginLeft:wp('4%'),
  marginTop:hp('1%')
}}
/>
            <View style={styles.applicantview}>
                <Text style={styles.applicanttext}>Applicants</Text>

            </View>
            <View style={styles.detailview}>
            <View style={styles.detail}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/gal.png')}></Image>
</View>
<View style={styles.touch}>
    <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing1')}>
  <Text style={styles.applicantname}>Gal_Gadot</Text>
  <Text style={styles.about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
  </TouchableOpacity>
  <Text style={styles.readmore}>Read more...</Text>
</View>
    </View>
    <View style={styles.pointview}>
        <Text style={styles.offered}>Offered points:</Text>
        <Text style={styles.number}>300</Text>
        <View style={styles.flameicon}>
<Icon name="flame-outline" color="gold" size={16}/>
</View>
<View style={styles.procontainer}>
          
          <Text style={styles.points}>view profile</Text>
          
        </View>



    </View>

                

            </View>
            <View style={styles.detailview}>
            <View style={styles.detail}>
    <View style={styles.basic}>
    <Image style={styles.onpostpic}
source={require('../assets/image/gal.png')}></Image>
</View>
<View style={styles.touch}>
    <TouchableOpacity onPress={() => props.navigation.navigate('homeongoing1')}>
  <Text style={styles.applicantname}>Imily_02</Text>
  <Text style={styles.about}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
  </TouchableOpacity>
  <Text style={styles.readmore}>Read more...</Text>
</View>
    </View>
    <View style={styles.pointview}>
        <Text style={styles.offered}>Offered points:</Text>
        <Text style={styles.number}>300</Text>
        <View style={styles.flameicon}>
<Icon name="flame-outline" color="gold" size={16}/>
</View>
<View style={styles.procontainer}>
          
          <Text style={styles.points}>view profile</Text>
          
        </View>



    </View>

                

            </View>
    </View>
    </ScrollView>

    
  );
};

// const styles = StyleSheet.create({
 
// });

export default homeongoing;