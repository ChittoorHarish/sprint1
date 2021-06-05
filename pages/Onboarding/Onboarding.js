import React, {useState} from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './styles';
import { StatusBar } from 'react-native';
import { color } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';
import signin from '../signin/signin';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true); 
  };
  const onSkip = () => {
    setShowRealApp(true); 
  };
 const renderNextButton = () => {
    return (
      <View style={styles.basic}>
      <View style={styles.buttonCircle}>
       <Text style={styles.onnext}>Next</Text>
      </View>
      </View>
    );
  }
  const renderdoneButton = () => {
    return (
      <View style={styles.basic}>
      <View style={styles.buttonCircle}>
       <Text style={styles.onnext}>Get Started</Text>
      </View>
      </View>
    );
  }
  const renderskipButton = () => {
    return (
      <View style={styles.basic}>
      <View style={styles.skipCircle}>
       <Text style={styles.onskip}>Skip</Text>
      </View>
      </View>
    );
  }
  

  const RenderItem = ({item}) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'ffffff'}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent:'center',
        }}>
        
        <ImageBackground style={styles.introImageStyle}
          source={item.image}>
          <View style={{justifyContent:'center',alignItems:'center',alignSelf:'center'}}>
          <Text style={styles.introTitleStyle}>
          {item.title}
        </Text>
        <Text style={styles.introTitleStyle2}>
          {item.title2}
        </Text>
        <Text style={styles.introTitleStyle3}>
          {item.title3}
        </Text>
        </View>
        </ImageBackground>
      </View>
      <View style={styles.onboardtext}>
       <Text style={styles.itemtext}>
         {item.text1}

       </Text>
       <Text style={styles.itemtext}>
         {item.text2}

       </Text>
       <Text style={styles.itemtext}>
         {item.text3}

       </Text>

      </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        
        <SafeAreaView style={{ flex: 1}}>
        <ImageBackground style={{flex:1}}
        source={require('../assets/image/splashss.png')}>
          <View style={styles.basic}>
          <View style={styles.basic}>
          <Image style={styles.img}
          source ={require('../assets/image/Logo.png')}>

          </Image>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('15%')}}>
            <TouchableOpacity style={styles.signintouch}
            onPress={() => navigation.navigate('signin')}>
              <Text style={styles.signintext}>Sign In</Text>

            </TouchableOpacity>
            <TouchableOpacity style={styles.signuptouch}
            onPress={() => navigation.navigate('signup')}>
              <Text style={styles.signuptext}>Sign Up</Text>

            </TouchableOpacity>

          </View>
          </View>
  
        </ImageBackground>
       
      </SafeAreaView>
     
      ) : (
        <AppIntroSlider
          data={slides}
          activeDotStyle ={{width:wp('12%'), backgroundColor:'#1e90ff',marginLeft:wp('-2%')}}
          dotStyle= {{width:wp('12%'),backgroundColor:'#add8e6',marginLeft:wp('-2.5%')}}
          renderItem={RenderItem}
          onDone={onDone} 
          showSkipButton={true}
          onSkip={onSkip}
          bottomButton style={{backgroundColor:'white'}}
          renderNextButton={renderNextButton}
          renderDoneButton={renderdoneButton}
          renderSkipButton={renderskipButton}
          
          
        />
      )}
    </>
  );
};

export default App;

// const styles = StyleSheet.create({
  
// });

const slides = [
  {
    key: 's1',
    title: 'Post a Question.',
    title2: 'Ask for Advice.',
    title3:'Request a Service.',
    image: require('../assets/image/T1.png'),
    text1:"Whether you prefer text-chat, picture sharing or face-to-face video calling, we've got you covered. Getting started is as easy as explaining what you need and when you need it."
    
  },
  {
    key: 's2',
    title: 'Name your Price.',
    title2: 'Negotiate.',
    title3:'Sign.',
    text2: "YOU decide your reward amount. YOU choose your helper. The higher the reward amount, the better the helper will be- it's basic supply and demand",
    image: require('../assets/image/T2.png'),

  },
  {
    key: 's3',
    title: 'Connect.',
    title2: 'Get Results.',
    title3:'Close the Deal.',
    text3: "Connect as agreed upon. Complete your transaction. Rate your helper. And get on with your day. A WIN-WIN for both parties",
    image: require('../assets/image/T3.png'),

  },
 
];