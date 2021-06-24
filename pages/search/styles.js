import {StyleSheet} from 'react-native';
import {heightScale, widthScale} from '../../utils/Utils';
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
    height:hp('22%'),
    width:wp('100%'),
    backgroundColor:'#1ab2ff',
    borderBottomEndRadius:30,
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30
  },
  icon:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:hp('6%'),
    flexDirection:'row',
    marginLeft:wp('3%'),
    marginEnd:wp('4%')
  },
  // container: {
  //   backgroundColor: 'white',
  // },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    height:hp('6%'),
    borderWidth: 1,
    marginLeft:wp('4%'),
    width:wp('75%'),
    borderRadius:30,
    flexDirection:'row',
    paddingLeft:15,
    color:'white',
    fontFamily:'Poppins-Regular',
    fontSize:moderateScale(14),
    borderColor: '#ffffff',
    backgroundColor: 'rgb(61,188,243)',
    marginTop:hp('3%')
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  icons:{
    height:hp('2%'),width:wp('4%')
  },
  safe:{
    flex: 1,backgroundColor:'white' 
  },
  rawbottom:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginTop:hp('2%')
  },
  choose:{
    fontFamily:'Poppins-SemiBold',fontSize:moderateScale(16),lineHeight:25,alignItems:'center',color:'rgb(80,80,80)',marginLeft:wp('40%')
  },
  done:{
    fontFamily:'Poppins-SemiBold',fontSize:moderateScale(14),color:'rgb(0,153,218)',marginLeft:wp("25%"),lineHeight:21
  },
  rawtext:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp("4%"),width:wp('80%'),marginTop:hp('2%')
  },
  change:{
    fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold',color:'rgb(80,80,80)',lineHeight:21
  },
  channel:{
    justifyContent:'space-evenly',alignItems:'center',flexDirection:'row',marginLeft:wp("5%"),width:wp('80%'),marginTop:hp('3%')
  },
  vidaud:{
    flexDirection:'column',justifyContent:'center',alignItems:'center'
  },
  vid:{
    justifyContent:'center',alignItems:'center',height:hp('10%'),width:wp('20%'),borderRadius:10,backgroundColor:'#1ab2ff'
  },
  aud:{
    justifyContent:'center',alignItems:'center',height:hp('10%'),width:wp('20%'),borderRadius:10,backgroundColor:'#ff3377'
  },
  guide:{
    fontSize:moderateScale(14),fontFamily:'Poppins-Bold'
  },
  searchtext:{
    fontSize:moderateScale(16),fontFamily:'Poppins-SemiBold',lineHeight:25,color:'white',marginLeft:wp('2%')
  },
  mainbox:{
    justifyContent:'flex-start',alignContent:'flex-start',flexDirection:'row'
  },
  searchicon:{
    justifyContent:'center',alignItems:'center',marginTop:hp('3%'),marginLeft:wp('-9%')
  },
  options:{
    justifyContent:'center',alignItems:'center',marginTop:hp('3%'),marginLeft:wp('7%'),transform:[{ rotate:'270deg'}]
  },
  radioview:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'column',marginLeft:wp('4%'),marginTop:hp('2%'),width:wp('80%'),marginEnd:wp('4%')
  },
  basic:{
    justifyContent:'flex-start',alignItems:'flex-start',
  },
  radio2:{
    justifyContent:'flex-start',alignItems:'flex-start',marginTop:hp('1%')
  },
  datebox:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',marginLeft:wp('4%'),marginTop:hp('2%'),width:wp('84%'),marginEnd:wp('4%')
  },
  date:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('35%'),borderWidth:1,borderColor:'transparent',borderBottomColor:'grey',padding:5
  },
  datetext:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(12),color:'rgb(189,189,189)',paddingTop:2,width:wp('24%')
  },
  calendar:{
    justifyContent:'center',alignItems:'center',marginLeft:wp('4%')
  },
  totext:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(14),textAlign:'center',marginLeft:wp('4%'),marginRight:wp('2%'),paddingTop:5,color:'rgb(189,189,189)'
  },
  dateboxside:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('35%'),borderWidth:1,borderColor:'transparent',borderBottomColor:'grey',padding:5,marginLeft:wp('0.5%')
  },
  collapsebox:{
    justifyContent:'flex-start',alignItems:'flex-start',marginLeft:wp('5%'),marginTop:hp('3%'),marginEnd:wp('5%'),width:wp('91%')
  },
  colheader:{
    flexDirection:'row',alignItems:'flex-start',backgroundColor:'#ffffff',
  },
  mainicon:{
    justifyContent:'center',alignItems:'center',padding:5,borderWidth:1,borderColor:'rgb(0,153,218)',borderRadius:5,backgroundColor:'rgb(239,250,255)'
  },
  titleidentity:{
    fontFamily:'Poppins-SemiBold',fontSize:moderateScale(14),lineHeight:21,color:'rgb(80,80,80)',marginLeft:wp("4%"),marginTop:hp('1%'),width:wp('60%')
  },
  removeicon:{
    justifyContent:'center',alignItems:'center',marginLeft:wp("7%")
  },
  colbody:{
    alignItems:'flex-start',justifyContent:'flex-start',backgroundColor:'#ffffff'
  },
  colmain:{
    flexDirection:'row',justifyContent:'space-between',alignItems:'flex-start'
  },
  insidebox:{
    justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',borderRadius:5,backgroundColor:'rgb(245,245,245)',marginTop:hp("2%"),padding:4,
  },
  selectname:{
    fontFamily:'Poppins-Regular',fontSize:moderateScale(14),lineHeight:31,color:'rgb(80,80,80)',marginLeft:wp('1%')
  },
  selecticon:{
    justifyContent:'center',alignItems:'center',padding:7
  },
  slider:{
    width:wp('83%'),marginLeft:wp('4%'),marginEnd:wp('4%')
  },
  button:{
    justifyContent:'space-evenly',
    alignItems:'flex-start',
    flexDirection:'row',
    marginTop:hp('2%'),
    alignSelf:'center',
    marginBottom:hp('2%')
  },
  listItem: {
    marginTop: 10,
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%'
  },
  listItemText: {
    fontSize: 18
  }
  

  
});
export default styles;