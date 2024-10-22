import { ReactNode } from 'react'
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native'

interface AButtonProps {
  children: ReactNode
  containerStyle?: string
  isLoading?: boolean
  onPress?: () => void
}
const AButton = (props: AButtonProps) => {
  const { children, containerStyle, isLoading = false, onPress } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex justify-center items-center w-full ${containerStyle} ${
        isLoading ? 'opacity-50' : ''
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <ActivityIndicator
          animating={isLoading}
          color="#fff"
          size="small"
          className="ml-2"
        />
      ) : (
        <Text className="text-primary font-psemibold text-lg">{children}</Text>
      )}
    </TouchableOpacity>
  )
}

export default AButton
