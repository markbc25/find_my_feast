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
    onActionButtonClicked: Function,
}

const ProfileScreen = (props: ProfileViewProps) => {

    async function setVegan(veganBool: boolean) {
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


            <View style={{ alignSelf: 'stretch', paddingHorizontal: 30 }}>
                <ScreenTitle textValue='Profile'></ScreenTitle>
            </View>



            <View style={{ justifyContent: 'center', alignSelf: 'stretch', paddingHorizontal: 30, gap: 10 }}>
                <SectionTitle textValue="Dietary Preferences"></SectionTitle>

                <View style={{
                    justifyContent: 'flex-start',
                    alignSelf: 'stretch',
                    padding: 15,
                    paddingBottom: 60,

                }}>
                    <ToggleableSetting initialValue={getVegetarian} onToggle={setVegetarian} textValue="Vegetarian"></ToggleableSetting>
                    <ToggleableSetting initialValue={getVegan} onToggle={setVegan} textValue="Vegan"></ToggleableSetting>
                </View>

                <View>
                <ActionButton onPress={props.onActionButtonClicked} textValue='Confirm'></ActionButton>
                </View>

            </View>


            <View style={{
                padding: 15,
                alignSelf: 'stretch',
                justifyContent: 'center',
            }}>
                <LineBreakIcon></LineBreakIcon>
            </View>


            <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <View style={{ flex: 0, width: '90%', alignSelf: 'center', justifyContent: 'center', paddingBottom: 40 }}>
                    <ActionButton onPress={props.onLogoutButtonPressed} textValue='Logout'></ActionButton>
                </View>
            </View>

        </View>
    );
};

export default ProfileScreen;