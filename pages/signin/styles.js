import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/Utils';
import COLORS from '../../assets/colors';

const styles = StyleSheet.create({
 signintitle:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('21%')
 },
 safe:{
   flex: 1,backgroundColor:'white' 
 },
 signintitle:{
   fontSize:moderateScale(22),
   marginLeft:wp('5%'),
   fontFamily:'Poppins-Bold'
 },
 touchsend:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('10%'),
    alignSelf:'center'
 },
 touchsend2:{
    justifyContent:'center',
    alignItems:'center',
    flexDirection:'row',
    marginTop:hp('12%')
 },
 SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    marginTop:hp('2%'),
    borderColor: 'transparent',
    borderBottomColor:'black',
    height: hp('6%'),
    margin:11,
    marginEnd:wp('4%'),
    marginLeft:wp('5%'),
},
SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderWidth: 2,
  marginTop:hp('3%'),
  borderColor: 'transparent',
  borderBottomColor:'black',
  height: hp('6%'),
  margin:11,
  marginEnd:wp('4%'),
  marginLeft:wp('5%'),
},
basic:{
    justifyContent:'center',
    alignItems:'center'
},
signuptext:{
   fontSize:moderateScale(16),color:'#1e90ff',marginLeft:wp('1%'),fontFamily:'Poppins-Bold'
},
forgotpasstext:{
   fontSize:moderateScale(17),color:'#1e90ff',fontWeight:'bold',marginLeft:wp('5%'),fontFamily:'Poppins-Bold'
},
noacc:{
   fontSize:moderateScale(16),color:'black',fontFamily:'Poppins-Regular'
},
signintext:{
   fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'
},
show:{
   fontSize:moderateScale(17),color:'#1e90ff',fontFamily:'Poppins-Bold'
},
hide:{
   fontSize:moderateScale(17),color:'#1e90ff',fontWeight:'bold'
},
touchable:{},
justifyContent:'center',
alignItems:'center',
backgroundColor:'#1e90ff',
borderRadius:7,
padding:11,
width:wp('83%'),
alignSelf:'center'
});
export default styles;