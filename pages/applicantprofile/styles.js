import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  title:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('5%'),
    marginEnd:wp('5%'),
    marginTop:hp('3%')
  },
  title2:{
    justifyContent:'center',
    alignItems:'center',
    marginLeft:wp('5%'),
    marginEnd:wp('5%'),
    marginTop:hp('2%'),
  },
  
  center: {
    justifyContent:'center',
    alignItems:'center',
  },
  header:{
      justifyContent:'center',alignItems:'center',flexDirection:'row',
  },
  profilepic:{
    height:hp("13%"),width:wp('29%'),borderRadius:80,
  },
  ellipsis:{
    justifyContent:'flex-end',alignItems:'flex-end',marginLeft:wp('88%')
  },
  procontainer:{
    justifyContent:'center',alignItems:'center',width:wp("25%"),height:hp("4.2%"),borderRadius:20,backgroundColor:'#fffafa',flexDirection:'row',marginTop:hp('0.5%'),shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 4
  },
  procontainerbook:{
    justifyContent:'center',alignItems:'center',width:wp("10%"),height:hp("4.2%"),borderRadius:20,backgroundColor:'#fffafa',flexDirection:'row',marginTop:hp('0.5%'),marginLeft:wp('2%'),shadowColor:'#000',shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,  
    elevation: 4
  },
  basic:{
    justifyContent:'center',alignItems:'center'
  },
  flameicon:{
    justifyContent:'center',alignItems:'center',
  },
  ratingicon:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('2%')
  },
  ratingicon1:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('4%')
  },
  points:{
    textAlign:'center',fontFamily:'Poppins-Medium',fontSize:moderateScale(15),color:'#000',marginLeft:wp('1%'),lineHeight:21
  },
  addpic1:{
      height:hp('10%'),width:wp('22%'),borderRadius:5,marginLeft:wp('2%')
  },
  addpic:{
    height:hp('10%'),width:wp('22%'),borderRadius:5,
},
tutorstar:{
    justifyContent:'center',alignItems:'center',width:wp("88%"),height:hp("8%"),borderRadius:5,backgroundColor:'#fff',marginTop:hp('0.5%'),marginLeft:wp('2%'),marginEnd:wp('2%'),flexDirection:'row',shadowColor:'#000',shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,  
    elevation: 4
  },
  headertitle:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),
  },
  titlebox:{
    justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%"),width:wp('25%')
  },
  nametitle:{
    fontSize:moderateScale(16),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:25
  },
  occupation:{
    fontSize:moderateScale(12),fontFamily:'Poppins-Regular',color:'#888888',lineHeight:18
  },
  onpostpic:{
    borderWidth:0.1,height:hp("5.3%"),width:wp('11%'),borderRadius:20,
  },
  ratingstar:{
      justifyContent:'center',alignItems:'center',marginLeft:wp('25%'),width:wp('15%')
  },
  bottombutton:{
      justifyContent:'space-evenly',alignItems:'flex-start',flexDirection:'row',marginLeft:wp("4%"),marginEnd:wp('4%')
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('4%'),
    alignSelf:'center',
    marginBottom:hp('2%')
  },
  nameview:{
    justifyContent:'center',alignItems:'center',marginTop:hp('0.5%')
  },
  mainname:{
    fontFamily:'Poppins-Bold',fontSize:moderateScale(18),lineHeight:27,textAlign:'center',color:'rgb(80,80,80)'
  },
  teacher:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(12),lineHeight:18,textAlign:'center',color:'rgb(189,189,189)'
  },
  toppoints:{
    justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('1%')
  },
  content:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%')
  },
  maintext:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'rgb(80,80,80)',lineHeight:18
  },
  phototext:{
    fontSize:moderateScale(14),lineHeight:21,fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',marginTop:hp('1%')
  },
  picsection:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%'),marginTop:hp('2%'),
  },
  imagesection:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('3%'),marginEnd:wp('2%'),flexDirection:'row'
  },
  ratingbox:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('3%'),marginEnd:wp('2%'),marginTop:hp('1%')
  },
  ratingtext:{
    fontSize:moderateScale(14),lineHeight:21,fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',marginTop:hp('1%')
  },
  ratingbox1:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%'),marginTop:hp('2%'),
  },
  tutortext:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(14),color:'rgb(80,80,80)',lineHeight:21,
  },
  starrate:{
    fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),color:'rgb(80,80,80)',lineHeight:25,marginLeft:wp('3%')
  },
  tutordetail:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%'),marginTop:hp('2%'),
  },
  tutordesc:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%'),marginTop:hp('1.5%')
  },
  tutormaintext:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'rgb(80,80,80)',lineHeight:15,marginLeft:wp('2%'),marginEnd:wp('1%')
  },
  readmore:{
    fontFamily:'Poppins-SemiBold',fontSize:moderateScale(12),color:'rgb(0,153,218)',lineHeight:15,marginLeft:wp('69%'),marginEnd:wp('1%'),
},
tutordetail1:{
  justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('2%'),marginEnd:wp('2%'),marginTop:hp('1%'),
},
touchdecline:{
  justifyContent:'center',alignItems:'center',backgroundColor:'rgb(255,203,203)',borderRadius:7,padding:11,width:wp('40%'),alignSelf:'center',borderWidth:2,borderColor:'rgb(255 ,4,24)'
},
declinetext:{
  fontSize:moderateScale(16),color:'rgb(255 ,4,24)',fontFamily:'Poppins-Bold'
},
touchaccept:{
  justifyContent:'center',alignItems:'center',backgroundColor:'rgb(210,255,204)',borderRadius:7,padding:11,width:wp('40%'),alignSelf:'center',borderWidth:2,borderColor:'rgb(43,182,24)'
},
accepttext:{
  fontSize:moderateScale(16),color:'rgb(43,182,24)',fontFamily:'Poppins-Bold'
}
});
export default styles;