import React from 'react'
import {
    Button,
    View,
    Text,
} from 'react-native';
import {
    Header
} from 'react-native-elements';

const HomeScreen = ({navigation}) => {
    return (
        <View
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                padding: 16
            }}
        >
            <Header>

            </Header>
            <Text
                style={{
                    fontSize: 25,
                }}
            >
                Home Screen
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
                onPress={() => navigation.navigate('HymnScreen')}
                title="Hymn"
            />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    marginTop:50,
                }}
            >
            <Button
                onPress={() => navigation.navigate('AboutScreen')}
                title="About"
            />
            </View>
        </View>
    )
}

export default HomeScreen
