import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  safe:{
    flex: 1,backgroundColor:'white' 
  },
  basic:{
    justifyContent:'center',
    alignItems:'center'
},
  forgotpassword:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('21%')
  },
  forgotpasstext:{
    justifyContent:'center',
    alignItems:'flex-start',
    marginTop:hp('2%')
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 2,
    marginTop:hp('2%'),
    borderColor: 'transparent',
    borderBottomColor:'black',
    height: hp('6%'),
    margin:11,
    marginEnd:wp('4%'),
    marginLeft:wp('5%'),
},
buttonsend:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('24%'),
  alignSelf:'center'
},
textinp:{
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('2.5%')
},

});
export default styles;