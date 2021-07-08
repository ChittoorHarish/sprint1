// Navigate Between Screens using React Navigation in React Native //
// https://aboutreact.com/react-native-stack-navigation //
import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {
  Button,
  View,
  Text,
  SafeAreaView,
  Image,
  TextComponent,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
} from '../../services/responsiveFunc';
import AsyncStorage from '@react-native-async-storage/async-storage';

const newpassword = props => {
  const [confirm_password, setConfirm_password] = useState('');
  const [password, setPassword] = useState('');
  const [authtoken, setAuthtoken] = useState('');
  const [errormsg, setErrormsg] = useState(false);
  const [errormsgtext, setErrormsgtext] = useState('');
  useEffect(() => {
    setAuthtoken(AsyncStorage.getItem('auth_token'));
  }, []);

  sendcred = () => {
    alert(JSON.stringify(authtoken));
    if (!password.trim()) {
      setErrormsgtext('Please Enter Password');
      setErrormsg(true);
      return;
    }
    //Check for the Email TextInput
    if (!confirm_password.trim()) {
      setErrormsgtext('Please Enter Confirm Password');
      setErrormsg(true);
      return;
    }
    //Checked Successfully
    //Do whatever you want

    console.log(confirm_password, password);
    fetch(
      'https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/password/reset',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          //'Token':"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjIwIiwiZW1haWwiOiJzaW5naG5lZXJhajMxQGdtYWlsLmNvbSIsImlhdCI6MTYyMTQyNjQyMCwiZXhwIjoxNjIxNDI2NzIwfQ.0hRfm3hjDiaiS9a7spJ1QYNkysRw5tuZNdpX-JYM3qE"
        },
        body: JSON.stringify({
          confirm_password: confirm_password,
          password: password,
        }),
      },
    )
      .then(res => res.json())
      .then(responseJson => {
        //Success
        alert(JSON.stringify(responseJson));
        console.log(responseJson.data);
      })
      //If response is not in json then in error
      .catch(error => {
        //Error
        alert(JSON.stringify(error));
        console.error(error);
      });
    //If response is not in json then in error
  };

  return (
    <SafeAreaView style={styles.safe}>
      <View style={{justifyContent: 'center'}}>
        <View style={styles.setnewpass}>
          <Text style={styles.title}>Set New Password</Text>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: hp('4%'),
          }}>
          <View style={styles.SectionStyle1}>
            <View style={styles.basic}>
              <Icon name="lock-closed-outline" size={30} />
            </View>

            <TextInput
              style={styles.field}
              placeholder={'New Password'}
              secureTextEntry={false}
              value={password}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <View style={styles.SectionStyle1}>
            <View style={styles.basic}>
              <Icon name="lock-closed-outline" size={30} />
            </View>

            <TextInput
              style={styles.field}
              placeholder={'Confirm Password'}
              secureTextEntry={false}
              value={confirm_password}
              onChangeText={text => setConfirm_password(text)}
            />
          </View>
        </View>
        {errormsg ? (
          <View style={styles.errortitle}>
            <Text style={styles.errortext}>{errormsgtext}</Text>
          </View>
        ) : null}

        <View style={styles.touchnewpass}>
          <TouchableOpacity style={styles.touch} onPress={() => sendcred()}>
            <Text style={styles.submitbtn}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default newpassword;

// const styles = StyleSheet.create({
// });
