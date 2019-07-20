import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class AdoptScreen extends React.Component {
    render() {
        const x = [1,2,3,4,5,6,7,8,9,1,3,4]
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Adopt</Text><Ionicons name='ios-paw' size={25} color='brown' />
                </View>
                <ScrollView>
                    <View style={styles.cardContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet', {type: 'Dogs'})}  style={styles.card}>
                            <Image style={styles.img} source={{uri: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}}/>
                            <Text style={styles.cardText}>Dogs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Pet', {type: 'Cats'})} style={styles.card}>
                            <Image style={styles.img} source={{uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_Viv7n0lQhw6citH8--qoiq2tsBjDV_m0lOLw-5pTqR2PdZPuwg"}}/>
                            <Text style={styles.cardText}>Cats</Text>
                        </TouchableOpacity>
                    </View>
                    <Text></Text>
                    {x.map((x, y) =>(<TouchableOpacity key={y} style={styles.listContainer}>

                    </TouchableOpacity>))}
                </ScrollView>
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
        // paddingBottom: 50
    },
    header: {
        height: 50,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.5,
        width: '100%',
        backgroundColor: 'white',
        paddingTop: 10,
        justifyContent: 'center',
        flexDirection: 'row',
        color: 'white',
    },
    headerTitle: {
        fontSize: 20,
        marginRight: 10,
        color: 'brown',
    },
    cardContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: Dimensions.get('window').width,
    },
    listContainer:{
        width: Dimensions.get('window').width*90/100,
        marginLeft: Dimensions.get('window').width*5/100,
        height: 80,
        marginTop: 10,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    card: {
        width: Dimensions.get('window').width * 36 / 100,
        marginLeft: Dimensions.get('window').width * 9 / 100,
        marginTop: Dimensions.get('window').width * 7 / 100,
        backgroundColor: 'white',
        borderRadius: 8,
        color: 'black',
        height: Dimensions.get('window').width * 36 / 100
    },
    img: {
        height: Dimensions.get('window').width * 26 / 100,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardText: {
        fontSize: 20,
        textAlign: 'center'
    }
})