import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import { Cards } from '@/components/cards'
import { Filters } from '@/components/filters'
import { CARD } from '@/utils/card-music'
import { FILTER } from '@/utils/filter'

export default function Home() {
  const [filters, setFilters] = useState(FILTER[0])

  return (
    <View className="flex-1 bg-gray-900 px-7">
      <View className="w-full mt-16">
        <Pressable className="flex-row justify-between">
          <MaterialIcons name="search" size={33} color="white" />
          <Image source={require('@/assets/logo.png')} alt="" />
          <MaterialIcons name="menu" size={33} color="white" />
        </Pressable>
      </View>

      <View className="bg-green-900 rounded-3xl p-5 mt-5">
        <Text className="font-heading text-xs text-white">New Album</Text>
        <Text className="font-heading text-2xl text-white">
          Happier Than Ever
        </Text>
        <Text className="font-heading text-white">Billie Eilish</Text>
      </View>

      <View className=" mt-10">
        <Filters filters={FILTER} filter={filters} onChange={setFilters} />
      </View>

      <View className="flex-1 mt-6">
        <Cards cards={CARD} />
      </View>

      <View className="flex-1 mt-9">
        <View className="justify-between flex-row">
          <Text className="text-gray-100 font-heading text-xl">Playlist</Text>
          <Text className="text-gray-200 font-body text-xs">See More</Text>
        </View>

        <ScrollView className="mt-6">
          <Text className="text-gray-100 font-heading text-base">
            As it was
          </Text>
          <Text className="text-gray-200 font-body text-xs">Harry Style</Text>

          <Text className="text-gray-200 font-body text-xs">5:45</Text>
        </ScrollView>
      </View>
    </View>
  )
}
