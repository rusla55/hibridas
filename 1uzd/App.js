import { useRef } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';

export default function App() {
    const cacheRef = useRef({
        toggle1: false,
        toggle2: false,
        toggle3: false,
        toggle4: false
    });

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    const ref3 = useRef(null);
    const ref4 = useRef(null);

    let changeColor = (boxRef, toggle) => {
        boxRef.current.setNativeProps({
            style: { backgroundColor: toggle ? "#009900" : "#ffff66" }
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.leftContainer}>
                <View style={styles.buttonContainer}>
                    <View style={styles.buttonSpacing} />
                    <Button title="Button 1" color="#009900" onPress={() => {
                        changeColor(ref1, cacheRef.current.toggle1 = !cacheRef.current.toggle1);
                    }}
                    />
                    <View style={styles.buttonSpacing} />
                    <Button title="Button 2" color="#009900" onPress={() => {
                        changeColor(ref2, cacheRef.current.toggle2 = !cacheRef.current.toggle2);
                    }}
                    />
                    <View style={styles.buttonSpacing} />
                    <Button title="Button 3" color="#009900" onPress={() => {
                        changeColor(ref3, cacheRef.current.toggle3 = !cacheRef.current.toggle3);
                    }}
                    />
                    <View style={styles.buttonSpacing} />
                    <Button title="Button 4" color="#009900" onPress={() => {
                        changeColor(ref4, cacheRef.current.toggle4 = !cacheRef.current.toggle4);
                    }}
                    />
                    <View style={styles.buttonSpacing} />
                </View>
            </View>
            <View style={styles.rightContainer}>
                <View style={styles.boxContainer}>
                    <View style={styles.boxSpacing} />
                    <View ref={ref1} style={styles.boxNormal} />
                    <Text style={styles.text}>BOX 1</Text>
                    <View style={styles.boxSpacing} />
                    <View ref={ref2} style={styles.boxNormal} />
                    <Text style={styles.text}>BOX 2</Text>
                    <View style={styles.boxSpacing} />
                    <View ref={ref3} style={styles.boxNormal} />
                    <Text style={styles.text}>BOX 3</Text>
                    <View style={styles.boxSpacing} />
                    <View ref={ref4} style={styles.boxNormal} />
                    <Text style={styles.text}>BOX 4</Text>
                </View>
            </View>
        </View>
    )
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    leftContainer: {
        flex: 1,
        backgroundColor: '#ff6600',
    },
    rightContainer: {
        flex: 1,
        backgroundColor: '#ffb380'
    },
    buttonContainer: {
        justifyContent: 'center',
        marginHorizontal: 20
    },
    boxContainer: {
        justifyContent: 'center',
        marginVertical: -50
    },
    buttonSpacing: {
        height: 125
    },
    boxSpacing: {
        height: 150
    },
    boxNormal: {
        width: 100,
        height: 100,
        marginHorizontal: 40,
        marginVertical: 0,
        backgroundColor: "#ffff66",
    },
    text: {
        width: 50,
        marginHorizontal: 70,
        marginVertical: -60,
        color: "black",
        fontSize: 15
    }
}) 