import React from "react";
import { View, StyleSheet,} from "react-native";
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button, Text, SafeAreaView,Image,TextComponent,TouchableOpacity, TextInput,} from 'react-native';
import { ScrollView } from "react-native-gesture-handler";
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const notifications = ({navigation}) => {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:'white'}}>
      < ScrollView>
      <View style={styles.basic}>
      <View style={styles.notificationbox}>
          <View style={styles.headerbox}>
              <Text style={styles.notificationtext}>All Notifications</Text>
              <Text style={styles.markread}>Mark all as read</Text>

          </View>
          <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
           
            <View style={styles.bottombutton}>
    <View style={styles.button}>
            <TouchableOpacity style={styles.negotiatebox1}>
              <Text style={styles.negotiatetext}>Negotiate</Text>

            </TouchableOpacity>
          <TouchableOpacity style={styles.acceptbox}>
              <Text style={styles.accepttext}>Accept</Text>

            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.bottombutton}>
    <View style={styles.button}>
            <TouchableOpacity style={styles.negotiatebox}>
              <Text style={styles.negotiatetext}>Negotiate</Text>

            </TouchableOpacity>
          </View>
          </View>
          <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
            <View style={styles.heading}>
            <View style={styles.basic}>
            <View style={styles.onpostpic}>
            <Icon name="images-outline" color="grey" size={25}/>
            </View>
        </View>
        <View style={styles.titlebox}>
          <Text style={styles.nametitle}>Inaya_04</Text>
          <Text style={styles.occupation}>Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. </Text>
        </View>
        <View style={styles.ellipsis}>
       <Text style={styles.time}>23mins</Text>
        </View>
            </View>
   

      </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
  
// });

export default notifications;