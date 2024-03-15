import { Text, View } from 'react-native'

type HighCardProps = {
  title: string
  music: string
  artistic: string
}

export function HighCard({ title, music, artistic }: HighCardProps) {
  return (
    <View className="bg-green-900 rounded-3xl p-5 mt-5">
      <Text className="font-heading text-xs text-white" numberOfLines={1}>
        {title}
      </Text>
      <Text className="font-heading text-2xl text-white">{music}</Text>
      <Text className="font-heading text-white">{artistic}</Text>
    </View>
  )
}
