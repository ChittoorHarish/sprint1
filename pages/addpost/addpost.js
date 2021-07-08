import React, {Component} from 'react';
import {useState} from 'react';
import {View, StyleSheet, Switch} from 'react-native';
import DropDownPicker from 'react-native-custom-dropdown';
import Icon from 'react-native-vector-icons/Ionicons';
import {useEffect} from 'react';
import * as ImagePicker from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CalendarPicker from 'react-native-calendar-picker';
import {
  Button,
  Text,
  SafeAreaView,
  Image,
  TextComponent,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './styles';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
} from '../../services/responsiveFunc';
import {ScrollView} from 'react-native-gesture-handler';
import {log, Value} from 'react-native-reanimated';
import color from 'color';
export default class addpost extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.route.params.applyCurrentSubCategory);
    console.log(props.route.params.currentRun);
    const currentRun = props.route.params.currentRun;
    const applyCurrentSubCategory = props.route.params.applyCurrentSubCategory;
    this.state = {
      selectedStartDate:true,
      title: '',
      category: currentRun.category_id,
      subCategory: currentRun.sub_category_id,
      description: '',
      fp: '',
      comm_method: '',
      timeframe: '',
      datetime: '',
      fileUri: '',
      media: [],
      resourcePath: {},
      masterCategoriesList: [],
      categoriesList: [],
      subCategoriesList: [],
      commsList: [
        {label: 'Chat', value: '3'},
        {label: 'Audio/Video Call', value: '4'},
      ],
    };
    this.onDateChange = this.onDateChange.bind(this);
  }
  ShowHideTextComponentView = () =>{
 
    if(this.state.status == true)
    {
      this.setState({status: false})
    }
    else
    {
      this.setState({status: true})
    }
  }
  
  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  async componentDidMount() {
    let token = await AsyncStorage.getItem('auth_token');
    fetch(
      'https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/categories',
      {
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + token,
        },
      },
    )
      .then(res => res.json())
      .then(async json => {
        await this.setState(state => ({
          categoriesList: (json.data || [])
            .filter(item => item.parent == null)
            .map(ele => {
              return {
                label: ele.name,
                value: ele.id,
              };
            }),
          masterCategoriesList: json.data || [],
        }));
        console.log(
          'categories data',
          this.state.categoriesList,
          this.state.masterCategoriesList,
          json.data,
        );
      });
  }

  handleCategoryChange = item => {
    this.setState(state => ({
      subCategoriesList: this.state.masterCategoriesList
        .filter(category => category.parent == item.value)
        .map(ele => {
          return {
            label: ele.name,
            value: ele.id,
          };
        }),
    }));
    console.log(
      'subcategories',
      item,
      this.state.subCategoriesList,
      this.state.masterCategoriesList,
    );
  };

  sendcred = async () =>{
    console.log(JSON.stringify({
      description: this.state.description,
      fp: this.state.fp,
      timeframe:this.state.timeframe,
      datetime:this.state.datetime,
      title:this.state.title,
      category_id:this.state.category.toString(),
      comm_method:this.state.comm_method.toString(),
      sub_category_id:this.state.subCategory.toString()
    }));
    let token =await AsyncStorage.getItem('auth_token');
    let userid = AsyncStorage.getItem('auth_userid');
    let postid = AsyncStorage.getItem('auth_postid');
 //  setAuthtoken(a.id)
   fetch("https://obn1qqspll.execute-api.us-east-1.amazonaws.com/dev/user/post/add",
   {
     method: 'POST',
    headers: {
      "Content-Type":'application/json',
      "Authorization": 'Bearer ' + token
    },
    body:JSON.stringify({
      description: this.state.description,
      fp: this.state.fp,
      timeframe:this.state.timeframe,
      datetime:this.state.datetime,
      title:this.state.title,
      category_id:this.state.category.toString(),
      comm_method:this.state.comm_method.toString(),
      sub_category_id:this.state.subCategory.toString()
      
    }),
   })
   .then(res=>res.json())
   .then(responseJson=>{
     console.log(responseJson);
     if (responseJson.code == 200) {
      alert(
        'Post Saved Successfully!',

        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
      );

      this.props.navigation.navigate('Home');
    } else {

      alert(
        "Please Check the Fields to Proceed",

        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => console.log("OK Pressed") }
        ],

      );
    }
     setData(responseJson.data)
   })
  }
  selectFile = () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, res => {
      console.log('Response = ', res);

      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        this.setState({
          resourcePath: source,
        });
      }
    });
  };
  // launchImageLibrary = () => {
  //   let options = {
  //     storageOptions: {
  //       skipBackup: false,
  //       path: 'images',
  //     },
  //   };
  //   ImagePicker.launchCamera(options, response => {
  //     if (response.didCancel) {
  //       console.log('user cancelled image picker');
  //     } else if (response.error) {
  //       console.log('image picker error', response.error);
  //     } else if (response.customButton) {
  //       console.log('user tapped custom button ', response.customButton);
  //     } else {
  //       let source = res;
  //       this.setState({resourcePath: source,});
  //     }
  //   });
  // };

  renderFileUri() {
    if (this.state.fileUri) {
      return (
        <View style={styles.imgContainer}>
          <Image style={styles.img} source={{uri: this.state.fileUri}} />
        </View>
      );
    } else {
      // return (
      //   <View style={styles.imgContainer}>
      //     <Image
      //       style={styles.img}
      //       source={require('../assets/image/galgadot.jpeg')}
      //     />
      //   </View>
      // );
    }
  }

  render() {
    const { selectedStartDate } = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.frame}>
            {/* <View style={styles.container}>
              <Button
                title="select image"
                onPress={() => this.launchImageLibrary()}
              />
              {this.renderFileUri()}
            </View> */}

            <Text style={styles.headings}>Title</Text>
           
            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textin}
                placeholder="Enter Title"
                onChangeText={item => this.setState({title: item})}
                placeholderTextColor="rgb(189,189,189)"
              />
            </View>

            <Text style={styles.headings2}>Select Category</Text>

            <DropDownPicker
              items={this.state.categoriesList}
              containerStyle={{
                width: wp('95%'),
                borderWidth: 1,
                height: hp('5%'),
                borderColor: 'transparent',
                borderWidth: 2,
                borderBottomColor: 'rgb(189,189,189)',
              }}
              style={styles.dropdown}
              labelStyle={{color: 'rgb(80,80,80)'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fff'}}
              onChangeItem={item => this.handleCategoryChange(item)}
            />

            {/* <View style={styles.SectionStyle}>
 
          <TextInput
              style={styles.textin2}
              placeholder="Mathematics" 
              placeholderTextColor="rgb(80,80,80)"
          />
        </View> */}

            <Text style={styles.headings2}>Select Subcategory</Text>

            <DropDownPicker
              items={this.state.subCategoriesList}
              containerStyle={{
                width: wp('95%'),
                borderWidth: 1,
                height: hp('5%'),
                borderColor: 'transparent',
                borderWidth: 2,
                borderBottomColor: 'rgb(189,189,189)',
              }}
              style={styles.dropdown}
              labelStyle={{color: 'rgb(80,80,80)'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fff'}}
              onChangeItem={item =>
                this.setState({sub_category_id: item.value})
              }
            />

            {/* <View style={styles.SectionStyle}>
 
          <TextInput
              style={styles.textin2}
              placeholder="Algebra" 
              placeholderTextColor="rgb(80,80,80)"
          />
        </View> */}

            <Text style={styles.headings2}>Add Reward Points</Text>

            <View style={styles.SectionStyle}>
              <TextInput
                style={styles.textin2}
                placeholder="300"
                placeholderTextColor="rgb(80,80,80)"
                onChangeText={item => this.setState({fp: item})}
              />
              <View style={styles.basic}>
                <Icon name="flame-outline" color="orange" size={20} />
              </View>
            </View>

            <Text style={styles.headings2}>Description</Text>

            <TextInput
              style={styles.message}
              placeholder="Type here..."
              multiline={true}
              onChangeText={item =>
                this.setState({description: item})
              }></TextInput>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.headings3}>Upload Media</Text>
              <View style={styles.info}>
                <Icon
                  name="information-circle-outline"
                  color="rgb(0,153,218)"
                  size={20}
                />
              </View>
            </View>
            <View style={styles.putimage}>
              <View style={styles.addicon}>
                <TouchableOpacity onPress={() => this.selectFile()}>
                  {this.renderFileUri()}
                  <Icon
                    name="cloud-upload-outline"
                    size={25}
                    color="rgb(189,189,189)"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.headings2}>Preferred communication method</Text>
            <DropDownPicker
              items={this.state.commsList}
              containerStyle={{
                width: wp('95%'),
                borderWidth: 1,
                height: hp('5%'),
                borderColor: 'transparent',
                borderWidth: 2,
                borderBottomColor: 'rgb(189,189,189)',
              }}
              style={styles.dropdown}
              labelStyle={{color: 'rgb(80,80,80)'}}
              itemStyle={{
                justifyContent: 'flex-start',
              }}
              dropDownStyle={{backgroundColor: '#fff'}}
              onChangeItem={item =>
                this.setState({
                  comm_method: item.value,
                })
              }
            />

            {this.state.comm_method == '4' && (
              <View>
                <Text style={styles.headings2}>Set time frame</Text>
                <View style={styles.time}>
                  <View style={styles.SectionStyle1}>
                    <TextInput
                      style={styles.textin2}
                      placeholder="start time"
                      placeholderTextColor="rgb(80,80,80)"
                      onChangeText={item => this.setState({timeframe: item})}
                    />
                    <View style={styles.basic}>
                      <Icon name="time-outline" size={20} />
                    </View>
                  </View>
                  <View style={styles.SectionStyle1}>
                    <TextInput
                      style={styles.textin2}
                      placeholder="End time"
                      placeholderTextColor="rgb(80,80,80)"
                      onChangeText={item => this.setState({timeframe: item})}
                    />
                    <View style={styles.basic}>
                      <Icon name="time-outline" size={20} />
                    </View>
                  </View>
                </View>
              </View>
            )}


           
            <Text style={styles.headings2}>Completion deadline</Text>
            {
          // Pass any View or Component inside the curly bracket.
          // Here the ? Question Mark represent the ternary operator.
 
        this.state.status ? <View style={styles.container1}>
        <CalendarPicker
          onDateChange={this.onDateChange}
          selectedDayColor={"#1ab2ff"}
          selectedDayTextColor={'#fff'}
          previousTitle={"<-"}
          width={350}
          showDayStragglers={true}
          previousTitleStyle={{color:"#1ab2ff",fontSize:moderateScale(20),fontWeight:'bold'}}
          nextTitle={"->"}
          nextTitleStyle={{color:"#1ab2ff",fontSize:moderateScale(20),fontWeight:'bold'}}
          yearTitleStyle={{fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold'}}
          monthTitleStyle={{fontSize:moderateScale(14),fontFamily:'Poppins-SemiBold'}}
          
        />

        <View>
          {/* <Text>SELECTED DATE:{ startDate }</Text> */}
        </View>
      </View> : null
      }
            <View style={styles.country}>
              <View style={styles.SectionStyle1}>
                <TextInput
                  style={styles.textin2}
                  placeholder="11-30-1967"
                  placeholderTextColor="rgb(80,80,80)"
                  onChangeText={item => this.setState({datetime: item})}
                />
                <View style={styles.basic}>
                  <TouchableOpacity  onPress={this.ShowHideTextComponentView}>
                  <Icon name="calendar-outline" size={20} />
                  </TouchableOpacity>
               
                </View>
              </View>
              <View style={styles.SectionStyle1}>
                <TextInput
                  style={styles.textin2}
                  placeholder="9:30AM"
                  placeholderTextColor="rgb(80,80,80)"
                  onChangeText={item => this.setState({timeframe: item})}
                />
                <View style={styles.basic}>
                  <Icon name="time-outline" size={20} />
                </View>
              </View>
            </View>
            <View style={styles.button}>
              <TouchableOpacity
                style={styles.marktouch}
                onPress={() => this.sendcred()}>
                <Text style={styles.marktext}>Post</Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                borderBottomColor: 'transparent',
                borderBottomWidth: 1,
                width: wp('50%'),
                marginLeft: wp('4%'),
                marginTop: hp('1%'),
                marginBottom: hp('1%'),
              }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });

