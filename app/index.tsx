import AButton from '@/components/AButton'
import { images } from '@/constants'
import { primary } from '@/constants/colors'
import { router } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full h-full flex justify-center items-center px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px]"
            resizeMode="contain"
          />

          <View className="relative mt-5">
            <Text className="text-3xl text-white text-center font-bold">
              Discover Endless {'\n'} Possibilities with{' '}
              <Text className="text-secondary-200">Aora</Text>
            </Text>
            <Image
              source={images.path}
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
              resizeMode="contain"
            />
          </View>

          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <AButton
            onPress={() => {
              router.push('/sign-in')
            }}
            containerStyle="mt-7"
          >
            Continue with Email
          </AButton>
        </View>
      </ScrollView>
      <StatusBar backgroundColor={primary.DEFAULT} style="light" />
    </SafeAreaView>
  )
}
