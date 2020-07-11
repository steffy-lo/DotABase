import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";

export default class Search extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({tintColor}) => (
            <Icon name={'search'} size={30} color={tintColor} />
        )
    };

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ marginTop: 50, fontSize: 25 }}>Search</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: 300,
        marginTop: 16,
    },
});