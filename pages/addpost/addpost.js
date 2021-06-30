import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Switch,} from 'react-native';
import DropDownPicker from "react-native-custom-dropdown";
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Button,
  Text,
  SafeAreaView,
  Image,
  TextComponent,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';
import { ScrollView } from 'react-native-gesture-handler';
export default class addpost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: 'uk',
      subject:'maths'
    }

  }
  render() {
  return (
    <ScrollView>
    <View style={styles.center}>
      <View style={styles.frame}>
          <Text style={styles.headings}>Title</Text>
          <View style={styles.SectionStyle}>
          <TextInput
              style={styles.textin}
              placeholder="Enter Title" 
              placeholderTextColor="rgb(189,189,189)"
          />
        </View>
        <Text style={styles.headings2}>Select Category</Text>
        <DropDownPicker
    items={[
        {label: 'UK', value: 'uk'},
        {label: 'France', value: 'france'},
    ]}
    defaultValue={this.state.country}
    containerStyle={{width:wp('93%')}}
    style={{backgroundColor: '#fff',borderColor:'transparent',borderWidth:2,borderBottomColor:'rgb(189,189,189)',}}
    itemStyle={{
        justifyContent: 'flex-start',
    }}
    dropDownStyle={{backgroundColor: '#fff'}}
    onChangeItem={item => this.setState({
        country: item.value
    })}
/>
          {/* <View style={styles.SectionStyle}>
 
          <TextInput
              style={styles.textin2}
              placeholder="Mathematics" 
              placeholderTextColor="rgb(80,80,80)"
          />
        </View> */}
        
        <Text style={styles.headings2}>Select Subcategory</Text>
        
        <View>
        <DropDownPicker
    items={[
        {label: 'MATHS', value: 'maths'},
        {label: 'PS', value: 'ps'},
    ]}
    defaultValue={this.state.subject}
    containerStyle={{width:wp('93%')}}
    style={{backgroundColor: '#fff',borderColor:'transparent',borderWidth:2,borderBottomColor:'rgb(189,189,189)',}}
    itemStyle={{
        justifyContent: 'flex-start',
    }}
    dropDownStyle={{backgroundColor: '#fff'}}
    onChangeItem={item => this.setState({
        subject: item.value
    })}
/>
</View>

          {/* <View style={styles.SectionStyle}>
 
          <TextInput
              style={styles.textin2}
              placeholder="Algebra" 
              placeholderTextColor="rgb(80,80,80)"
          />
        </View> */}
        
        <Text style={styles.headings2}>Add Reward Points</Text>
        
          <View style={styles.SectionStyle}>
 
          <TextInput
              style={styles.textin2}
              placeholder="300" 
              placeholderTextColor="rgb(80,80,80)"
          />
           <View style={styles.basic}>
      <Icon name="flame-outline" color="orange" size={20}/>
      </View>
        </View>
        
        <Text style={styles.headings2}>Description</Text>
       
              <TextInput
                style={styles.message}
                placeholder="Type here..."
                multiline={true}>                  
                </TextInput>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.headings3}>Upload Media</Text>
                <View style={styles.info}>
      <Icon name="information-circle-outline" color="rgb(0,153,218)" size={20}/>
      </View>
                </View>
                <View style={styles.putimage}>
                  <View style={styles.addicon}>
                    <TouchableOpacity>
                      <Icon name="cloud-upload-outline" size={25} color="rgb(189,189,189)" />
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.headings2}>Preferred communication method</Text>
                <View style={styles.SectionStyle}>
 
 <TextInput
     style={styles.textin2}
     placeholder="Chat" 
     placeholderTextColor="rgb(80,80,80)"
 />
</View>
<Text style={styles.headings2}>Completion deadline</Text>
<View style={styles.country}>
        <View style={styles.SectionStyle1}>

   <TextInput
       style={styles.textin2}
       placeholder="11-30-1967"
       placeholderTextColor="rgb(80,80,80)"
   />
   <View style={styles.basic}>
   <Icon name="calendar-outline" size={20}/>
</View>

 </View>
 <View style={styles.SectionStyle1}>

   <TextInput
       style={styles.textin2}
       placeholder="9:30AM"
       placeholderTextColor="rgb(80,80,80)"
   />
   <View style={styles.basic}>
<Icon name="time-outline" size={20}/>
</View>

 </View>
 </View>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.marktouch}>
            <Text style={styles.marktext}>Post</Text>
          </TouchableOpacity>
          </View>
          <View
              style={{
                borderBottomColor: 'transparent',
                borderBottomWidth: 1,
                width: wp('50%'),
                marginLeft: wp('4%'),
                marginTop: hp('1%'),
                marginBottom:hp('1%')
              }}
            />
          </View>
      </View>
    </ScrollView>
  );
  };
};

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });