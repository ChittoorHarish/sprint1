import React,{useCallback, Component} from "react";
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { renderNode } from "react-native-elements/dist/helpers";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

export default class chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        };
        
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
      ShowHideTextComponentView1 = () =>{
 
        if(this.state.receive == true)
        {
          this.setState({receive: false})
        }
        else
        {
          this.setState({receive: true})
        }
      }

  render(){  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView>
    <View style={styles.center}>
      <Text style={styles.day}>Today at 5:30 PM</Text>
      {
        this.state.status ? <View style={styles.container1}>
       

        <View>
        <Text style={styles.senttime}>12:30AM</Text>
        </View>
      </View> : null
      }
     <TouchableOpacity onPress={this.ShowHideTextComponentView}>
      <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare} >
          
      <Text style={styles.senttext}>Helo</Text>
      
      </View>
      <View style={styles.talkBubbleTriangle} />
    </View>
    </TouchableOpacity>
    {
        this.state.receive ? <View style={styles.container1}>
       

        <View>
        <Text style={styles.receivedtime}>12:47AM</Text>
        </View>
      </View> : null
      }
    <TouchableOpacity onPress={this.ShowHideTextComponentView1}>
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquarewhite}>
          
      <Text style={styles.receivedtext}>Hai..</Text>     
      </View>
      <View style={styles.talkBubbleTrianglewhite} />
    </View>
    </TouchableOpacity>
    <View style={styles.talkBubble}>
      <View style={styles.talkBubbleSquare}>
          
      <Text style={styles.senttext}>How are you? I was waiting for the solution. Can u help me with that?</Text>
      
      </View>
      <View style={styles.talkBubbleTriangle} />
    </View>
    </View>
    </ScrollView>
    <View style={styles.bottom}>
        <View style={styles.frame}>
        <TextInput style={styles.input}
        placeholder="Type a message...">

        </TextInput>
        <View style={styles.sendicon}>
        <Icon name="send-sharp" color="#1ab2ff" size={25} />
            </View>
            <View style={styles.addicon}>
        <Icon name="add" color="rgb(189,189,189)" size={24} />
            </View>
    
          </View>
          </View>
    </SafeAreaView>
  );
  }
};

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     textAlign: "center",
//   },
// });
