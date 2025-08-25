import React from 'react'
import { Text, View } from 'react-native';

export default function About() {
    return (
        <View className="flex-1 bg-gradient-to-b from-purple-50 to-white p-6">
            <Text className="text-3xl font-extrabold text-purple-800 mb-6 text-center">
                Acerca de la App
            </Text>

            <View className="bg-white rounded-3xl p-6 shadow-lg border border-gray-200">
                <Text className="text-xl font-semibold text-purple-700 mb-3">Desarrollador</Text>

                <View className="space-y-1">
                    <Text className="text-gray-800 font-medium">Nombre:
                        <Text className="text-gray-600"> Diego José Rodríguez Majano</Text>
                    </Text>
                    <Text className="text-gray-800 font-medium">Carnet:
                        <Text className="text-gray-600"> RM220481</Text>
                    </Text>
                </View>

                <Text className="text-gray-700 mt-4 leading-relaxed">
                    Descripción: Ejercicio de clase con
                    <Text className="font-semibold text-purple-600"> React Navigation</Text> +
                    <Text className="font-semibold text-purple-600"> AsyncStorage</Text>.
                    Como extra, integré <Text className="font-semibold text-purple-600">NativeWind</Text> para usar estilos con TailwindCSS.
                </Text>
            </View>
        </View>

    );
}
