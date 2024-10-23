import {
  View,
  Text,
  TextInput,
  type TextInputProps,
  TouchableOpacity,
  Image,
} from 'react-native'
import { useState } from 'react'
import { icons } from '@/constants'

interface ASearchInputProps extends TextInputProps {
  containerStyle?: string
}

const ASearchInput = (props: ASearchInputProps) => {
  const { containerStyle, ...delegate } = props
  const [showPassword, seShowPassword] = useState(false)

  return (
    <View
      className={`flex flex-row items-center w-full h-16 px-4 bg-black-100 rounded-xl border-2 border-black-200 focus:border-secondary ${containerStyle}`}
    >
      <TextInput
        className="flex-1 text-white font-psemibold text-base"
        placeholderTextColor="hsl(240, 12%, 51%)"
        {...delegate}
      />

      <TouchableOpacity onPress={() => seShowPassword(!showPassword)}>
        <Image source={icons.search} resizeMode="contain" className="w-6 h-6" />
      </TouchableOpacity>
    </View>
  )
}

export default ASearchInput
