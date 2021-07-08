import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  setnewpass:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('21%')
  },
  safe:{
    flex: 1,backgroundColor:'white' 
  },
  touchnewpass:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('22%'),
    alignSelf:'center'
  },
  basic:{
    justifyContent:'center',
    alignItems:'center'
},
title:{
  fontSize:moderateScale(22),
  marginLeft:wp('5%'),
  color:'rgb(80,80,80)',
  fontFamily:'Poppins-Bold',
},
   
SectionStyle1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'transparent',
    borderBottomColor:'black',
    height: hp('6%'),
    margin:11,
    marginEnd:wp('4%'),
    marginLeft:wp('5%'),
  },
  touch:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1e90ff',
    borderRadius:7,
    padding:11,
    width:wp('83%'),
    alignSelf:'center'
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
 field:{
  flex:1,fontSize:moderateScale(17),marginLeft:wp('3%')
 },
 submitbtn:{
  fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'
 }

});
export default styles;