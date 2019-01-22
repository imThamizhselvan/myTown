import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon, Button, Text } from 'native-base'
import { styles } from '../AuthenticationScreen/styles';

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailHolder : 'Email-id',
      mobileNumberHolder : 'Mobile Number',
      nameHolder : 'Name',
      passwordHolder: 'Password',
      email: '',
      name: '',
      mobileNumber: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon style={styles.close} name='close'/>
        <Text style={styles.primaryTitle}>Sign up</Text>
        <Text style={styles.conjunctor}>or <Text style={styles.secondaryTitle} onPress={() => this.props.navigation.navigate('AuthenticationScreen')}> Login to your account </Text> </Text>
        <View style={styles.centerWrapper}>
          <TextInput
            style={styles.textBox}
            onChangeText={(email) => this.setState({email})}
            placeholder={this.state.emailHolder}
            value={this.state.email}
          />
          <TextInput
            style={styles.textBox}
            onChangeText={(name) => this.setState({name})}
            placeholder={this.state.nameHolder}
            value={this.state.name}
          />
          <TextInput
            style={styles.textBox}
            onChangeText={(mobileNumber) => this.setState({mobileNumber})}
            placeholder={this.state.mobileNumberHolder}
            value={this.state.mobileNumber}
          />
          <TextInput
            style={styles.textBox}
            onChangeText={(password) => this.setState({password})}
            placeholder={this.state.passwordHolder}
            value={this.state.password}
          />
        </View>
        <Button block
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text> Sign up </Text>
        </Button>
      </View>
    );
  }
}
