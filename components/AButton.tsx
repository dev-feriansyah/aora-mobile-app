import { ReactNode } from 'react'
import { Text, TouchableOpacity } from 'react-native'

interface AButtonProps {
  children: ReactNode
  onPress?: () => void
  containerStyle?: string
}
const AButton = (props: AButtonProps) => {
  const { children, onPress, containerStyle } = props
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] flex justify-center items-center w-full ${containerStyle}`}
    >
      <Text className="text-primary font-psemibold text-lg">{children}</Text>
    </TouchableOpacity>
  )
}

export default AButton
