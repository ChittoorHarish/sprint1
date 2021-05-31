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
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={styles.buttonCircle}>
       <Text style={{textAlign:'center',fontFamily:'Poppins-Bold',fontSize:moderateScale(16),color:'white'}}>Next</Text>
      </View>
      </View>
    );
  }
  const renderdoneButton = () => {
    return (
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <View style={styles.buttonCircle}>
       <Text style={{textAlign:'center',fontFamily:'Poppins-Bold',fontSize:moderateScale(16),color:'white'}}>Submit</Text>
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
      <View style={{justifyContent:'center',alignItems:'center',marginLeft:wp('7%'),marginTop:hp('1%'),marginEnd:wp('7%')}}>
       <Text style={{fontSize:moderateScale(17),textAlign:'center',fontFamily:'Poppins-Regular'}}>
         {item.text1}

       </Text>
       <Text style={{fontSize:moderateScale(17),textAlign:'center',fontFamily:'Poppins-Regular'}}>
         {item.text2}

       </Text>
       <Text style={{fontSize:moderateScale(17),textAlign:'center',fontFamily:'Poppins-Regular'}}>
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
        source={require('../assets/Image/splashss.png')}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{justifyContent:'center',alignItems:'center'}}>
          <Image style={{justifyContent:'center',alignItems:'center',marginTop:hp('18%'),alignSelf:'center'}}
          source ={require('../assets/Image/Logo.png')}>

          </Image>
          </View>
          <View style={{justifyContent:'center',alignItems:'center',marginTop:hp('15%')}}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',backgroundColor:'white',borderRadius:7,padding:11,width:wp('80%'),alignSelf:'center'}}
            onPress={() => navigation.navigate('signin')}>
              <Text style={{fontSize:moderateScale(18),color:'black',fontFamily:'Poppins-Bold',textAlign:'center'}}>Sign In</Text>

            </TouchableOpacity>
            <TouchableOpacity style={{marginTop:hp('5%'),justifyContent:'center',alignItems:'center',alignSelf:'center'}}
            onPress={() => navigation.navigate('signup')}>
              <Text style={{fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold',textAlign:'center',marginLeft:wp('1%')}}>Sign Up</Text>

            </TouchableOpacity>

          </View>
          </View>
  
        </ImageBackground>
       
      </SafeAreaView>
      ) : (
        <AppIntroSlider
          data={slides}
          activeDotStyle ={{width:wp('12%'), backgroundColor:'#1e90ff'}}
          dotStyle= {{width:wp('12%'),backgroundColor:'#add8e6'}}
          renderItem={RenderItem}
          onDone={onDone} 
          showSkipButton={false}
          onSkip={onSkip}
          bottomButton style={{backgroundColor:'white'}}
          renderNextButton={renderNextButton}
          renderDoneButton={renderdoneButton}
          
          
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
  buttonCircle: {
    width:wp('82%'),
    height:hp('5%'),
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    marginEnd:wp('5%'),
    marginLeft:wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCircle: {
    width:wp('82%'),
    height:hp('5%'),
    backgroundColor: '#1e90ff',
    borderRadius: 5,
    marginEnd:wp('5%'),
    marginLeft:wp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
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
    alignSelf:'center',
    fontFamily:'Poppins-Regular'
  },
  introTitleStyle: {
    fontSize: moderateScale(26),
    color: 'black',
    marginTop:hp('10%'),
    textAlign: 'center',
    fontFamily:'Poppins-Bold',
    alignSelf:'center'
  },
  introTitleStyle2: {
    fontSize: moderateScale(26),
    color: 'black',
    textAlign: 'center',
    fontFamily:'Poppins-Bold',
  },
  introTitleStyle3: {
    fontSize: moderateScale(26),
    color: 'black',
    textAlign: 'center',
    fontFamily:'Poppins-Bold',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Post a Question',
    title2: 'Ask for advice',
    title3:'Request a Service',
    image: require('../assets/Image/T1.png'),
    text1:"Whether you prefer text-chat, picture sharing or face-to-face video calling, we've got you covered. Getting started is as easy as explaining what you need and when you need"
    
  },
  {
    key: 's2',
    title: 'Name your Price.',
    title2: 'Negotiate.',
    title3:'Sale.',
    text2: "YOU decide your reward amount. You choose your helper. The higher the reward amount, the better the helper will do- it's basic supply and demand",
    image: require('../assets/Image/T2.png'),

  },
  {
    key: 's3',
    title: 'Connect.',
    title2: 'Get Results.',
    title3:'Close the Deal.',
    text3: "Connect as agrred upon. Complete your transaction. Rate your helper, And get on with your day. A WIN-WIN for both parties",
    image: require('../assets/Image/T3.png'),

  },
 
];