import React from 'react';
import {View, Text, StyleSheet, Dimensions, FlatList, Image} from 'react-native'; 
import data from '../json/adopt.json'
export default class PetScreen extends React.Component{
    state ={
        type: this.props.navigation.state.params.type,
        data: data.filter(d => d.type == this.props.navigation.state.params.type),
    }

    keyExtractor = (item, index) => item.id;

    renderItem = ({item}) => (
        <View style={styles.card}>
            <Image loadingIndicatorSource={require('../assets/placeholder.png')} style={styles.img} source={{uri: item.image}} />
            <Text style={styles.type}>Type: {item.type}</Text>
            <Text style={styles.desc}>Description: {item.description}</Text>
        </View>
    );

    renderLoader = () => {
        return <View><Text style={styles.listEnd}>No More Feeds</Text></View>
    }

    render(){
        const {data, type} = this.state;
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>{type}</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={this.keyExtractor}
                    ListFooterComponent={()=> this.renderLoader()}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#e3e4e6'
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
    card: {
        width: Dimensions.get('window').width*94/100,
        margin: Dimensions.get('window').width*3/100,
        backgroundColor: 'white',
        borderRadius: 8,
        color: 'black',
        height: 'auto'
    },
    img: {
        height: 300,
        width: '100%',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    type: {
        padding: Dimensions.get('window').width*3/100,
    },
    desc: {
        padding: Dimensions.get('window').width*3/100,
    },
    listEnd: {
        justifyContent: 'center',
        textAlign: 'center'
    }
})