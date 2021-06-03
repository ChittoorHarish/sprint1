import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
    onpostpic:{
        borderWidth:0.1,height:hp("5.3%"),width:wp('11%'),borderRadius:20,
      },
      procontainer1:{
        justifyContent:'center',alignItems:'center',width:wp('19%'),backgroundColor:'#999999',flexDirection:'row',borderRadius:20,padding:5,marginLeft:wp('32%')
      },
      insidepic:{
        justifyContent:'center',borderWidth:0.1,alignItems:'center',width:wp('30%'),height:hp('20%'),borderRadius:5
      },
      basic:{
        justifyContent:'center',alignItems:'center'
      },
      flameicon:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('0.5%')
      },
      pointsbot:{
        textAlign:'center',fontFamily:'Poppins-Regular',fontSize:moderateScale(15),color:'#fff',marginLeft:wp('1%')
      },
      procontainer:{
        justifyContent:'center',alignItems:'center',width:wp("33%"),padding:4,borderRadius:20,backgroundColor:'#4dc3ff',flexDirection:'row',marginLeft:wp('12%')
      },
      points:{
        textAlign:'center',fontFamily:'Poppins-Regular',fontSize:moderateScale(15),color:'#fff',
      },
      button:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('4%'),
        alignSelf:'center',
        marginBottom:hp('2%')
      },
      center: {
        justifyContent:'flex-start',
        alignItems:'flex-start',
      },
      chatbutton:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('2%'),
        alignSelf:'center',
        marginBottom:hp('1%')
      },
      headertitle:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),
      },
      titlebox:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%")
      },
      nametitle:{
        fontSize:moderateScale(16),fontFamily:'Poppins-Bold',color:'black'
      },
      occupation:{
        fontSize:moderateScale(15),fontFamily:'Poppins-Regular',color:'#888888'
      },
      ellipsis:{
        justifyContent:'flex-end',alignItems:'flex-end',marginHorizontal:wp('38%')
      },
      bodyview:{
        justifyContent:'flex-start',marginLeft:wp('5%'),alignItems:'flex-start',borderWidth:0.5,borderColor:'grey',height:hp("46%"),width:wp('90%'),marginTop:hp('2%'),borderRadius:10,
      },
      info:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:hp('1.5%')
      },
      chaptertitle:{
        fontFamily:'Poppins-Bold',fontSize:moderateScale(16)
      },
      chaptername:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(15),color:'#888888'
      },
      captionview:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('4%'),marginEnd:wp('4%'),marginTop:hp('1%')
      },
      description:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(13)
      },
      imageview:{
        justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('1%')
      },
      insideview:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('12%'),
      },
      dateview:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("1%")
      },
      needtext:{
        justifyContent:'flex-start',alignSelf:'flex-start',fontSize:moderateScale(16),fontFamily:'Poppins-Regular',color:'grey'
      },
      datetext:{
        justifyContent:'flex-start',alignSelf:'flex-start',fontSize:moderateScale(16),fontFamily:'Poppins-Regular',color:'black',marginLeft:wp('1.5%')
      },
      calicon:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('1.5%')
      },
      applicantview:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('4%'),marginTop:hp('1%')
      },
      applicanttext:{
        fontFamily:'Poppins-Bold',fontSize:moderateScale(18)
      },
      detailview:{
        justifyContent:'flex-start',alignItems:'flex-start',height:hp('35%'),width:wp('90%'),borderWidth:0.2,marginTop:hp('2%'),borderColor:'grey',marginLeft:wp('4%'),borderRadius:10,
      },
      detail:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),
      },
      touch:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%"),
      },
      applicantname:{
        fontSize:moderateScale(15),fontFamily:'Poppins-Bold',color:'black'
      },
      about:{
        fontSize:moderateScale(13),fontFamily:'Poppins-Regular',color:'#888888',marginEnd:wp("13%")
      },
      readmore:{
        fontSize:moderateScale(13),fontFamily:'Poppins-Regular',color:'blue',marginEnd:wp("12%")
      },
      pointview:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp("4%"),marginTop:hp('2%')
      },
      offered:{
        justifyContent:'flex-start',alignItems:'flex-start',fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'grey'
      },
      number:{
        justifyContent:'flex-start',alignItems:'flex-start',fontFamily:'Poppins-Regular',fontSize:moderateScale(14),marginLeft:wp('1%')
      },
      flameicon:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('0.5%')
      },
      chattouch:{
        justifyContent:'center',alignItems:'center',backgroundColor:'#1ab2ff',borderRadius:7,padding:7,width:wp('83%'),alignSelf:'center'
      },
      chattext:{
        fontSize:moderateScale(14),color:'#ffffff',fontFamily:'Poppins-Bold'
      },
      vidaudtouch:{
        justifyContent:'center',alignItems:'center',width:wp('83%'),alignSelf:'center'
      },
      vidaudtext:{
        fontSize:moderateScale(14),color:'#1ab2ff',fontFamily:'Poppins-Bold'
      },
      rawbottom:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row'
      },
      choose:{
        fontFamily:'Poppins-Regular',fontWeight:'300',fontSize:moderateScale(17),marginLeft:wp("23%")
      },
      done:{
        fontFamily:'Poppins-Regular',fontWeight:'100',fontSize:moderateScale(17),color:'#1ab2ff',marginLeft:wp("12%")
      },
      rawtext:{
        justifyContent:'center',alignItems:'center',flexDirection:'column',marginLeft:wp("5%"),width:wp('80%'),marginTop:hp('2%')
      },
      change:{
        fontSize:moderateScale(12),fontFamily:'Poppins-Regular',color:'grey'
      },
      channel:{
        justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginLeft:wp("5%"),width:wp('80%'),marginTop:hp('3%')
      },
      vidaud:{
        flexDirection:'column',justifyContent:'center',alignItems:'center'
      },
      vid:{
        justifyContent:'center',alignItems:'center',height:hp('10%'),width:wp('20%'),borderRadius:10,backgroundColor:'#1ab2ff'
      },
      aud:{
        justifyContent:'center',alignItems:'center',height:hp('10%'),width:wp('20%'),borderRadius:10,backgroundColor:'#ff3377'
      },
      guide:{
        fontSize:moderateScale(14),fontFamily:'Poppins-Bold'
      },
      switch:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('4%'),flexDirection:'row',width:wp('83%'),marginTop:hp('2%')
      },
      switchtext:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column'
      },
      remember:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(13)
      },
      bottext:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'grey'
      },
      switchbutton:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('2%')
      },
      marktouch:{
        justifyContent:'center',alignItems:'center',backgroundColor:'#ffffff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center',borderWidth:3,borderColor:'#1ab2ff'
      },
      marktext:{
        fontSize:moderateScale(18),color:'#1ab2ff',fontFamily:'Poppins-Bold'
      }

});
export default styles;