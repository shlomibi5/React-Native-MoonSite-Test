import React from 'react';
import { View, Image, Text, StyleSheet, Animated } from 'react-native';

class Loading extends React.Component {

    state = {
        animated: new Animated.Value(0),
    }

    componentDidMount() {
        const { animated } = this.state;
        Animated.loop(
            Animated.timing(animated, {
                toValue: 1,
                duration: 1000,
            })
        )

            .start()
    }
    render() {
        const { animated } = this.state
        return (
            <View style={styles.container}>
                <Text style={styles.textStyle}> טוען את מבחן React-Native </Text>
                <Animated.View style={{
                    marginTop: 50,
                    width: 100,
                    height: 100,
                    zIndex: 99,
                    borderRadius: 50,
                    backgroundColor: '#ccc',
                    transform: [
                        {
                            scale: animated
                        }
                    ]
                }}
                ></Animated.View>
                <Image
                    style={{ width: '100%', height: 100 }}
                    source={require('../images/logo.png')}
                />

                <Text style={styles.createBy}> Create By Shlomi Bitan </Text>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 80
    },

    createBy: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        color: 'white',
        marginTop: 100


    }

})

export default Loading;