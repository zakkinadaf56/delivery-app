import { View, Text, TextInput } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Image } from 'react-native-web';
import { Image } from "react-native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { ScrollView } from "react-native";
import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <SafeAreaView className="bg-white pt-5">

        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <Text className="font-bold text-xl">
              Current Location
              <ChevronDownIcon size={20} color="#00CCBB" />
            </Text>
          </View>
          <UserIcon size={35} color="#00CC88"></UserIcon>
        </View>
        {/* Search Box */}
        <View className="flex-row items-center space-x-2 pb-2 mx-4">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
            <MagnifyingGlassIcon color="gray"/>
            <TextInput
              placeholder="Restaurents and cuisines"
              keyboardType="default"
            />
          </View>
          <AdjustmentsHorizontalIcon  color="#00BBCC"/>
         </View>
         {/* Scroll View */}
         <ScrollView className="bg-gray-100"
         contentContainerStyle={{
          paddingBottom:100,
         }}
         >
          {/* Categories */}
          <Categories/>

          {/* Features rows */}
          <FeaturedRow
          id="1"
          title="Featured"
          description="Paid placement from our partners"
          />
          
          <FeaturedRow
          id="12"
          title="Tasty Discounts"
          description="Paid placement from our partners"
          />
          
          <FeaturedRow
          id="13"
          title="Offers near you!"
          description="Paid placement from our partners"
          />
         
         </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
