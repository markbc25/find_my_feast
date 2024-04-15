import React from 'react';
import { Text, View, Button } from 'react-native';
import InputText from '../../../src/components/InputText/InputText';
import LineBreakIcon from '../../../src/components/LineBreakIcon/LineBreakIcon';
import ToggleButton from '../../../src/components/ToggleButton/ToggleButton';
import ToggleableSetting from '../../../src/components/ToggleableSetting/ToggleableSetting';
import ScreenTitle from '../../../src/components/ScreenTitle/ScreenTitle';
import SectionTitle from '../../../src/components/SectionTitle/SectionTitle';
import ActionButton from '../../../src/components/ActionButton/ActionButton';
import sessionStorageInstance from '../../storage/SessionStorage/SessionStorage';
import axios from 'axios';


interface ProfileViewProps {
    onLogoutButtonPressed: Function,
}

const ProfileScreen = (props: ProfileViewProps) => {

    async function setVegan(veganBool: boolean) {
        console.log("in set vegan: " + veganBool);
        console.log("vegan email: " + sessionStorageInstance.getEmail());
        //call API w session storage instance
        const body = {
            email: sessionStorageInstance.getEmail(),
            vegan: veganBool,
        }
        try {
            const response = await axios.put("http://10.0.2.2:3000/api/users", body);
        }
        catch (e) {
            console.log("vegan error: " + e);
        }
    }

    async function setVegetarian(vegetarianBool: boolean) {
        //call API w session storage instance
        console.log("vegetarian bool: " + vegetarianBool);
        console.log("vegetarian email: " + sessionStorageInstance.getEmail());
        const body = {
            email: sessionStorageInstance.getEmail(),
            vegetarian: vegetarianBool,
        }
        try {
            const response = await axios.put("http://10.0.2.2:3000/api/users", body);
        }
        catch (e) {
            console.log("vegetarian error: " + e);
        }
    }

    async function getVegan() {
        //call API w session storage instance
        const response = await axios.get("http://10.0.2.2:3000/api/users", {
            params: {
                email: sessionStorageInstance.getEmail(),
            }
        });

        return response.data.vegan;
    }

    async function getVegetarian() {
        //call API w session storage instance
        const response = await axios.get("http://10.0.2.2:3000/api/users", {
            params: {
                email: sessionStorageInstance.getEmail(),
            }
        });

        return response.data.vegetarian;
    }

    return (
        <View
            style={{
                flex: 1,
            }}>



            <View style={{ paddingHorizontal: 30 }}>
                <SectionTitle textValue="Dietary Preferences"></SectionTitle>

                <View style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch',
                    padding: 15,
                    paddingBottom: 60,

                }}>
                    <ToggleableSetting onToggle={setVegetarian} textValue="Vegetarian"></ToggleableSetting>
                    <ToggleableSetting onToggle={setVegan} textValue="Vegan"></ToggleableSetting>
                </View>
            </View>

            {/* <View style={{ flex: 0, width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                {/* todo: send changes to database on press 
                <ActionButton textValue='Confirm'></ActionButton>
            </View> */}


            <View style={{ flex: 0.35, }}>
                <View style={{
                    padding: 20,
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                    flex: 1,

                    //         alignItems: 'center',
                }}>

                    <View style={{ paddingVertical: 30, paddingHorizontal: 30 }}>
                        <ScreenTitle textValue='Profile'></ScreenTitle>
                    </View>



                    <View style={{ paddingHorizontal: 30 }}>
                        <SectionTitle textValue="Dietary Preferences"></SectionTitle>

                        <View style={{
                            justifyContent: 'flex-start',
                            alignSelf: 'stretch',
                            padding: 15,
                            paddingBottom: 60,

                        }}>
                            <ToggleableSetting textValue="Vegetarian"></ToggleableSetting>
                            <ToggleableSetting textValue="Vegan"></ToggleableSetting>
                        </View>
                    </View>

                    <View style={{ flex: 0, width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                        {/* todo: send changes to database on press */}
                        <ActionButton textValue='Confirm'></ActionButton>
                    </View>

                    <View style={{}}>
                        <View style={{
                            padding: 20,
                            alignSelf: 'stretch',
                            justifyContent: 'center',
                        }}>
                            <LineBreakIcon></LineBreakIcon>
                        </View>
                    </View>

                    <View style={{ flex: 0.9, justifyContent: 'flex-end' }}>


                        <View style={{ flex: 0, width: '90%', alignSelf: 'center', justifyContent: 'center' }}>
                            <ActionButton onPress={props.onLogoutButtonPressed} textValue='Logout'></ActionButton>
                        </View>
                    </View>

                </View>
            </View>
        </View>
    );
};

export default ProfileScreen;