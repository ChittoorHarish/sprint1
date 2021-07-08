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
      basic1:{
        justifyContent:'center',alignItems:'flex-start'
      },
      basic:{
        justifyContent:'center',alignItems:'center'
      },
      headertitle:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),marginEnd:wp('2%')
      },
      titlebox:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%"),width:wp('63%')
      },
      nametitle:{
        fontSize:moderateScale(16),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:25
      },
      occupation:{
        fontSize:moderateScale(12),fontFamily:'Poppins-Regular',color:'#888888',lineHeight:18
      },
      ellipsis:{
        justifyContent:'flex-end',alignItems:'flex-end',marginLeft:wp('10%')
      },
      bodyview:{
        justifyContent:'flex-start',marginLeft:wp('5%'),alignItems:'flex-start',
    padding: 4,
    marginTop:hp('2%'),
    width:wp('90%'),
    shadowColor:'#000',shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,  
    elevation: 4,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 4,
      },
      info:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:hp('1.5%')
      },
      chaptertitle:{
        fontFamily:'Poppins-Bold',fontSize:moderateScale(16),lineHeight:25,color:'rgb(80,80,80)',width:wp('58%')
      },
      chaptername:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(14),color:'#888888',lineHeight:21
      },
      captionview:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('3%'),marginEnd:wp('4%')
      },
      description:{
        fontFamily:'Poppins-Regular',fontSize:moderateScale(12),lineHeight:18,color:'rgb(80,80,80)'
      },
      imageview:{
        justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('1%'),marginBottom:hp('2%')
      },
      insideview:{
        justifyContent:'center',alignItems:'center',marginLeft:wp('12%'),
      },
      dateview:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('5.5%'),marginTop:hp("1%")
      },
      needtext:{
        justifyContent:'flex-start',alignSelf:'flex-start',fontSize:moderateScale(14),fontFamily:'Poppins-Regular',color:'rgb(189,189,189)',lineHeight:21
      },
      datetext:{
        justifyContent:'flex-start',alignSelf:'flex-start',fontSize:moderateScale(14),fontFamily:'Poppins-Regular',color:'rgb(80,80,80)',marginLeft:wp('1.5%'),lineHeight:21
      },
      calicon:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('1.5%')
      },
      applicantview:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('5%'),marginTop:hp('1%')
      },
      applicanttext:{
        fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),lineHeight:25
      },
      detailview:{
        justifyContent:'flex-start',marginLeft:wp('5%'),alignItems:'flex-start',
    padding: 4,
    marginTop:hp('2%'),
    width:wp('90%'),
    shadowColor:'#000',shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,  
    elevation: 4,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 4,
      },
      detail:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),
      },
      touch:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%"),
      },
      applicantname:{
        fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:21
      },
      about:{
        fontSize:moderateScale(12),fontFamily:'Poppins-Regular',color:'#888888',marginEnd:wp("13%"),lineHeight:15
      },
      readmore:{
        fontSize:moderateScale(13),fontFamily:'Poppins-Regular',color:'rgb(0,153,218)',marginEnd:wp("12%")
      },
      pointview:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp("4%"),marginTop:hp('2%'),marginBottom:hp('2%')
      },
      offered:{
        justifyContent:'flex-start',alignItems:'flex-start',fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'rgb(80,80,80)',lineHeight:18
      },
      number:{
        justifyContent:'flex-start',alignItems:'flex-start',fontFamily:'Poppins-Regular',fontSize:moderateScale(14),marginLeft:wp('1%'),lineHeight:21,color:'rgb(80,80,80)'
      },
      flameicon:{
        justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('0.5%')
      },
      modal:{
        justifyContent:'flex-start',alignItems:'flex-end',marginRight:wp('7%'),marginTop:hp('16%')
      },
      modalview:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',width:wp('35%'),height:hp('12%'),backgroundColor:'white',borderRadius:10
      },
      modalview1:{
        justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:('10%'),marginEnd:wp('2%')
      },
      modaltext:{
        color:'grey',fontFamily:'Poppins-SemiBold',marginLeft:wp('2%')
      },
      infoview:{
        justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:wp('30%')
      }

});
export default styles;