import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import Navigator from './src/navigation/Navigator';
import { FontProvider } from './src/context/fontContext';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <FontProvider>
        <Navigator />
      </FontProvider>
    </SafeAreaView>
  );
}
