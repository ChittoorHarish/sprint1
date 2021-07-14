import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  center: {
    backgroundColor:'#fff',
    marginLeft:wp('2%'),
    marginEnd:wp('2%'),
    width:wp('96%'),
    borderWidth:1,
   borderColor:'transparent'
    
  },
  bottom: {
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'rgb(247,247,247)',
    paddingVertical:9,
    borderWidth:1,
    borderTopColor:'rgb(198,198,198)',
    borderBottomColor:'rgb(198,198,198)',
    flexDirection:'row',
  },
  day:{
    marginTop:hp('2%'),textAlign:'center',color:'rgb(198,198,198)',fontFamily:'Poppins-Medium',fontSize:moderateScale(14)
},
senttext:{
    fontSize:14,padding:10,fontFamily:'Poppins-Medium',color:'rgb(255,255,255)'
},
senttime:{
    marginTop:hp('2%'),textAlign:'right',color:'rgb(198,198,198)',fontFamily:'Poppins-Medium',fontSize:moderateScale(10),marginBottom:hp('-1%'),marginEnd:wp('2%')
},
receivedtime:{
    marginTop:hp('2%'),textAlign:'left',color:'rgb(198,198,198)',fontFamily:'Poppins-Medium',fontSize:moderateScale(10),marginBottom:hp('-1%'),marginLeft:wp('2%')
},
receivedtext:{
    fontSize:14,padding:10,fontFamily:'Poppins-Medium',color:'rgb(80,80,80)'
},
box:{
    width:wp('40%'),
    borderWidth:1,
    height:hp('4%'),
    marginBottom:hp('2%')
},
talkBubble: {
    backgroundColor: "transparent",
  },
  talkBubbleSquare: {
    width: wp('50%'),
    padding:2,
    backgroundColor: "#1ab2ff",
    borderTopRightRadius:10,
    marginLeft:wp('45%'),
    borderTopLeftRadius:10,
    borderBottomLeftRadius:10,
    marginTop:hp('2')
  },
  talkBubbleTriangle: {
    left:wp('45%'),
    marginTop:hp('-2.2%'),
    width: wp('50%'),
    height: 0,
    borderTopColor: "transparent",
    borderTopWidth: 14,
    borderRightWidth: 26,
    borderRightColor: "#1ab2ff",
    borderBottomWidth: 13,
    borderBottomColor: "transparent",
  },
  talkBubbleSquarewhite: {
    width: wp('50%'),
    padding:2,
    backgroundColor: "rgb(247,247,247)",
    borderTopRightRadius:10,
    marginLeft:wp('1%'),
    borderTopLeftRadius:10,
    borderBottomRightRadius:10,
    marginTop:hp('2%')
  },
  talkBubbleTrianglewhite: {
    marginTop:hp('-2.2%'),
    width: 0,
    height: 0,
    marginLeft:wp('1%'),
    borderTopColor: "transparent",
    borderTopWidth: 14,
    borderLeftWidth: 26,
    borderLeftColor: "rgb(247,247,247)",
    borderBottomWidth: 13,
    borderBottomColor: "transparent",
  },
  input:{
      padding:7,
      width:wp('73%'),
      borderWidth:1,
      fontFamily:'Poppins-Regular',
      fontSize:moderateScale(14),
      borderColor:'transparent'
  },
  sendicon: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: wp('1%'),
    marginTop:hp('0.7%'),

  },
  addicon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: wp('3%'),
    borderWidth:1,
    width:wp('6.5%'),
    height:hp('3.5%'),
    marginTop:hp('0.5%'),
    marginBottom:hp('0.5%'),
    borderRadius:5,
    backgroundColor:'rgba(189,189,189,0.39)',
    borderColor:'transparent'

  },
  frame:{
      marginLeft:wp('1%'),marginEnd:wp('1%'),width:wp('96%'),borderWidth:1,flexDirection:'row',borderColor:'transparent'
  }

});
export default styles;