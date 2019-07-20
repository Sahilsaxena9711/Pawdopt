import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class Select extends React.PureComponent {
    render() {
        const { visible, selected, type, data, selectKey, visibleKey, heading } = this.props;
        console.log(visible, selected, type, data, selectKey, visibleKey)
        return (
            <React.Fragment>
                {heading && <Text style={styles.selectLabel}>{type}</Text>}
                <TouchableOpacity style={styles.button} onPress={this.props.selectOption.bind(this, {"visibleKey":visibleKey, "selectKey":selectKey, "selected":selected, "visible":true})}>
                    <Text style={styles.input}>{selected === "" ? "Select Type" : selected}</Text>
                    <Ionicons name='ios-arrow-down' size={15}/>
                </TouchableOpacity>
                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={visible}
                    presentationStyle='overFullScreen'
                    onRequestClose={() => {
                        this.props.selectClose()
                    }}
                >
                    <SafeAreaView>
                        <View style={{ marginTop: 22 }}>
                            <ScrollView>
                                {data.map((d, k) => (
                                    <TouchableOpacity style={styles.option} onPress={this.props.selectOption.bind(this, {"visibleKey":visibleKey, "selectKey":selectKey, "selected":d, "visible":false})} key={k}>
                                        <Text>{d}</Text>
                                        {selected === d && <Ionicons name='ios-checkmark' size={25} color='green' />}
                                    </TouchableOpacity>))}
                            </ScrollView>
                        </View>
                    </SafeAreaView>
                </Modal>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    option: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'space-between'
    },
    input: {
        width: '95%',
        color: 'grey'
    },
    button: {
        width: '80%',
        marginLeft: '10%',
        flexDirection: 'row',
        marginTop: 5,
        height: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    selectLabel:{
        marginTop: 20,
        marginLeft: '10%',
    }
})