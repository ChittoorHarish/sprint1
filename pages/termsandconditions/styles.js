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
});
export default styles;