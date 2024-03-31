import React, { FC } from 'react';
import {Text, View, Button, Image} from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import CustomSliderLabel from '../CustomSliderLabel/CustomSliderLabel';


interface TwoSidedSliderProps {}

const TwoSidedSlider: FC<TwoSidedSliderProps> = () => {
    const [sliderOneChanging, setSliderOneChanging] = React.useState(false);
    const [sliderOneValue, setSliderOneValue] = React.useState(0);
    const [multiSliderValue, setMultiSliderValue] = React.useState([10, 30]);
    const [
            nonCollidingMultiSliderValue,
            setNonCollidingMultiSliderValue,
    ] = React.useState([0, 100]);

    const sliderOneValuesChangeStart = () => setSliderOneChanging(true);

    const sliderOneValueChange = (values) => setSliderOneValue(values);

    sliderOneValuesChangeFinish = () => setSliderOneChanging(false); 

    multiSliderValuesChange = values => setMultiSliderValue(values);

    nonCollidingMultiSliderValuesChange = values =>
    setNonCollidingMultiSliderValue(values);

    return (
        <View>
            <MultiSlider
                values={[sliderOneValue]}
                sliderLength={300}
                onValuesChange={sliderOneValueChange}
                min={1}
                max={30}
                step={1}
                allowOverlap
                snapped
                enableLabel
                trackStyle={{
                      height: 2.5,
                      backgroundColor: '#402b1f',
                }}
                selectedStyle={{
                  backgroundColor: '#402b1f',
                }}
                unselectedStyle={{
                  backgroundColor: '#917b6e',
                }}
                customMarker={() => {
                    return(
                        <Image
                             source={
                                require('./ruby.png')
                             }
                             style = {{width: 15, height: 15, marginTop: 3,}}
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
