import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet, Image,Platform } from 'react-native';
import ColorPicker from '../components/ColorPicker';

export default function HomeScreen({ navigation }) {
    const [color, setColor] = useState('#111827');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bat-Signal</Text>

            <Pressable
                android_ripple={{ color: '#1f2937', borderless: false }}
                style={[styles.signal, { backgroundColor: color }]}
                onPress={() => navigation.navigate('Form')}
            >
                <Image source={require('../../assets/bat-logo.png')} style={styles.batImage} resizeMode="contain" />
            </Pressable>

            <Pressable
                style={({ pressed }) => [
                    styles.activateBtn,
                    { opacity: pressed ? 0.7 : 1 }
                ]}
                onPress={() => navigation.navigate('Form')}
            >
                <Text style={styles.activateText}>Activate Bat-Signal</Text>
            </Pressable>

            <Text style={styles.customizeText}>Customize signal color:</Text>
            <ColorPicker setColor={setColor} selected={color} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, alignItems: 'center', paddingTop: 40, backgroundColor: '#0b1220' },
    title: { fontSize: 28, color: '#fff', fontWeight: '700', marginBottom: 20 },
    signal: {
        width: 220,
        height: 220,
        borderRadius: 110,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8,
        shadowColor: '#000',
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 6 },
        shadowRadius: 6,
        ...(Platform.OS === 'web' && { boxShadow: '0px 6px 10px rgba(0,0,0,0.5)' })
    },
    batImage: { width: 140, height: 140 },
    activateBtn: { marginTop: 18, backgroundColor: '#111827', paddingVertical: 12, paddingHorizontal: 28, borderRadius: 8 },
    activateText: { color: '#fff', fontWeight: '600' },
    customizeText: { color: '#9aa4b2', marginTop: 26, marginBottom: 10 },
});
