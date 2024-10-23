import { View, Text, Image } from 'react-native'
import AButton from './AButton'
import { images } from '@/constants'

interface AEmptyStateProps {
  title: string
  subtitle: string
  confirmBtnText: string
  onPress: () => void
}
const AEmptyState = (props: AEmptyStateProps) => {
  const { title, subtitle, confirmBtnText, onPress } = props
  return (
    <View className="flex items-center">
      <Image
        source={images.empty}
        className="w-[270px] h-[216px]"
        resizeMode="contain"
      />

      <Text className="text-xl font-psemibold text-white">{title}</Text>
      <Text className="text-sm font-pmedium text-gray-100 mt-2">
        {subtitle}
      </Text>

      <AButton containerStyle="mt-5" onPress={onPress}>
        {confirmBtnText}
      </AButton>
    </View>
  )
}

export default AEmptyState
