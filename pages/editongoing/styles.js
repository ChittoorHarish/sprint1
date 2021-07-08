import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addpic1:{
    height:hp('10%'),width:wp('22%'),borderRadius:5,marginLeft:wp('2%'),borderWidth:1,
},
putimage:{
  height:hp('10%'),width:wp('22%'),borderRadius:5,marginLeft:wp('2%'),borderWidth:1,borderStyle:'dashed',justifyContent:'center',alignItems:'center'
},
addpic:{
  height:hp('10%'),width:wp('22%'),borderRadius:5,
},
picsection:{
    justifyContent:'flex-start',alignItems:'flex-start',marginEnd:wp('2%'),marginTop:hp('2%'),
  },
  imagesection:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('1%'),marginEnd:wp('2%'),flexDirection:'row'
  },
  datebox:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginTop:hp('1%'),width:wp('84%'),marginEnd:wp('4%')
  },
  date:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('35%'),borderWidth:1,borderColor:'transparent',borderBottomColor:'rgb(80,80,80)',padding:5
  },
  datetext:{
    justifyContent:'flex-start',alignItems:'flex-start',width:wp('25%'),fontSize:moderateScale(12),color:'rgb(80,80,80)',padding:3
  },
  calendar:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('4%')
  },
  dateboxside:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('35%'),borderWidth:1,borderColor:'transparent',borderBottomColor:'rgb(80,80,80)',padding:5,marginLeft:wp('7%')
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('4%'),
    alignSelf:'center',
    marginBottom:hp('2%')
  },
  center1: {
    justifyContent:'flex-start',
    alignItems:'flex-start',
  },
  addicon:{
    justifyContent:'center',alignItems:'center',
  },

});
export default styles;