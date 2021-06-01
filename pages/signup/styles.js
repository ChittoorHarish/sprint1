import {StyleSheet} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, moderateScale } from '../../services/responsiveFunc';

const styles = StyleSheet.create({
    basic:{
        justifyContent:'center',
        alignItems:'center'
    },
    safe:{
        flex: 1,backgroundColor:'white' 
      },
    signuptext:{
        justifyContent:'center',
        alignItems:'flex-start',
        marginTop:hp('4%')
    },
    signuptitle:{
        fontSize:moderateScale(22),marginLeft:wp('5%'),fontFamily:'Poppins-Bold',
    },
    and:{
        fontSize:moderateScale(17),fontFamily:'Poppins-Regular'
    },
    privacy:{
        fontSize:moderateScale(17),color:'#1e90ff',marginLeft:wp('10%'),fontFamily:'Poppins-Regular'
    },
    sendbtn:{
        justifyContent:'center',alignItems:'center',backgroundColor:'#1e90ff',borderRadius:7,padding:11,width:wp('83%'),alignSelf:'center'
    },
    signuptextbot:{
        fontSize:moderateScale(18),color:'white',fontFamily:'Poppins-Bold'
    },
    accept:{
        fontSize:moderateScale(17),marginLeft:wp('3%'),fontFamily:'Poppins-Regular'
    },
    terms:{
        fontSize:moderateScale(17),color:'#1e90ff',fontFamily:'Poppins-Regular'
    },
    basicstart:{
        justifyContent:'center',
        alignItems:'flex-start'
    },
    country:{
        flexDirection:'row',
        marginLeft:wp('5%'),
        alignItems:'center',
        justifyContent:'center',
        marginEnd:wp('4%')
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
    SectionStyle1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        width:wp('43%'),
        marginHorizontal:wp('2%'),
        marginTop:hp('2%'),
        borderColor: 'transparent',
        borderBottomColor:'black',
        height: hp('6%'),
    
    
      },
    send:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:hp('9%'),
        alignSelf:'center',
        marginBottom:hp('1%')
    },
    textin:{
        flex:1,
        fontSize:moderateScale(17),
        marginLeft:wp('3%')
    },
    check:{
        justifyContent:'center',
        marginLeft:wp('5%'),
        alignItems:'center',
        flexDirection:'row',
        marginEnd:wp('4%')
    }
});
export default styles;