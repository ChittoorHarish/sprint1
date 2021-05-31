import {StyleSheet} from 'react-native';


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
  }

});
export default styles;