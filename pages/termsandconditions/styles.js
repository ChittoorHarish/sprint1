import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/Utils';
import COLORS from '../../assets/colors';

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
  }
});
export default styles;