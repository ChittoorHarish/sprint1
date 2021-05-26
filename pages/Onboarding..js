
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

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';
import { color } from 'react-native-reanimated';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../services/responsiveFunc';
import signin from './signin';

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

  const RenderItem = ({item}) => {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
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
      <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('7%'),marginTop:hp('3%'),marginEnd:wp('7%')}}>
       <Text style={{fontSize:moderateScale(17),textAlign:'center'}}>
         {item.text1}

       </Text>
       <Text style={{fontSize:moderateScale(17),textAlign:'center'}}>
         {item.text2}

       </Text>
       <Text style={{fontSize:moderateScale(17),textAlign:'center',}}>
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
        source={require('../Image/splashss.png')}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{justifyContent:'center',alignItems:'center',marginTop:hp('18%'),alignSelf:'center'}}
          source ={require('../Image/Logo.png')}>

          </Image>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('18%')}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:7,padding:11,width:wp('80%'),alignSelf:'center'}}
            onPress={() => navigation.navigate('signin')}>
              <Text style={{fontSize:moderateScale(18),color:'black',fontWeight:'bold'}}>Sign In</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:hp('5%'),justifyContent:'center',alignItems:'center',alignSelf:'center'}}
            onPress={() => navigation.navigate('signup')}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontWeight:'bold',}}>Sign Up</Text>

            </TouchableOpacity>

          </View>
          </View>
  
        </ImageBackground>
       
      </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          activeDotStyle ={{width:wp('12%'), backgroundColor:'blue'}}
          dotStyle= {{width:wp('12%'),backgroundColor:'#add8e6'}}
          renderItem={RenderItem}
          onDone={onDone} 
          showSkipButton={false}
          onSkip={onSkip}
          bottomButton style={{backgroundColor:'white'}}
          doneLabel="Get Started"
          
          
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    height:hp('63%'),
    width:wp('100%'),
    alignSelf:'center'
    
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    alignSelf:'center'
  },
  introTitleStyle: {
    fontSize: moderateScale(26),
    color: 'black',
    marginTop:hp('10%'),
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf:'center'
  },
  introTitleStyle2: {
    fontSize: moderateScale(26),
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  introTitleStyle3: {
    fontSize: moderateScale(26),
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Recharge offers',
    title: 'Post a Question',
    title2: 'Ask for advice',
    title3:'Request a Service',
    image: require('../Image/T1.png'),
    text1:"Whether you prefer text-chat, picture sharing or face-to-face video calling, we've got you covered. Getting started is as easy as explaining what you need and when you need"
    
  },
  {
    key: 's2',
    title: 'Name your Price.',
    title2: 'Negotiate.',
    title3:'Sale.',
    text2: "YOU decide yoyr reward amount. You choose your helper. The higher the reward amount, the better the helper will do- it's basic supply and demand",
    image: require('../Image/T2.png'),

  },
  {
    key: 's3',
    title: 'Connect.',
    title2: 'Get Results.',
    title3:'Close the Deal.',
    text3: "Connect as agrred upon. Complete your transaction. Rate your helper, And get on with your day. A WIN-WIN for both parties",
    image: require('../Image/T3.png'),

  },
 
];