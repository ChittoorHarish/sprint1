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
  heading:{
    fontSize:moderateScale(22),fontFamily:'Poppins-Bold'
  },
  touch:{
    justifyContent:'center',alignItems:'center',backgroundColor:'#1e90ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'
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
  description:{
    fontSize:moderateScale(16),textAlign:'justify',lineHeight:30,fontFamily:'Poppins-Regular'
  },
  accept:{
    fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'
  }
});
export default styles;