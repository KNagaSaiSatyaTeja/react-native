'use client';

import { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, ScrollView, Pressable, Image } from 'react-native';

import clgImg from '../assets/collegelogo.png';

const ONBOARDING_DATA = [
  {
    title: 'Welcome to MyApp',
    description: 'Your one-stop solution for everything you need',
    color: '#4F46E5',
  },
  {
    title: 'Easy to Use',
    description: 'Simple and intuitive interface for the best experience',
    color: '#7C3AED',
  },
  {
    title: 'Get Started',
    description: 'Join thousands of happy users today',
    color: '#6366F1',
  },
];

const OnboardingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { width } = Dimensions.get('window');

  const handleScroll = (event: { nativeEvent: { contentOffset: { x: number } } }) => {
    const slideIndex = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slideIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        {ONBOARDING_DATA.map((item, index) => (
          <View className="h-full" key={index}>
            <View style={[styles.slide, { width, backgroundColor: item.color }]}>
              <Image source={clgImg} alt="College" style={{ width: 100, height: 100 }} />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <View style={styles.pagination}>
        {ONBOARDING_DATA.map((_, index) => (
          <View
            key={index}
            style={[styles.paginationDot, index === activeIndex && styles.paginationDotActive]}
          />
        ))}
      </View>

      <Pressable style={styles.button} onPress={onComplete}>
        <Text style={styles.buttonText}>
          {activeIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Skip'}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 18,
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 100,
    alignSelf: 'center',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: '#ffffff',
  },
  button: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    backgroundColor: '#ffffff',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
  },
});

export default OnboardingScreen;
