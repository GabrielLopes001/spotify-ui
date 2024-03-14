import clsx from 'clsx'
import { Pressable, PressableProps, Text } from 'react-native'

export type FilterProps = PressableProps & {
  filter: string
  selected: boolean
}

export function Filter({ filter, selected, ...rest }: FilterProps) {
  return (
    <Pressable
      className={clsx('', { 'border-b-2 border-b-green-900': selected })}
      {...rest}
    >
      <Text
        className={clsx('font-heading text-gray-300 text-lg', {
          'text-gray-100 ': selected,
        })}
      >
        {filter}
      </Text>
    </Pressable>
  )
}
