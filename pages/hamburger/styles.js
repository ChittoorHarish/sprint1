import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:'#ffffff'
  },
  ham:{
    height:hp('41%'),
    width:wp('100%'),
    backgroundColor:'#1ab2ff',
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  icon:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:hp('5%'),
    marginLeft:wp('3%')
  },
  fiya:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('3%')
  },
  home:{
    textAlign:'center',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('16%'),
    marginLeft:wp('15%')
  },
  profilepic:{
    borderWidth:0.1,height:hp("16%"),width:wp('32.5%'),borderRadius:80,
  },
  name:{
    fontSize:moderateScale(20),fontFamily:'Poppins-Bold',color:'#ffffff',marginTop:hp('1%')
  },
  procontainer:{
    justifyContent:'flex-start',alignItems:'center',width:wp("25%"),height:hp("4.2%"),borderRadius:20,backgroundColor:'#4dc3ff',flexDirection:'row',marginTop:hp('0.5%')
  },
  walleticon:{
    justifyContent:'center',alignItems:'center',height:hp("4%"),width:wp('8%'),backgroundColor:'#66ccff',borderRadius:15
  },
  basic:{
    justifyContent:'center',alignItems:'center'
  },
  flameicon:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('0.5%')
  },
  points:{
    textAlign:'center',fontFamily:'Poppins-Regular',fontWeight:'bold',fontSize:moderateScale(15),color:'#fff',marginLeft:wp('1%')
  },
  pointsbot:{
    textAlign:'center',fontFamily:'Poppins-Regular',fontSize:moderateScale(15),color:'#fff',marginLeft:wp('1%')
  },

  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: 'white',

  },
  headerText: {
    padding: 8,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
  },
  tabContent: {
    color: '#444444',
    fontSize: 18,
    margin: 24,
  },
  seperator: {
    marginHorizontal: -10,
    alignSelf: 'stretch',
    borderTopWidth: 1,
    borderTopColor: '#888888',
    marginTop: 24,
  },
  tabStyle: {
    borderColor: '#D52C43',
  },
  activeTabStyle: {
    backgroundColor: '#D52C43',
  },
  onpostpic:{
    borderWidth:0.1,height:hp("5.3%"),width:wp('11%'),borderRadius:20,
  },
  procontainer1:{
    justifyContent:'center',alignItems:'center',width:wp('19%'),backgroundColor:'#999999',flexDirection:'row',borderRadius:20,padding:5,marginLeft:wp('32%')
  },
  insidepic:{
    justifyContent:'center',alignItems:'center',width:wp('17%'),height:hp('8%'),borderRadius:5
  }

});
export default styles;