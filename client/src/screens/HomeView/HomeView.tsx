import React, { FC } from 'react';
import {View} from 'react-native';
import PlaceCard from '../../components/PlaceCard/PlaceCard';

const HomeView: FC = () => {

    return (
    <View style = {{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
       <PlaceCard/>
    </View>
    );

};

export default HomeView;
