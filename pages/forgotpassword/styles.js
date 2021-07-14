import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  safe:{
    flex: 1,backgroundColor:'white' 
  },
  basic:{
    justifyContent:'center',
    alignItems:'center'
},
forgotpass:{
  fontSize:moderateScale(22),color:'rgb(80,80,80)',marginLeft:wp('5%'),fontFamily:'Poppins-Bold'
},
instruction:{
  marginLeft:wp('5%'),marginEnd:wp('7%'),color:'grey',fontSize:moderateScale(14),fontFamily:'Poppins-Regular'
},
touchpass:{
  justifyContent:'center',alignItems:'center',backgroundColor:'#1e90ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'
},
  forgotpassword:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('21%')
  },
  forgotpasstext:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('2%')
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
buttonsend:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('27%'),
  alignSelf:'center'
},
textinp:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('2.5%')
},
errortitle:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('2%')
},
errortext:{
 fontSize:moderateScale(16),
 fontFamily:'Poppins-Regular',
 color:'red'
},
submitbtn:{
  fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'
}

});
export default styles;