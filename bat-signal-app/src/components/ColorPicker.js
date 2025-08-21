import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';

export default function ColorPicker({ setColor, selected }) {
  const colors = ['#111827', '#f59e0b', '#ef4444', '#06b6d4'];

  return (
    <View style={styles.row}>
      {colors.map((c) => {
        const isSelected = selected === c;
        return (
          <TouchableOpacity
            key={c}
            style={[
              styles.dot, 
              { 
                backgroundColor: c, 
                borderColor: isSelected ? '#fff' : 'transparent',
                transform: [{ scale: isSelected ? 1.15 : 1 }]
              }
            ]}
            accessibilityRole="button"
            accessibilityLabel={`Select color ${c}`}
            onPress={() => setColor(c)}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: { flexDirection: 'row', marginTop: 6 },
  dot: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 8, borderWidth: 2 },
});
