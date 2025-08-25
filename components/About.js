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
                    <Text className="text-gray-800 font-medium mb-3">Nombre:
                        <Text className="text-gray-600"> Diego José Rodríguez Majano</Text>
                    </Text>
                    <Text className="text-gray-800 font-medium mb-3">Carnet:
                        <Text className="text-gray-600"> RM220481</Text>
                    </Text>
                    <Text className="text-gray-800 font-medium mb-3">Correo:
                        <Text className="text-gray-600"> diego.majano14@gmail.com</Text>
                    </Text>
                    <Text className="text-gray-800 font-medium mb-3">Descripción:
                        <Text className="text-gray-600">Estudiante de 4to año de Ingeniería en Ciencias de la Computación, actualmente con habilidades de desarrollo fullstack con diferentes tecnologías, en FrontEnd React con JS y TS, VueJS, en BackEnd ExpressJs, Laravel y .NET, en bases de datos sólidos conocimientos en SQL y NoSQL, con MySQL, mongoDB y Firebase. Actualemnte formo parte de equipo de desarrollo para webapps y requerimientos que sean necesarios, y proximamente participare en el desarrollo de una app implementando React Native.
                        </Text>
                    </Text>
                </View>

                <Text className="text-gray-700 mt-4 leading-relaxed">
                    Descripción de la app: Ejercicio de clase con
                    <Text className="font-semibold text-purple-600"> React Navigation</Text> +
                    <Text className="font-semibold text-purple-600"> AsyncStorage</Text>.
                    Como extra, integré <Text className="font-semibold text-purple-600">NativeWind</Text> para usar estilos con TailwindCSS.
                </Text>
            </View>
        </View>

    );
}
