import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon, Button, Text } from 'native-base'
import { styles } from './styles';

export class AuthenticationScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumberHolder : 'Mobile Number',
      passwordHolder: 'Password',
      mobileNumber: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon style={styles.close} name='close'/>
        <Text style={styles.primaryTitle}>Login</Text>
        <Text style={styles.conjunctor}>or <Text style={styles.secondaryTitle} onPress={() => this.props.navigation.navigate('SignUp')}> Create an account </Text> </Text>
        <View style={styles.centerWrapper}>
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
        <Text style={styles.rightAlignedText} onPress={() => this.props.navigation.navigate('ForgotPassword')}> Forgot Password? </Text>
        <Button block
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Home')}>
          <Text> Login </Text>
        </Button>
      </View>
    );
  }
}
