import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({

  center: {
    flex: 1,
    justifyContent: "flex-start",
    zIndex:0,
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
    flexDirection:'row',
    marginLeft:wp('3%'),
    marginEnd:wp('4%')
  },
  fiya:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('3%')
  },
  notification:{
    justifyContent:'flex-end',alignItems:'flex-end',marginLeft:wp('70%'),
  },
  belltext:{
    fontSize:moderateScale(10),color:'#1ab2ff',fontFamily:'Poppins-Regular',textAlign:'center'
  },
  notificationtext:{
    justifyContent:'center',alignItems:'center',borderRadius:10,backgroundColor:'white',width:wp('3.5%'),marginTop:hp('0.5%'),marginLeft:wp('-4.5%')
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
    fontSize:moderateScale(20),fontFamily:'Poppins-Bold',color:'#ffffff',marginTop:hp('0.5%'),lineHeight:30
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
    textAlign:'center',fontFamily:'Poppins-Medium',fontSize:moderateScale(15),color:'#fff',marginLeft:wp('1%'),lineHeight:21
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
    justifyContent:'center',borderWidth:0.1,alignItems:'center',width:wp('15%'),height:hp('8%'),borderRadius:5
  },
  basic1:{
    justifyContent:'center',alignItems:'flex-start'
  },
  heading:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp("2%"),
  },
  titlebox:{
    justifyContent:'center',alignItems:'flex-start',flexDirection:'column',marginLeft:wp("3%")
  },
  nametitle:{
    fontSize:moderateScale(16),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:25
  },
  occupation:{
    fontSize:moderateScale(12),fontFamily:'Poppins-Regular',color:'#888888',lineHeight:18
  },
  ellipsis:{
    justifyContent:'flex-end',alignItems:'flex-end',marginHorizontal:wp('42%')
  },
  detailbox:{
    justifyContent:'flex-start',marginLeft:wp('5%'),alignItems:'flex-start',borderWidth:0.5,borderColor:'grey',height:hp("34%"),width:wp('90%'),marginTop:hp('2%'),borderRadius:10,
  },
  detail1:{
    justifyContent:'center',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('3%'),marginTop:hp('1.5%')
  },
  touch:{
    justifyContent:'center',alignItems:'flex-start',flexDirection:'column',width:wp("30%")
  },
  chaptertitle:{
    fontFamily:'Poppins-Bold',fontSize:moderateScale(16),lineHeight:25,color:'rgb(80,80,80)'
  },
  chaptername:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(14),color:'#888888',lineHeight:21
  },
  captionview:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('4%'),marginEnd:wp('4%'),
  },
  description:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(12),lineHeight:18,color:'rgb(80,80,80)'
  },
  imageview:{
    justifyContent:'center',alignItems:'center',flexDirection:'row',marginTop:hp('1%')
  },
  insideview:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('40%'),
  },
 

});
export default styles;
