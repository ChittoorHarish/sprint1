import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:'#ffffff'
  },
  fiya:{
    justifyContent:'flex-start',
    alignItems:'center',
    marginTop:hp('3%')
  },
  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:'#ffffff'
  },
  home:{
    textAlign:'center',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('16%'),
    marginLeft:wp('15%')
  },
  profilepic:{
    borderWidth:0.1,height:hp("16%"),width:wp('32.5%'),borderRadius:80,
  },
  name:{
    fontSize:moderateScale(22),fontFamily:'Poppins-Bold',color:'#ffffff',marginTop:hp('1%'),lineHeight:33,
  },
  occupation:{
    fontSize:moderateScale(14),fontFamily:'Poppins-Regular',color:'#ffffff',lineHeight:21
  },
  procontainer:{
    justifyContent:'flex-start',alignItems:'center',width:wp("25%"),height:hp("4.2%"),borderRadius:20,backgroundColor:'#4dc3ff',flexDirection:'row',marginTop:hp('0.5%')
  },
  walleticon:{
    justifyContent:'center',alignItems:'center',height:hp("4%"),width:wp('8%'),backgroundColor:'#66ccff',borderRadius:15
  },
  basic:{
    justifyContent:'center',alignItems:'center'
  },
  flameicon:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('0.5%')
  },
   
 
  
 

});
export default styles;
