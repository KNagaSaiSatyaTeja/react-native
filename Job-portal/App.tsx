import OnboardingScreen from 'components/OnboardingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';
import { Platform } from 'react-native';

export default function App() {
  const handleOnboardingComplete = () => {
    console.log('Onboarding completed!');
  };

  return (
    <SafeAreaProvider>
      {Platform.OS === 'android' && <OnboardingScreen onComplete={handleOnboardingComplete} />}
    </SafeAreaProvider>
  );
}
