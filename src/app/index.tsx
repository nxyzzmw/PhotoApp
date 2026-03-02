import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/theme'
import { useColorScheme } from 'react-native'

export default function Index() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.title}>Welcome to PhotoApp</ThemedText>
        <ThemedText style={styles.subtitle}>Share your moments</ThemedText>
        
        <View style={styles.grid}>
          <View style={[styles.card, { backgroundColor: colors.backgroundElement }]}>
            <ThemedText style={styles.cardTitle}>📸</ThemedText>
            <ThemedText>Take Photo</ThemedText>
          </View>
          <View style={[styles.card, { backgroundColor: colors.backgroundElement }]}>
            <ThemedText style={styles.cardTitle}>🖼️</ThemedText>
            <ThemedText>Gallery</ThemedText>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 40,
  },
  grid: {
    flexDirection: 'row',
    gap: 16,
  },
  card: {
    width: 140,
    height: 140,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  cardTitle: {
    fontSize: 40,
  },
});