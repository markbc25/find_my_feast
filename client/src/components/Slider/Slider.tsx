import React, { FC } from 'react';
import {Text, View, Button, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomSliderLabel from '../CustomSliderLabel/CustomSliderLabel';


interface TwoSidedSliderProps {}

const TwoSidedSlider: FC<TwoSidedSliderProps> = () => {
    const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
    const [sliderOneValue, setSliderOneValue] = React.useState([5]);
    const [multiSliderValue, setMultiSliderValue] = React.useState([0, 50]);
    const [
            nonCollidingMultiSliderValue,
            setNonCollidingMultiSliderValue,
    ] = React.useState([0, 100]);

    const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

    const sliderOneValuesChange = values => setSliderOneValue(values);

    sliderOneValuesChangeFinish = () => setSliderOneChanging(false);

    multiSliderValuesChange = values => setMultiSliderValue(values);

    nonCollidingMultiSliderValuesChange = values =>
    setNonCollidingMultiSliderValue(values);

    return (
        <View>
            <MultiSlider
                values={[multiSliderValue[0]]}
                sliderLength={250}
                onValuesChange={multiSliderValuesChange}
                min={1}
                max={50}
                step={1}
                allowOverlap
                snapped
                enableLabel
                trackStyle={{
                      height: 4,
                      backgroundColor: '#402b1f',
                }}
                selectedStyle={{
                  backgroundColor: '#402b1f',
                }}
                unselectedStyle={{
                  backgroundColor: '#402b1f',
                }}
                customMarker={() => {
                    return(
                        <Image
                             source={
                                require('./ruby.png')
                             }
                             style = {{width: 20, height: 20, paddingTop: 30,}}
                             resizeMode="contain"
                        />
                    );
                }}


                customLabel={CustomSliderLabel}
            />
        </View>
    );
};

export default TwoSidedSlider;
