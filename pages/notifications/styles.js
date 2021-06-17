import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  center: {
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  heading:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginTop:hp("2%"),
  },
  titlebox:{
    justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%")
  },
  nametitle:{
    fontSize:moderateScale(12),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:31,width:wp("60%")
  },
  occupation:{
    fontSize:moderateScale(10),fontFamily:'Poppins-Regular',color:'rgb(189,189,189)',lineHeight:14,width:wp('69%')
  },
  ellipsis:{
    justifyContent:'flex-end',alignItems:'flex-end',marginEnd:wp('1%')
  },
  onpostpic:{
    height:hp("5.3%"),width:wp('11%'),borderRadius:20,padding:7,backgroundColor:'rgb(242,241,241)',marginLeft:wp("1%")
  },
  bottombutton:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp("44%"),marginEnd:wp('4%')
},
button:{
  justifyContent:'space-evenly',
  alignItems:'flex-start',
  flexDirection:'row',
  marginTop:hp('2%'),
  alignSelf:'center',
  marginBottom:hp('2%')
},
basic:{
  justifyContent:"center",alignItems:'center'
},
notificationbox:{
  justifyContent:'flex-start',alignItems:'flex-start',width:wp('96%'),marginLeft:wp('2%'),marginEnd:wp('2%')
},
headerbox:{
  justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginTop:hp('2%')
},
notificationtext:{
  fontSize:moderateScale(16),fontFamily:'Poppins-SemiBold',lineHeight:25,color:'rgb(80,80,80)'
},
markread:{
  fontSize:moderateScale(12),fontFamily:'Poppins-Regular',lineHeight:18,color:'rgb(0,153,218)',textDecorationLine:'underline',marginTop:hp('0.5%'),marginLeft:wp("31%"),marginEnd:wp('2%')
},
time:{
  justifyContent:'flex-start',alignItems:'flex-start',fontFamily:'Poppins-Regular',fontSize:moderateScale(10),lineHeight:31,color:'rgb(189,189,189)'
},
negotiatebox:{
  justifyContent:'center',alignItems:'center',backgroundColor:'rgb(255,234,221)',borderRadius:5,padding:7,width:wp('25%'),marginLeft:wp('27%')
},
negotiatetext:{
  fontSize:moderateScale(11),color:'rgb(206 ,12,12)',fontFamily:'Poppins-SemiBold'
},
negotiatebox1:{
  justifyContent:'center',alignItems:'center',backgroundColor:'rgb(255,234,221)',borderRadius:5,padding:7,width:wp('25%')
},
acceptbox:{
  justifyContent:'center',alignItems:'center',backgroundColor:'rgb(214,255,207)',borderRadius:5,padding:7,width:wp('25%'),marginLeft:wp('4%')
},
accepttext:{
  fontSize:moderateScale(11),color:'rgb(5 ,146,4)',fontFamily:'Poppins-SemiBold'
}
});
export default styles;