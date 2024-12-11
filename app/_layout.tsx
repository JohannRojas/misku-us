import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "../global.css";

import { useColorScheme } from '@/hooks/useColorScheme';
import { useAuthStore } from '@/store/useAuthStore'

export default function RootLayout() {

  const userToken = useAuthStore((state) => state.userToken)
  const router = useRouter()

  const colorScheme = useColorScheme();

  useEffect(() => {
    if ( !userToken ) {
      router.replace('/(auth)/login')
    } else {
      router.replace('/(tabs)')
    }
  
  }, [userToken])
  

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{headerShown: false}}
      >
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
