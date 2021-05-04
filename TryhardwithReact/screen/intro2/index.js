import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from '../../src/style/Intro2';
import Button from 'react-native-button';

class Intro2 extends Component {

    render() {

        return (
            <View style={styles.container}>
                <ImageBackground source={require('../../src/assets/intro_2.png')} style={styles.image}>
                </ImageBackground>
                <Button
                    containerStyle={styles.textButton}
                    disabledContainerStyle={{ backgroundColor: 'grey' }}
                    style={{ fontSize: 20, color: '#F5F5F5' }}
                    onPress={() => this.props.navigation.navigate('Intro3')}>
                    Get Started
  </Button>
            </View>
        )
    }
}

export default Intro2;