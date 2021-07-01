import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'flex-start',
    backgroundColor:'#ffffff'
  },
  frame:{
    justifyContent:'flex-start',alignItems:'flex-start',marginTop:hp('1%'),marginLeft:wp('2%'),marginEnd:wp('2%'),borderWidth:1,width:wp('95%'),borderColor:'transparent'
  },
  headings:{
      fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:21,marginLeft:wp('1%'),marginTop:hp('1%')
  },
  headings2:{
    fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:21,marginLeft:wp('1%'),marginTop:hp('2%')
},
headings3:{
  fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:21,marginLeft:wp('1%'),marginTop:hp('3%')
},
info:{
  marginTop:hp('3%'),marginLeft:wp('60%')
},
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'transparent',
    borderWidth: 2,
    marginTop:hp('1%'),
    borderColor: 'transparent',
    borderBottomColor:'rgb(189,189,189)',
    marginEnd:wp('1%'),
    marginLeft:wp('1%'),
    margin:4
},
SectionStyle1: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'transparent',
  borderBottomColor:'rgb(189,189,189)',
  borderWidth: 2,
  width:wp('42%'),
  marginHorizontal:wp('4%'),
  marginTop:hp('1%'),
  borderColor: 'transparent',
  margin:4
},
country:{
  flexDirection:'row',
  marginLeft:wp('1%'),
  alignItems:'center',
  justifyContent:'center',
  marginEnd:wp('1%')
},
basic:{
    justifyContent:'flex-start',
    alignItems:'flex-start'
},
textin:{
    flex:1,
    fontSize:moderateScale(14),
    paddingBottom:2,
    fontFamily:'Poppins-Regular',
    color:'rgb(189,189,189)'
},
textin2:{
    flex:1,
    fontSize:moderateScale(14),
    paddingBottom:2,
    fontFamily:'Poppins-Regular',
    color:'rgb(80,80,80)'
},
message: {
  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  marginLeft: wp('1%'),
  width: wp('91%'),
  marginEnd: wp('1%'),
  borderWidth: 0.5,
  borderColor: 'grey',
  borderRadius: 5,
  padding: 10,
  paddingTop: 7,
  height: hp('13%'),
  marginTop:hp('2%'),
  fontFamily: 'Poppins-Regular',
  fontSize: moderateScale(12),
},
putimage:{
  height:hp('8%'),width:wp('18%'),borderRadius:5,marginLeft:wp('2%'),borderWidth:1,borderStyle:'dashed',justifyContent:'center',alignItems:'center',marginTop:hp('2%'),borderColor:'rgb(189,189,189)',backgroundColor:'rgb(245,245,245)'
},
addicon:{
  justifyContent:'center',alignItems:'center',
},
button: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: hp('2%'),
  alignSelf: 'center',
  marginBottom: hp('2%'),
},
marktouch: {
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#1ab2ff',
  borderRadius: 7,
  padding: 11,
  width: wp('87%'),
  alignSelf: 'center',
},
marktext: {
  fontSize: moderateScale(16),
  color: '#ffffff',
  fontFamily: 'Poppins-Bold',
},

});
export default styles;