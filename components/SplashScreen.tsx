import { View, Text, Platform, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* Add your logo or app name here */}
        <Text style={styles.title}>My App</Text>
        <ActivityIndicator
          size={Platform.OS === 'ios' ? 'large' : 50}
          color="#0000ff"
          style={styles.loader}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#000000',
  },
  loader: {
    marginTop: 20,
  },
});

export default SplashScreen;
