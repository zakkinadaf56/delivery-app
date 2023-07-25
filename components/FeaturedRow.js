import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon,y } from 'react-native-heroicons/outline'
import RestaurentCard from './RestaurentCard'

const FeaturedRow = ({id,title,description}) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00CCBB"/>
      </View>
      <Text className="text-xs text-gray-500 px-4">{description}</Text>

      <ScrollView 
      horizontal
      contentContainerStyle={{
        paddingHorizontal:15,
      }}
      showsHorizontalScrollIndicator={false}
      className="pt-4"
      >
        {/* Restuarent Cards */}
        <RestaurentCard
            id={1}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo sushi"
            rating={4.5}
            genre="Japanese"
            address="123 laxman street"
            short_description="test description"
            dishes={[]}
            long={200}
            lat={0}
        />

        <RestaurentCard
            id={1}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo sushi"
            rating={4.5}
            genre="Japanese"
            address="123 laxman street"
            short_description="test description"
            dishes={[]}
            long={200}
            lat={0}
        />

        <RestaurentCard
            id={1}
            imgUrl="https://links.papareact.com/gn7"
            title="Yo sushi"
            rating={4.5}
            genre="Japanese"
            address="123 laxman street"
            short_description="test description"
            dishes={[]}
            long={200}
            lat={0}
        />
      </ScrollView>
    </View>
  )
}

export default FeaturedRow