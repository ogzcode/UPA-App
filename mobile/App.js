import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import Navigator from './src/navigation/Navigator';
import { FontProvider } from './src/context/fontContext';
import store from './src/store/store';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Provider store={store}>
        <FontProvider>
          <Navigator />
        </FontProvider>
      </Provider>
    </SafeAreaView>
  );
}
