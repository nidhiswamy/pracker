import Ionicons from '@expo/vector-icons/Ionicons';
import { PropsWithChildren, useState } from 'react';
import { Image, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Colors } from '@/constants/Colors';
import { Collapsible } from './Collapsible';

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
        <Collapsible title="Log your symptoms">
        <ThemedView style={styles.content}>
          {symptoms.map((symptom) => (
          <ThemedView style={styles.symptomContainer}>
            <ThemedText type="defaultSemiBold">{symptom.name}</ThemedText>
            <Image source={symptom.icon} style={styles.icon}/>
          </ThemedView>
          ))}
        </ThemedView>
        </Collapsible>
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
    width: 30,
    height: 30,
  }
});
