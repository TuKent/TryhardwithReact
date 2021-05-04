import React, { Component } from 'react';
import { View, Text, Image, TextInput } from 'react-native';
import styles from '../../src/style/login';
import Button from 'react-native-button';

class Login extends Component {

    render() {

        return (
            <View style={styles.container}>
                <Image source={require('../../src/assets/logo.png')} style={styles.image}></Image>
                <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                    <View style={styles.headerWrapper}>
                        <TextInput style={styles.header}>Mã sinh viên </TextInput>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 20 }}>
                    <View style={styles.headerWrapper}>
                        <TextInput style={styles.header}>Mật khẩu </TextInput>
                    </View>
                </View>
                <Button
                    containerStyle={{
                        padding: 15, height: 70, overflow: 'hidden', borderRadius: 4,
                        backgroundColor: '#EE3B3B', marginHorizontal: 80,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 4,
                        },
                        shadowOpacity: 0.30,
                        shadowRadius: 4.65,
                        elevation: 8,
                    }}
                    // disabledContainerStyle={{ backgroundColor: 'white' }}
                    style={{ fontSize: 25, color: 'white' }}
                    onPress={() => this.props.navigation.navigate('Intro')}>
                    Đăng Nhập
                 </Button>
                <Text style={styles.textFooter}>Hướng dẫn ĐKMH</Text>
                <Text style={styles.textFooterChild}>Sinh viên thắc mắc về đăng ký môn học vui lòng liên hệ Phòng Đào Tạo</Text>
                <Text style={styles.textFooterChild}>Số điện thoại: 08 3715 4284</Text>
                <Text style={styles.textFooterChild}>Mail: pdt@vido.edu.vn</Text>
            </View>
        )
    }
}

export default Login;