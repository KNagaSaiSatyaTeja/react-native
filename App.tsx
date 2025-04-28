import OnboardingScreen from 'components/OnboardingScreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import './global.css';

export default function App() {
  const handleOnboardingComplete = () => {
    console.log('Onboarding completed!');
  };

  return (
    <SafeAreaProvider>
      <OnboardingScreen onComplete={handleOnboardingComplete} />
    </SafeAreaProvider>
  );
}
