import React from "react";
import { View, StyleSheet,} from "react-native";
import styles from './styles';
import { Button, Text, SafeAreaView,Image,TextComponent,TouchableOpacity, TextInput,} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const termsandconditions = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      < ScrollView>
    <View style={styles.center}>
        <View style={styles.title}>
            <Text style={{fontSize:moderateScale(22),fontFamily:'Poppins-Bond'}}>lorem ipsum</Text>
        </View>
        <View style={styles.title}>
            <Text style={{fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'}}>It is a long established fact that a leader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',making look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</Text>
        </View>
        <View style={styles.title}>
            <Text style={{fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'}}>It is a long established fact that a leader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here'. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested Sections1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H.Rackham.</Text>
        </View>
        <View style={styles,title2}>
            <Text style={{fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'}}>- versions from the 1914 translation by H. Rackham</Text>
        </View>
        <View style={styles,title2}>
            <Text style={{fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'}}>- versions from the 1914 translation by H. Rackham</Text>
        </View>
        <View style={styles,title2}>
            <Text style={{fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'}}>- versions from the 1914 translation by H. Rackham</Text>
        </View>
       
    </View>
    </ScrollView>
    <View style={styles.center}>
    <View style={styles.button}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'#1e90ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'}}
            onPress={() => navigation.push('signup')}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'}}>Accept</Text>

            </TouchableOpacity>
          </View>
          </View>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default termsandconditions;