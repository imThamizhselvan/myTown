import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { Icon, Button, Text } from 'native-base'
import { styles } from '../AuthenticationScreen/styles';

export class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailHolder : 'Recovery Email-id',
      email: '',
    };
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Icon style={styles.close} name='close'/>
        <Text style={styles.primaryTitle}>Reset Password</Text>
        <Text style={styles.conjunctor}>or <Text style={styles.secondaryTitle} onPress={() => this.props.navigation.navigate('AuthenticationScreen')}> Login to your account </Text> </Text>
        <View style={styles.centerWrapper}>
          <TextInput
            style={styles.textBox}
            onChangeText={(email) => this.setState({email})}
            placeholder={this.state.emailHolder}
            value={this.state.email}
          />
        </View>
        <Button block
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AuthenticationScreen')}>
          <Text> Reset </Text>
        </Button>
      </View>
    );
  }
}
