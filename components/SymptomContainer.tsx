import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';

interface SymptomContainerProps {
  symptoms: {
    name: string;
    icon: any;
  }[];
}

export function SymptomContainer({ symptoms }: SymptomContainerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';

  return (
    <ThemedView>
      <TouchableOpacity
        style={styles.heading}
        onPress={() => setIsOpen((value) => !value)}
        activeOpacity={0.8}>
        <ThemedView style={styles.content}>
          {symptoms.map((symptom) => (
          <ThemedView style={styles.symptomContainer}>
            <ThemedText type="defaultSemiBold">{symptom.name}</ThemedText>
            <Image source={symptom.icon} style={styles.icon}/>
          </ThemedView>
          ))}
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  content: {
    marginTop: 6,
    marginLeft: 24,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  symptomContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    tintColor: 'white',
    backgroundColor: 'transparent',
    width: 42,
    height: 42,
  }
});
