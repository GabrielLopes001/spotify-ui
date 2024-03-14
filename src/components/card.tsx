import { Image, Pressable, PressableProps, Text, View } from 'react-native'

export type CardProps = PressableProps & {
  id?: number
  music: string
  artistic: string
  poster: string
}

export function Card({ music, artistic, poster, ...rest }: CardProps) {
  return (
    <Pressable className="flex-1" {...rest}>
      <Image
        source={{ uri: poster }}
        className="h-48 w-36 rounded-3xl"
        alt=""
      />

      <View className="mt-1 ml-1">
        <Text className="font-heading text-sm text-gray-100">{music}</Text>
        <Text className="font-body text-xs text-gray-200">{artistic}</Text>
      </View>
    </Pressable>
  )
}
