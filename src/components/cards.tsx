import { FlatList } from 'react-native'

import { Card, CardProps } from '@/components/card'

type CardsProps = {
  cards: CardProps[]
}

export function Cards({ cards }: CardsProps) {
  return (
    <FlatList
      data={cards}
      keyExtractor={(card) => card.id}
      renderItem={({ item }) => (
        <Card
          music={item.music}
          artistic={item.artistic}
          poster={item.poster}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ gap: 14 }}
    />
  )
}
