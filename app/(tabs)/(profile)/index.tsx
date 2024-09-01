import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileOption } from '@/components/ProfileOption';
import AccountScreen from './account';

export default function Profile() {
  return (
      <SafeAreaView style={styles.container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Profile</ThemedText>
        </ThemedView>
        <ThemedText>Welcome to your profile!</ThemedText>
        <ProfileOption title="Account" children={<AccountScreen />} />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  container: {
    display: 'flex',
    padding: 32,
  },
});
