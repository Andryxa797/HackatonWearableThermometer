import { Button, Toast } from '@ant-design/react-native';
import * as React from 'react';
import { View, Text } from "react-native"

const MeasuringNow = () => {
    return (
        <View>
            <Button  onPress={() => Toast.info('This is a toast tips')}>Начать измерение</Button>
        </View>
    )
}

export { MeasuringNow }