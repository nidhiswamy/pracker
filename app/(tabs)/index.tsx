import { Image, StyleSheet, Platform } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { SymptomContainer } from '@/components/SymptomContainer';
import headache from '@/assets/icons/headache.png';
import acne from '@/assets/icons/acne.png';
import backache from '@/assets/icons/backache.png';
import bloating from '@/assets/icons/bloating.png';
import cramps from '@/assets/icons/cramps.png';
import cravings from '@/assets/icons/cravings.png';
import depression from '@/assets/icons/depression.png';
import nausea from '@/assets/icons/nausea.png';

const symptoms = [
  {
    name: 'Headache',
    icon: headache,
  },
  {
    name: 'Acne',
    icon: acne,
  },
  {
    name: 'Backache',
    icon: backache,
  },
  {
    name: 'Bloating',
    icon: bloating,
  },
  {
    name: 'Cramps',
    icon: cramps,
  },
  {
    name: 'Cravings',
    icon: cravings,
  },
  {
    name: 'Depression',
    icon: depression,
  },
  {
    name: 'Nausea',
    icon: nausea,
  },
]

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Hello, Nidhi!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.headerContainer}>
        <ThemedText type="subtitle">Day 11</ThemedText>
        <ThemedText type="title">Follicular Phase</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">How are you feeling?</ThemedText>
        <ThemedText>
          <SymptomContainer symptoms={symptoms}/>
        </ThemedText>
      </ThemedView>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    padding: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 16,
  },
  headerContainer: {
    
    alignItems: 'center',
    gap: 8,
    paddingBottom: 16,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
