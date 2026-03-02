import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/theme'
import { useColorScheme } from 'react-native'

export default function Profile() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={[styles.avatar, { backgroundColor: colors.backgroundElement }]}>
          <ThemedText style={styles.avatarText}>👤</ThemedText>
        </View>
        <ThemedText style={styles.name}>John Doe</ThemedText>
        <ThemedText style={styles.username}>@johndoe</ThemedText>
        
        <View style={styles.stats}>
          <View style={styles.stat}>
            <ThemedText style={styles.statNumber}>24</ThemedText>
            <ThemedText style={styles.statLabel}>Photos</ThemedText>
          </View>
          <View style={styles.stat}>
            <ThemedText style={styles.statNumber}>128</ThemedText>
            <ThemedText style={styles.statLabel}>Followers</ThemedText>
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 50,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  username: {
    fontSize: 16,
    marginBottom: 32,
  },
  stats: {
    flexDirection: 'row',
    gap: 40,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
});