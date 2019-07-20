import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class ProfileScreen extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.header}>
                    <Text style={styles.catHeader}>Dog_Lover</Text>
                </View>
                <View style={styles.profileContainer}>
                    <View style={{width: '40%'}}>
                            <Ionicons style={styles.icon} name='ios-contact' size={80} color='brown' />
                            <TouchableOpacity style={styles.btn}><Text style={styles.btnText}>Edit</Text></TouchableOpacity>
                    </View>
                    <View style={{width: '60%', margin: 20}}>
                        <View style={styles.detailContainer}>
                            <Text style={styles.detail}>Sahil Saxena, Male 22</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            {/* <Ionicons style={styles.icon} name='ios-pin' size={20} color='brown' /> */}
                            <Text style={styles.detail}>New Delhi</Text>
                        </View>
                        <View style={styles.detailContainer}>
                            <Text style={styles.detail}>Paw Rating</Text>
                        </View>
                        <View style={styles.rating}>
                            <Ionicons style={styles.star} name='ios-paw' size={25} color='brown' />
                            <Ionicons style={styles.star} name='ios-paw' size={25} color='brown' />
                            <Ionicons style={styles.star} name='ios-paw' size={25} color='brown' />
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#e3e4e6',
        paddingBottom: 50
    },
    header: {
        height: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        color: 'white',
        justifyContent: 'center'
    },
    catHeader: {
        color: 'brown',
        fontSize: 20,
        marginTop: 10
    },
    profileContainer:{
        width: '100%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        padding: 5
    },
    detailContainer:{
        flexDirection: 'row',
        marginTop: 5,
    },
    detail:{
        justifyContent: 'center',
        textAlign: 'center',
        fontSize: 15,
    },
    rating:{
        flexDirection: 'row',
    },
    star: {
        marginRight: 5,
        marginTop: 5
    },
    icon: {
        marginTop: 20,
        marginLeft: 40
    },
    btn: {
        height: 30,
        padding: 5,
        backgroundColor: 'brown',
        justifyContent: 'center',
        textAlignVertical: 'center',
        alignContent: 'center',
        width: '80%',
        borderRadius: 4,
        marginLeft: '10.5%',
        marginTop: 20
    },
    btnText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});