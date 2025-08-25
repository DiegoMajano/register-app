import React, { useState } from 'react'
import { KeyboardAvoidingView, Text, View, TextInput, TouchableOpacity, ActivityIndicator, Platform, Image, Alert } from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";

const STORAGE_KEY = "@registrations";

export default function Register() {
    const [name, setName] = useState("");
    const [avatar, setAvatar] = useState("");
    const [phrase, setPhrase] = useState("");
    const [saving, setSaving] = useState(false);

    const onSave = async () => {
        if (!name.trim() || !avatar.trim() || !phrase.trim()) {
            Alert.alert("Campos incompletos", "Llena nombre, avatar y frase.");
            return;
        }
        try {
            setSaving(true);
            const raw = await AsyncStorage.getItem(STORAGE_KEY);
            const list = raw ? JSON.parse(raw) : [];
            const newItem = {
                id: Date.now().toString(),
                name: name.trim(),
                avatar: avatar.trim(),
                phrase: phrase.trim(),
            };
            const updated = [newItem, ...list];
            await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            setName("");
            setAvatar("");
            setPhrase("");
            Alert.alert("Guardado", "Registro agregado correctamente.");
        } catch (e) {
            Alert.alert("Error", "No se pudo guardar.");
            console.error(e);
        } finally {
            setSaving(false);
        }
    };

    return (
        <KeyboardAvoidingView
            className="flex-1 bg-gradient-to-b from-purple-50 to-white-100 p-6"
            behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
            <Text className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
                Registro
            </Text>

            <View className="bg-white rounded-3xl p-6 shadow-2xl border border-gray-200">
                <Text className="text-purple-700 mb-2 font-semibold">Nombre</Text>
                <TextInput
                    placeholder="Ej: Diego Majano"
                    value={name}
                    onChangeText={setName}
                    className="bg-purple-50 rounded-full px-4 py-3 mb-4 border border-purple-200"
                />

                <Text className="text-purple-700 mb-2 font-semibold">URL de avatar</Text>
                <TextInput
                    placeholder="https://..."
                    value={avatar}
                    onChangeText={setAvatar}
                    className="bg-purple-50 rounded-full px-4 py-3 mb-4 border border-purple-200"
                />

                {avatar ? (
                    <Image
                        source={{ uri: avatar }}
                        className="w-full h-44 rounded-3xl mb-4 border-2 border-purple-300"
                        resizeMode="cover"
                    />
                ) : null}

                <Text className="text-purple-700 mb-2 font-semibold">Frase personal</Text>
                <TextInput
                    placeholder="Tu frase favorita"
                    value={phrase}
                    onChangeText={setPhrase}
                    className="bg-purple-50 rounded-2xl px-4 py-3 h-24 mb-4 border border-purple-200"
                    multiline
                />

                <TouchableOpacity
                    onPress={onSave}
                    disabled={saving}
                    className="bg-purple-800 py-4 rounded-full items-center shadow-md"
                >
                    {saving ? (
                        <ActivityIndicator color="white" />
                    ) : (
                        <Text className="text-white font-bold text-lg">Guardar</Text>
                    )}
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>

    );
}
