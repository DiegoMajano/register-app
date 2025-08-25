import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react'
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';

const STORAGE_KEY = "@registrations";

export default function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    try {
      setLoading(true);
      const raw = await AsyncStorage.getItem(STORAGE_KEY);
      setData(raw ? JSON.parse(raw) : []);
    } catch (e) {
      Alert.alert("Error", "No se pudo cargar la lista.");
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      load();
    }, [])
  );

  const renderItem = ({ item }) => (
  <View className="flex-row items-center bg-gray-300 rounded-full p-4 mb-4">
    <Image 
      source={{ uri: item.avatar }} 
      className="w-16 h-16 rounded-full mr-4 border-2 border-purple-300" 
    />
    <View className="flex-1">
      <Text className="font-extrabold text-purple-800 text-lg">{item.name}</Text>
      <Text className="text-blue-900 italic">{item.phrase}</Text>
    </View>
  </View>
);

return (
  <View className="flex-1 bg-gradient-to-b from-purple-50 to-pink-100 p-6">
    <Text className="text-3xl font-extrabold text-purple-700 mb-6 text-center">
      Registros
    </Text>
    
    {loading ? (
      <ActivityIndicator size="large" color="#9333ea" />
    ) : data.length === 0 ? (
      <Text className="text-pink-700 text-center mt-6 text-lg">
        No hay registros aún. Ve a <Text className="font-bold">“Registro”</Text>.
      </Text>
    ) : (
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    )}
  </View>
  );
}
