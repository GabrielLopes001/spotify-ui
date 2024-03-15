import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'

import { Cards } from '@/components/cards'
import { Filters } from '@/components/filters'
import { HighCard } from '@/components/high-card'
import { CARD } from '@/utils/card-music'
import { FILTER } from '@/utils/filter'
import { PLAYLIST } from '@/utils/playlist'

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

      <HighCard
        title="New Album"
        music="Happy Tha Ever"
        artistic="Billie Eillish"
      />

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

        <ScrollView
          className="mt-6"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 58,
          }}
        >
          {PLAYLIST.map((item, index) => {
            return (
              <View
                key={index}
                className="flex-row justify-between items-center gap-6 mb-5"
              >
                <MaterialIcons name="play-circle" color="gray" size={25} />
                <View className="flex-1">
                  <Text className="text-gray-100 font-heading text-base">
                    {item.music}
                  </Text>
                  <Text className="text-gray-200 font-body text-xs">
                    {item.artistic}
                  </Text>
                </View>
                <Text className="text-gray-200 font-body text-xs">
                  {item.duration}
                </Text>
                <MaterialIcons name="favorite" color="gray" size={25} />
              </View>
            )
          })}
        </ScrollView>
      </View>
    </View>
  )
}
