import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('@/assets/fonts/Poppins-Black.otf'),
    'Poppins-Bold': require('@/assets/fonts/Poppins-Bold.otf'),
    'Poppins-ExtraBold': require('@/assets/fonts/Poppins-ExtraBold.otf'),
    'Poppins-ExtraLight': require('@/assets/fonts/Poppins-ExtraLight.otf'),
    'Poppins-Light': require('@/assets/fonts/Poppins-Light.otf'),
    'Poppins-Medium': require('@/assets/fonts/Poppins-Medium.otf'),
    'Poppins-Regular': require('@/assets/fonts/Poppins-Regular.otf'),
    'Poppins-SemiBold': require('@/assets/fonts/Poppins-SemiBold.otf'),
    'Poppins-Thin': require('@/assets/fonts/Poppins-Thin.otf'),
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  if (!fontsLoaded && !error) {
    return null
  }
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  )
}
