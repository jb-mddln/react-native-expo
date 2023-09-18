import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
  const [emoji] = useState([
    require('../assets/emojis/1f60d.svg'),
    require('../assets/emojis/1f600.svg'),
    require('../assets/emojis/1f602.svg')
  ]);

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={Platform.OS === 'web'}
      data={emoji}
      contentContainerStyle={styles.listContainer}
      renderItem={({ item, index }) => {
        return (
          <Pressable
            onPress={() => {
              onSelect(item);
              onCloseModal();
            }}>
            <Image source={item} key={index} style={styles.image} />
          </Pressable>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  listContainer: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
  },
});