import { View, ScrollView, Image, Text, TextInput } from 'react-native'
import { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import AFormFIeld from '@/components/AFormFIeld'
import AButton from '@/components/AButton'
import { Link } from 'expo-router'

const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
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
            Sign up to Aora
          </Text>

          <AFormFIeld
            name="Username"
            type="text"
            containerStyle="mt-6"
            value={form.username}
            onChangeText={(event) => setForm({ ...form, username: event })}
          />
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

          <AButton containerStyle="mt-8">Sign Up</AButton>

          <Text className="text-sm font-pregular text-gray-100 mt-6 text-center">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-secondary font-psemibold">
              Login
            </Link>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp
