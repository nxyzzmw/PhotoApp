import React from 'react';
import { Text, TextProps, useColorScheme } from 'react-native';
import { Colors } from '@/constants/theme';

export function ThemedText(props: TextProps) {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'dark' ? 'dark' : 'light'];

  return <Text {...props} style={[{ color: colors.text }, props.style]} />;
}
