import { Button, Toast, WhiteSpace, WingBlank } from '@ant-design/react-native';
import * as React from 'react';
import { StyleSheet, View, Text, Image, ActivityIndicator } from "react-native"
import Preloader from './../../assets/preloader.gif'
import { SvgXml } from "react-native-svg"
import moment from 'moment-timezone';


const getRandomArbitrary = (min, max) => (Math.random() * (max - min) + min).toFixed(1)
const MeasuringNow = () => {
    const [visiblePreloader, setVisiblePreloader] = React.useState(false)
    const [tempValue, setTempValue] = React.useState('__')
    const [dateValue, setDateValue] = React.useState('')
    const [timeValue, setTimeValue] = React.useState('')


    const startMesuaring = () => {
        setVisiblePreloader(true)
        setDateValue('')
        setTimeValue('')
        setTimeout(() => {
            let date = new Date()
            setVisiblePreloader(false)
            setTempValue(getRandomArbitrary(35.5, 40))
            setDateValue(moment(date).tz("Asia/Novosibirsk").format('YYYY/MM/DD'))
            setTimeValue(moment(date).tz("Asia/Novosibirsk").format('HH:mm'))
        }, 2000)
    }

    return (
        <View style={styles.container}>
            <WhiteSpace size="xl" />
            <WingBlank size="md">
                <Button onPress={startMesuaring}>Начать измерение</Button>
            </WingBlank>
            <View style={styles.temp}>
                {visiblePreloader ? <ActivityIndicator color="tomato" size="large" /> :
                    <Text style={styles.tempValue}>{tempValue}</Text>}
                <Text style={styles.time}>{dateValue}</Text>
                <Text style={styles.time}>{timeValue}</Text>
            </View>


        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 50,
    },
    temp: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tempValue: {
        fontSize: 80,
        color: 'tomato'
    },
    time: {
        fontSize: 20,
        color: 'tomato'
    }
});

export { MeasuringNow }