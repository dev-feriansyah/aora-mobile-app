import { icons } from '@/constants'
import { View, Text, Image, TouchableOpacity } from 'react-native'

interface AVideoCardProps {
  title: string
  thumbnail: string
  videoUrl: string
  creatorName: string
  creatorAvatar: string
}
const AVideoCard = (props: AVideoCardProps) => {
  const { title, thumbnail, videoUrl, creatorName, creatorAvatar } = props

  return (
    <View className="mb-12">
      <View className="flex flex-row space-x-2">
        <View className="w-[46px] h-[46px] rounded-lg border border-secondary overflow-hidden">
          <Image
            source={{ uri: 'https://picsum.photos/50' }}
            className="w-full h-full"
            resizeMode="cover"
          />
        </View>
        <View className="flex-1">
          <Text className="font-psemibold text-sm text-white" numberOfLines={1}>
            {title}
          </Text>
          <Text className="font-pregular text-xs text-gray-100 capitalize">
            {creatorName}
          </Text>
        </View>
        <View className="mt-0.5">
          {/* TODO: Menu */}
          <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
        </View>
      </View>

      {/* TODO: Video Play */}
      <TouchableOpacity
        className="w-full h-60 mt-3 relative flex justify-center items-center"
        activeOpacity={0.7}
      >
        <Image
          source={{ uri: 'https://picsum.photos/900/500' }}
          className="w-full h-full rounded-lg opacity-60"
          resizeMode="cover"
        />
        <Image
          source={icons.play}
          className="w-12 h-12 absolute"
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  )
}

export default AVideoCard
