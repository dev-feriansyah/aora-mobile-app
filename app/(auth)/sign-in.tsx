import { View, ScrollView, Image, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import AFormFIeld from '@/components/AFormFIeld'
import AButton from '@/components/AButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full h-full flex justify-center px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[34px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-psemibold text-white mt-10">
            Log in to Aora
          </Text>

          <AFormFIeld
            name="Email"
            type="text"
            containerStyle="mt-6"
            value={form.email}
            onChangeText={(event) => setForm({ ...form, email: event })}
          />
          <AFormFIeld
            name="Password"
            type="password"
            containerStyle="mt-6"
            value={form.password}
            onChangeText={(event) => setForm({ ...form, password: event })}
          />

          <Text className="text-sm font-pregular text-gray-100 mt-6 text-right">
            Forgot password
          </Text>

          <AButton containerStyle="mt-8">Sign In</AButton>

          <Text className="text-sm font-pregular text-gray-100 mt-6 text-center">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-secondary font-psemibold">
              Signup
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn
