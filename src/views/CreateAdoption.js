import React from 'react';
import { Text, View, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image} from 'react-native';
import Select from '../components/Select';
import ImagePicker from 'react-native-image-picker';
import Permissions from 'react-native-permissions'

export default class CreateAdoptionScreen extends React.Component {
    state = {
        typeVisible: false,
        breedVisible: false,
        genderVisible: false,
        type: '',
        breed: '',
        gender: '',
        age: '',
        weight: '',
        height: '',
        description: '',
        image: '',
        imageName: ''
    }
    selectOption = (data) => {
        this.setState({
            [data.visibleKey]: data.visible,
            [data.selectKey]: data.selected
        })
    }

    selectFile = async () => {
        let cameraP;
        let cameraPR
        await Permissions.check('photo').then(response => {
            cameraP = response
        })
        await Permissions.check('camera').then(response => {
            cameraPR = response
        })
        console.log(cameraP, cameraPR)
        if (cameraPR === 'authorized' && cameraP === 'authorized') {
        } else {
        }
        await Permissions.request('photo')
        await Permissions.request('camera')
        const options = {
            title: 'Select Avatar',
            customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
            storageOptions: {
              skipBackup: true,
              path: 'images',
            },
          };
          ImagePicker.showImagePicker(options, (response) => {
          
            if (response.didCancel) {
              console.log('User cancelled image picker');
            } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
              console.log('User tapped custom button: ', response.customButton);
            } else {
              this.setState({
                image: 'data:image/jpeg;base64,'+response.data,
                imageName: response.fileName
              });
            }
          });
    }

    createAdopt = () => {
        const {type, typeVisible, breed, breedVisible, gender, genderVisible, age, height, weight, image, imageName} = this.state;
        console.log(this.state)
    }
    render() {
        const {type, typeVisible, breed, breedVisible, imageName, gender, genderVisible, age, height, weight, number, city, state, address} = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.catHeader}>Create Adoption</Text>
                </View>
                <ScrollView style={styles.bodyContainer}>
                    <Select heading={true} data={['Dog', 'Cat', 'Hamster']} type="Type" visibleKey="typeVisible" selectKey="type" selected={type} visible={typeVisible} selectOption={this.selectOption}/>
                    <Select heading={true} data={['Mixed', 'Pure']} type="Breed" visibleKey="breedVisible" selectKey="breed" selected={breed} visible={breedVisible} selectOption={this.selectOption}/>
                    <Select heading={true} data={['Male', 'Female', 'Other']}  visibleKey="genderVisible" selectKey="gender" selected={gender} type="Gender" visible={genderVisible} selectOption={this.selectOption}/>
                    <View>
                        <Text style={styles.selectLabel}>Age</Text>
                        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(age) => this.setState({age})} value={age} placeholder="Age (in months)" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>Weight</Text>
                        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(weight) => this.setState({weight})} value={weight} placeholder="Weight (in Kg)" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>Height</Text>
                        <TextInput style={styles.input} keyboardType='numeric' onChangeText={(height) => this.setState({height})} value={height} placeholder="Height (in Inches)" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>Contact Number</Text>
                        <TextInput style={styles.input} textContentType='telephoneNumber' keyboardType='numeric' onChangeText={(number) => this.setState({number})} value={number} placeholder="Contact Number" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>City</Text>
                        <TextInput style={styles.input} textContentType='addressCity' onChangeText={(city) => this.setState({city})} value={city} placeholder="City" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>State</Text>
                        <TextInput style={styles.input} textContentType='addressState' onChangeText={(state) => this.setState({state})} value={state} placeholder="State" />
                    </View>
                    <View >
                        <Text style={styles.selectLabel}>Full Address</Text>
                        <TextInput style={styles.textareaInput} textContentType='fullStreetAddress' editable={true} maxLength={40} multiline={true} numberOfLines={3} onChangeText={(address) => this.setState({address})} value={address} placeholder="Address" />
                    </View>
                    <View>
                        <Text style={styles.selectLabel}>Image</Text>
                        <TouchableOpacity onPress={this.selectFile} style={styles.input}>
                            <Text style={{color: 'grey'}}>{imageName !== '' ? imageName : "Select Image"}</Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={this.createAdopt} style={styles.btn}>
                        <Text style={styles.btnText}>Create</Text>
                    </TouchableOpacity>
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
        paddingBottom: 10
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
        fontSize: 20,
        color: 'brown',
        marginTop: 10
    },
    bodyContainer:{
        width: '100%'
    },
    input: {
        width: '80%',
        flexDirection: 'row',
        marginLeft: '10%',
        marginTop: 5,
        height: 25,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    textareaInput:{
        width: '80%',
        height: 50,
        marginLeft: '10%',
        marginTop: 5,
        borderWidth: 1,
        borderColor: 'grey'
    },
    selectLabel:{
        marginTop: 20,
        marginLeft: '10%',
    },
    btn: {
        height: 40,
        padding: 10,
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