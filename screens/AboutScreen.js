import React from 'react'
import {
    Button,
    View,
    Text,
} from 'react-native';

const AboutScreen = ({navigation}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16
            }}
        >
            <Text
                style={{
                    fontSize: 25,
                }}
            >
                About Screen
            </Text>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop:50,
                    alignItems: 'center',
                    justifyContent:'center'
                }}
            >
            <Button
                onPress={() => navigation.navigate('HomeScreen')}
                title="Home"
            />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop:50,
                }}
            >
            <Button
                onPress={() => navigation.navigate('HymnScreen')}
                title="Hymn"
            />
            </View>
        </View>
    )
}

export default AboutScreen
