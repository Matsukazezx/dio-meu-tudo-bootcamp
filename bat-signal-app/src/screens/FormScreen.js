import React, { useState, useEffect } from 'react';
import {
    View, Text, TextInput, TouchableOpacity, StyleSheet,
    Alert, ScrollView, KeyboardAvoidingView, Platform,
    Pressable, Keyboard
} from 'react-native';


export default function FormScreen({ navigation }) {
    const [form, setForm] = useState({ name: '', phone: '', location: '', observation: '' });
    const [focused, setFocused] = useState(null);

    useEffect(() => {
        const unsubscribe = navigation.addListener('blur', () => {
            Keyboard.dismiss();
        });
        return unsubscribe;
    }, [navigation]);

    function handleSend() {
        if (!form.name.trim() || !form.phone.trim()) {
            Alert.alert('Incomplete', 'Please provide at least name and phone.');
            return;
        }

        Keyboard.dismiss();
        Alert.alert('Sent', `Bat-Signal request sent for ${form.name}!`);
        setForm({ name: '', phone: '', location: '', observation: '' });
        navigation.goBack();
    }

    const inputStyle = (field) => [
        styles.input,
        focused === field && { borderColor: '#10b981', borderWidth: 2 }
    ];

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#0b1220' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <Pressable style={{ flex: 1 }} onPress={Keyboard.dismiss}>
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title}>Request Assistance</Text>

                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#9aa4b2"
                        style={inputStyle('name')}
                        value={form.name}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        returnKeyType="next"
                        onChangeText={(t) => setForm({ ...form, name: t })}
                    />
                    <TextInput
                        placeholder="Phone"
                        placeholderTextColor="#9aa4b2"
                        style={inputStyle('phone')}
                        keyboardType="phone-pad"
                        value={form.phone}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused(null)}
                        returnKeyType="next"
                        onChangeText={(t) => setForm({ ...form, phone: t })}
                    />
                    <TextInput
                        placeholder="Location"
                        placeholderTextColor="#9aa4b2"
                        style={inputStyle('location')}
                        value={form.location}
                        onFocus={() => setFocused('location')}
                        onBlur={() => setFocused(null)}
                        onChangeText={(t) => setForm({ ...form, location: t })}
                    />
                    <TextInput
                        placeholder="Observation"
                        placeholderTextColor="#9aa4b2"
                        style={[inputStyle('observation'), { height: 110 }]}
                        multiline
                        value={form.observation}
                        onFocus={() => setFocused('observation')}
                        onBlur={() => setFocused(null)}
                        onChangeText={(t) => setForm({ ...form, observation: t })}
                    />

                    <TouchableOpacity style={styles.sendBtn} onPress={handleSend}>
                        <Text style={styles.sendText}>Send</Text>
                    </TouchableOpacity>
                </ScrollView>
            </Pressable>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flexGrow: 1, padding: 20, backgroundColor: '#0b1220' },
    title: { fontSize: 22, color: '#fff', marginBottom: 16, textAlign: 'center' },
    input: {
        backgroundColor: '#0f1724',
        color: '#fff',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#1f2a37'
    },
    sendBtn: { backgroundColor: '#10b981', padding: 14, borderRadius: 8, alignItems: 'center', marginTop: 6 },
    sendText: { color: '#fff', fontWeight: '700' },
});
