import React, {useState, useRef, useCallback} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  SafeAreaView,
  ToastAndroid,
  FlatList,
  TextInput,
  Button,
} from 'react-native';
import Slider from 'rn-range-slider';
import styles from './styles';
import Thumb from './Thumb';
import Notch from './Notch';
import Rail from './Rail';
import RailSelected from './RailSelected';
import Label from './Label';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import RBSheet from 'react-native-raw-bottom-sheet';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
  moderateScale,
  heightPercentageToDP,
} from '../../services/responsiveFunc';
import {useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

var events = [
  {label: 'Today', value: 0},
  {label: 'Yesterday', value: 1},
];
var date = [
  {label: 'lastweek', value: 2},
  {label: 'month', value: 3},
];
var last = [{label: 'lastweek', value: 4}];

const search = props => {
 
  const refRBSheet = useRef();
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [estado, setEstado] = useState(false);
  const [estado1, setEstado1] = useState(false);
  const [estado2, setEstado2] = useState(false);
  const [estado3, setEstado3] = useState(false);
  const [categories, setCategories] = useState([]);
  const [mastercategories, setMastercategories] = useState([]);
  const [rangeDisabled, setRangeDisabled] = useState(false);
  const [low, setLow] = useState(0);
  const [high, setHigh] = useState(100);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(100);
  const [floatingLabel, setFloatingLabel] = useState(false);

  const renderThumb = useCallback(() => <Thumb/>, []);
const renderRail = useCallback(() => <Rail/>, []);
const renderRailSelected = useCallback(() => <RailSelected/>, []);
const renderLabel = useCallback(value => <Label text={value}/>, []);
const renderNotch = useCallback(() => <Notch/>, []);
const handleValueChange = useCallback((low, high) => {
  setLow(low);
  setHigh(high);
}, []);

const toggleRangeEnabled = useCallback(() => setRangeDisabled(!rangeDisabled), [rangeDisabled]);
  const setMinTo50 = useCallback(() => setMin(50), []);
  const setMinTo0 = useCallback(() => setMin(0), []);
  const setMaxTo100 = useCallback(() => setMax(100), []);
  const setMaxTo500 = useCallback(() => setMax(500), []);
  const toggleFloatingLabel = useCallback(() => setFloatingLabel(!floatingLabel), [floatingLabel]);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };
  const agregarFavoritos1 = () => {
    setEstado1(!estado1);
  };
  const agregarFavoritos2 = () => {
    setEstado2(!estado2);
  };
  const agregarFavoritos3 = () => {
    setEstado3(!estado3);
  };

  useEffect(async () => {
    let token = await AsyncStorage.getItem('auth_token');
    let userid = await AsyncStorage.getItem('auth_userid');
    //  setAuthtoken(a.id)
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
      .then(json => {
        console.log(
          'resp:>>>>>>>>>>>>>>>>>>>>>>>>>>>>>' + JSON.stringify(json),
        );
        setMastercategories(json.data);
        setCategories(json.data.filter(item => item.parent == null));
      });
  }, []);

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       setFilteredDataSource(responseJson);
  //       setMasterDataSource(responseJson);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };
  const ItemView = ({item}) => {
    return (
      // Flat List Item
      <Text style={styles.itemStyle} onPress={() => getItem(item)}>
        {item.id}
        {'.'}
        {item.title.toUpperCase()}
      </Text>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };

  const getItem = item => {
    // Function for click on an item
    alert('Id : ' + item.id + ' Title : ' + item.title);
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView>
        <View style={styles.center}>
          <View style={styles.ham}>
            <View style={styles.icon}>
              <Icon
                name="arrow-back"
                size={25}
                color="#ffffff"
                onPress={() => props.navigation.navigate('Home')}
              />
              <Text style={styles.searchtext}>Search</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.mainbox}>
                <TextInput
                  style={styles.textInputStyle}
                  onChangeText={text => searchFilterFunction(text)}
                  value={search}
                  underlineColorAndroid="transparent"
                  placeholder="Search Category..."
                  placeholderTextColor={'white'}
                />
                <View style={styles.searchicon}>
                  <TouchableOpacity onPress={() =>props.navigation.navigate('searchfilter')}>
                  <Icon name="search" size={25} color="#ffffff" />
                  </TouchableOpacity>
                </View>
                <View style={styles.options}>
                  <TouchableOpacity onPress={() => refRBSheet.current.open()}>
                    <Icon name="options" size={35} color="#ffffff" />
                  </TouchableOpacity>
                  <RBSheet
                    ref={refRBSheet}
                    animationType="slide"
                    // closeOnDragDown={true}
                    closeOnPressMask={true}
                    closeOnPressBack={true}
                    customStyles={{
                      wrapper: {
                        backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)',
                      },
                      container: {
                        borderRadius: 30,
                        width: wp('92%'),
                        height: hp('60%'),
                        marginLeft: wp('4%'),
                        marginEnd: wp('4%'),
                      },
                      draggableIcon: {},
                    }}>
                    <View style={styles.rawbottom}>
                      <TouchableOpacity>
                      <Text style={styles.choose}>Filter</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => refRBSheet.current.close()}>
                        <Text style={styles.done}>Back</Text>
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{
                        borderBottomColor: 'grey',
                        borderBottomWidth: 1,
                        width: wp('13%'),
                        marginLeft: wp('39%'),
                        marginTop: hp('1%'),
                      }}
                    />
                    <View style={styles.rawtext}>
                      <Text style={styles.change}>Short by Date</Text>
                    </View>
                    <View style={styles.radioview}>
                      <View style={styles.basic}>
                        <RadioForm
                          radio_props={events}
                          initial={2}
                          onPress={e => console.log(e)}
                          buttonSize={12}
                          buttonOuterSize={25}
                          buttonColor={'rgb(189,189,189)'}
                          selectedButtonColor={'rgb(0,153,218)'}
                          selectedLabelColor={'rgb(80,80,80)'}
                          labelColor={'rgb(189,189,189)'}
                          labelStyle={{
                            fontSize: moderateScale(12),
                            width: wp('35%'),
                            fontFamily: 'Poppins-medium',
                          }}
                          disabled={false}
                          formHorizontal={true}
                        />
                      </View>
                      <View style={styles.radio2}>
                        <RadioForm
                          radio_props={date}
                          initial={2}
                          onPress={e => console.log(e)}
                          buttonSize={12}
                          buttonColor={'rgb(189,189,189)'}
                          buttonOuterSize={25}
                          selectedButtonColor={'rgb(0,153,218)'}
                          selectedLabelColor={'rgb(80,80,80)'}
                          labelColor={'rgb(189,189,189)'}
                          labelStyle={{
                            fontSize: moderateScale(12),
                            width: wp('35%'),
                            fontFamily: 'Poppins-medium',
                          }}
                          disabled={false}
                          formHorizontal={true}
                        />
                      </View>
                      <View style={styles.radio2}>
                        <RadioForm
                          radio_props={last}
                          initial={2}
                          onPress={e => console.log(e)}
                          buttonSize={12}
                          buttonColor={'rgb(189,189,189)'}
                          buttonOuterSize={25}
                          selectedButtonColor={'rgb(0,153,218)'}
                          selectedLabelColor={'rgb(80,80,80)'}
                          labelColor={'rgb(189,189,189)'}
                          labelStyle={{
                            fontSize: moderateScale(12),
                            width: wp('35%'),
                            fontFamily: 'Poppins-medium',
                          }}
                          disabled={false}
                          formHorizontal={true}
                        />
                      </View>
                    </View>

                    <View style={styles.datebox}>
                      <View style={styles.date}>
                      <TextInput style={styles.datetext}
                        placeholder="20 Feb 2021"></TextInput>
                        <View style={styles.calendar}>
                          <TouchableOpacity>
                            <Icon
                              name="calendar-outline"
                              size={21}
                              color="rgb(189,189,189)"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                      <Text style={styles.totext}>TO</Text>

                      <View style={styles.dateboxside}>
                        <TextInput style={styles.datetext}
                        placeholder="20 Feb 2021"></TextInput>
                        <View style={styles.calendar}>
                          <TouchableOpacity>
                            <Icon
                              name="calendar-outline"
                              size={21}
                              color="rgb(189,189,189)"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                    <View style={styles.rawtext}>
                      <Text style={styles.change}>Short by Reward Points</Text>
                    </View>
                    <View style={{marginTop:hp('4%'),justifyContent:'flex-start',alignItems:'flex-start'}}>
                    <Slider
  style={styles.slider}
  min={25}
  max={1500}
  step={1}
  floatingLabel
  renderThumb={renderThumb}
  renderRail={renderRail}
  renderRailSelected={renderRailSelected}
  renderLabel={renderLabel}
  renderNotch={renderNotch}
  onValueChanged={handleValueChange}
/>
</View>
<View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('84%'),marginLeft:wp('4%'),marginEnd:wp('4%')}}>
<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:wp('2%')}}>
<Text style={{fontSize:moderateScale(10),fontFamily:'Poppins-regular',color:'rgb(80,80,80)'}}>25</Text>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Icon
name="flame-outline"
size={16}
color="gold"
/>

</View>
</View>

<View style={{justifyContent:'center',alignItems:'center',flexDirection:'row',marginLeft:wp('63%')}}>
<Text style={{fontSize:moderateScale(10),fontFamily:'Poppins-regular',color:'rgb(80,80,80)'}}>1500</Text>
<View style={{justifyContent:'center',alignItems:'center'}}>
<Icon
name="flame-outline"
size={16}
color="gold"
/>

</View>
</View>

</View>
<View style={{justifyContent:'flex-start',alignItems:'flex-start',flexDirection:'row',width:wp('84%'),marginLeft:wp('4%'),marginEnd:wp('4%'),marginTop:hp('5%')}}>
<TouchableOpacity style={{borderWidth:2,width:wp('25%'),padding:9,justifyContent:'center',alignItems:'center',borderColor:'#1ad2ff',borderRadius:7,marginLeft:wp('1%')}}>
  <Text style={{fontFamily:'Poppins-Bold',fontSize:moderateScale(16),lineHeight:25,color:'#1ab2ff'}}>Clear all</Text>

</TouchableOpacity>
<TouchableOpacity style={{width:wp('52%'),padding:11,justifyContent:'center',alignItems:'center',backgroundColor:'#1ab2ff',borderRadius:7,marginLeft:wp('4%')}}>
  <Text style={{fontFamily:'Poppins-Bold',fontSize:moderateScale(16),lineHeight:25,color:'#ffffff'}}>Apply</Text>

</TouchableOpacity>
</View>
                  </RBSheet>
                </View>
              </View>

              {/* <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        /> */}
            </View>
          </View>
          {
            categories.map((item,index)=>{
              return (
                <View style={styles.collapsebox} key={index}>
                <Collapse style={{borderBottomWidth: 0, borderTopWidth: 0}}>
                  <CollapseHeader style={styles.colheader}>
                    <View style={styles.mainicon}>
                      <Icon name="globe-outline" size={28} color="rgb(0,153,218)" />
                    </View>
                    <Text style={styles.titleidentity}>{item.name}</Text>
    
                    <View style={styles.removeicon}>
                      <TouchableOpacity onPress={() => agregarFavoritos()}>
                        {estado ? (
                          <Icon
                            name="remove-outline"
                            size={28}
                            color="rgb(80,80,80)"
                          />
                        ) : (
                          <Icon
                            name="add-outline"
                            size={28}
                            color="rgb(80,80,80)"
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  </CollapseHeader>
                  <CollapseBody style={styles.colbody}>
                    <View style={styles.colmain}>
                    {
                      mastercategories.filter(subitem=>subitem.parent == item.id).map((subCategory,subIndex)=>{
                        return (
                          <View key={subIndex} style={subIndex%2==0?null:{marginLeft: wp('3%')}}>
                            <Collapse style={{flexDirection: 'row'}}>
                              <CollapseHeader>
                                <View style={styles.insidebox}>
                                  <Text style={styles.selectname}>
                                    {subCategory.name}
                                  </Text>
                                  <View style={styles.selecticon}>
                                    <Image
                                      style={styles.icons}
                                      source={require('../assets/image/signlanguage.png')}></Image>
                                  </View>
                                </View>
                              </CollapseHeader>
                            </Collapse>
                            {/* <Collapse style={{flexDirection: 'row'}}>
                              <CollapseHeader style={{marginLeft: wp('3%')}}>
                                <View style={styles.insidebox}>
                                  <Text style={styles.selectname}>Arabic</Text>
                                  <View style={styles.selecticon}>
                                    <Image
                                      style={styles.icons}
                                      source={require('../assets/image/arab.png')}></Image>
                                  </View>
                                </View>
                              </CollapseHeader>
                            </Collapse> */}
                          </View>
          
                        )
                      })
                    }
                    </View>
                    {/* <View style={styles.colmain}>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Ancient Greek</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/greece.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Chinese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/flag.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Latin</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/latin.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                    </View>
    
                    <View style={styles.colmain}>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Japanese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/japan.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Chinese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/flag.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Latin</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/latin.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                    </View>
    
                    <View style={styles.colmain}>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Japanese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/japan.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Chinese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/flag.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Latin</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/latin.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                    </View>
    
                    <View style={styles.colmain}>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Japanese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/japan.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Chinese</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/flag.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader style={{marginLeft: wp('3%')}}>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Latin</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/latin.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                    </View>
    
                    <View style={styles.colmain}>
                      <Collapse style={{flexDirection: 'row'}}>
                        <CollapseHeader>
                          <View style={styles.insidebox}>
                            <Text style={styles.selectname}>Spanish</Text>
                            <View style={styles.selecticon}>
                              <Image
                                style={styles.icons}
                                source={require('../assets/image/japan.png')}></Image>
                            </View>
                          </View>
                        </CollapseHeader>
                      </Collapse>
                    </View>
                   */}
                  </CollapseBody>
                </Collapse>
              </View>)
            })
          }

          <View style={styles.collapsebox}>
            <Collapse style={{borderBottomWidth: 0, borderTopWidth: 0}}>
              <CollapseHeader style={styles.colheader}>
                <View style={styles.mainicon}>
                  <Icon
                    name="calculator-outline"
                    size={28}
                    color="rgb(0,153,218)"
                  />
                </View>
                <Text style={styles.titleidentity}>Math(Static)</Text>
                <View style={styles.removeicon}>
                  <TouchableOpacity onPress={() => agregarFavoritos1()}>
                    {estado1 ? (
                      <Icon
                        name="remove-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    ) : (
                      <Icon
                        name="add-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </CollapseHeader>
              <CollapseBody style={styles.colbody}>
                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Algebra</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/signlanguage.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>
                          Statistics And Probability
                        </Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/arab.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>
                          Applied Integrated Mathematics
                        </Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/greece.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View
                        style={{
                          justifyContent: 'flex-start',
                          alignItems: 'flex-start',
                          flexDirection: 'row',
                          borderRadius: 5,
                          backgroundColor: 'rgb(245,245,245)',
                          marginTop: hp('2%'),
                          padding: 4,
                          width: wp('80%'),
                        }}>
                        <Text style={styles.selectname}>
                          Calculus/ Pre-Calculus/ Multivariable Calculus💯
                        </Text>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>
                          Geometry And Trigonometry
                        </Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={styles.collapsebox}>
            <Collapse style={{borderBottomWidth: 0, borderTopWidth: 0}}>
              <CollapseHeader style={styles.colheader}>
                <View style={styles.mainicon}>
                  <Icon name="flask-outline" size={28} color="rgb(0,153,218)" />
                </View>
                <Text style={styles.titleidentity}>Science(Static)</Text>
                <View style={styles.removeicon}>
                  <TouchableOpacity onPress={() => agregarFavoritos2()}>
                    {estado2 ? (
                      <Icon
                        name="remove-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    ) : (
                      <Icon
                        name="add-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </CollapseHeader>
              <CollapseBody style={styles.colbody}>
                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>
                          American Sign Language
                        </Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/signlanguage.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Arabic</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/arab.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Ancient Greek</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/greece.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Spanish</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>
              </CollapseBody>
            </Collapse>
          </View>

          <View style={styles.collapsebox}>
            <Collapse style={{borderBottomWidth: 0, borderTopWidth: 0}}>
              <CollapseHeader style={styles.colheader}>
                <View style={styles.mainicon}>
                  <Icon
                    name="reload-circle-outline"
                    size={28}
                    color="rgb(0,153,218)"
                  />
                </View>
                <Text style={styles.titleidentity}>Lorem Ipsum(Static)</Text>
                <View style={styles.removeicon}>
                  <TouchableOpacity onPress={() => agregarFavoritos3()}>
                    {estado3 ? (
                      <Icon
                        name="remove-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    ) : (
                      <Icon
                        name="add-outline"
                        size={28}
                        color="rgb(80,80,80)"
                      />
                    )}
                  </TouchableOpacity>
                </View>
              </CollapseHeader>
              <CollapseBody style={styles.colbody}>
                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>
                          American Sign Language
                        </Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/signlanguage.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Arabic</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/arab.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Ancient Greek</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/greece.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Japanese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Chinese</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/flag.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader style={{marginLeft: wp('3%')}}>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Latin</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/latin.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>

                <View style={styles.colmain}>
                  <Collapse style={{flexDirection: 'row'}}>
                    <CollapseHeader>
                      <View style={styles.insidebox}>
                        <Text style={styles.selectname}>Spanish</Text>
                        <View style={styles.selecticon}>
                          <Image
                            style={styles.icons}
                            source={require('../assets/image/japan.png')}></Image>
                        </View>
                      </View>
                    </CollapseHeader>
                  </Collapse>
                </View>
              </CollapseBody>
            </Collapse>
          </View>
         
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({

// });

export default search;
