import { FlatList } from 'react-native'

import { Filter } from './filter'

type FiltersProps = {
  filters: string[]
  filter: string
  onChange: (value: string) => void
}

export function Filters({ filters, filter, onChange }: FiltersProps) {
  return (
    <FlatList
      data={filters}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <Filter
          filter={item}
          selected={item === filter}
          onPress={() => onChange(item)}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 46 }}
    />
  )
}
