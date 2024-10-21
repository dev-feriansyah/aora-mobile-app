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

interface AFormFIeldProps extends TextInputProps {
  name: string
  type: 'text' | 'password'
  containerStyle?: string
}

const AFormFIeld = (props: AFormFIeldProps) => {
  const { name, type, containerStyle, ...delegate } = props
  const [showPassword, seShowPassword] = useState(false)

  return (
    <View className={`space-y-2 ${containerStyle}`}>
      <Text className="text-gray-100 font-pmedium text-base">{name}</Text>

      <View className="flex flex-row items-center w-full h-16 px-4 bg-black-100 rounded-xl border-2 border-black-200 focus:border-secondary">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          placeholderTextColor="hsl(240, 12%, 51%)"
          secureTextEntry={type === 'password' && !showPassword}
          {...delegate}
        />

        {type === 'password' && (
          <TouchableOpacity onPress={() => seShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default AFormFIeld
