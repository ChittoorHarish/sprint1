import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  center: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor:'#ffffff'
  },
  ham:{
    height:hp('40%'),
    width:wp('100%'),
    backgroundColor:'#1e90ff',
    borderBottomEndRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  icon:{
    justifyContent:'flex-start',
    alignItems:'flex-start',
    marginTop:hp('3%'),
    marginLeft:wp('3%')
  },
  fiya:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('5%')
  },
  home:{
    textAlign:'center',
    fontSize:20,
    justifyContent:'center',
    alignItems:'center',
    marginTop:hp('16%'),
    marginLeft:wp('15%')
  }

});
export default styles;