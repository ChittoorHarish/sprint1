import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 10,
        justifyContent: 'center',
      },
      itemtext:{
        fontSize:moderateScale(12),
        textAlign:'center',
        lineHeight:18,
        color: 'rgb(80,80,80)',
        fontFamily:'Poppins-Medium'
      },
      basic:{
        justifyContent:'center',
        alignItems:'center'
      },
      onnext:{
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        fontSize:moderateScale(16),
        color:'white'
      },
      signuptext:{
        fontSize:moderateScale(18),
        color:'white',
        fontFamily:'Poppins-Bold',
        textAlign:'center',
        marginLeft:wp('1%')
      },
      signuptouch:{
        marginTop:hp('5%'),
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
      },
      signintouch:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        borderRadius:7,
        padding:11,
        width:wp('80%'),
        alignSelf:'center'
      },
      signintext:{
        fontSize:moderateScale(18),
        color:'black',
        fontFamily:'Poppins-Bold',
        textAlign:'center'
      },
      img:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('18%'),
        alignSelf:'center'
      },
      buttonCircle: {
        width:wp('82%'),
        height:hp('5%'),
        backgroundColor: '#1e90ff',
        borderRadius: 5,
        marginEnd:wp('5%'),
        marginLeft:wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonCircle: {
        width:wp('82%'),
        height:hp('5%'),
        backgroundColor: '#1e90ff',
        borderRadius: 5,
        marginEnd:wp('5%'),
        marginLeft:wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleStyle: {
        padding: 10,
        textAlign: 'center',
        fontSize: 18,
        fontFamily:'Poppins-Bold'
      },
      paragraphStyle: {
        padding: 20,
        textAlign: 'center',
        fontSize: 16,
      },
      introImageStyle: {
        height:hp('63%'),
        width:wp('100%'),
        alignSelf:'center'
        
      },
      introTextStyle: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        alignSelf:'center',
        fontFamily:'Poppins-Regular'
      },
      introTitleStyle: {
        fontSize: moderateScale(26),
        color: 'rgb(80,80,80)',
        marginTop:hp('10%'),
        textAlign: 'center',
        lineHeight: 39,
        fontFamily:'Poppins-Bold',
        alignSelf:'center'
      },
      introTitleStyle2: {
        fontSize: moderateScale(26),
        color: 'rgb(80,80,80)',
        lineHeight:39,
        textAlign: 'center',
        fontFamily:'Poppins-Bold',
      },
      introTitleStyle3: {
        fontSize: moderateScale(26),
        color: 'rgb(80,80,80)',
        textAlign: 'center',
        lineHeight: 39,
        fontFamily:'Poppins-Bold',
        alignSelf:'center'
      },
      onboardtext:{
        justifyContent:'center',
        alignItems:'center',
        marginLeft:wp('7%'),
        marginTop:hp('3%'),
        marginEnd:wp('7%')
      },
      skipCircle: {
        width:wp('82%'),
        backgroundColor: 'transparent',
        marginEnd:wp('5%'),
        marginLeft:wp('5%'),
        justifyContent: 'center',
        alignItems: 'center',
      },
      onskip:{
        textAlign:'center',
        fontFamily:'Poppins-Bold',
        fontSize:moderateScale(16),
        color:'grey'
      },

});
export default styles;