import AEmptyState from '@/components/AEmptyState'
import ASearchInput from '@/components/ASearchInput'
import AVideoCard from '@/components/AVideoCard'
import { images } from '@/constants'
import { View, Text, FlatList, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const HomeHeader = () => {
  return (
    <View className="my-6 space-y-5">
      <View className="flex flex-row justify-between items-start">
        <View>
          <Text className="font-pmedium text-sm text-gray-100">
            Welcome Back
          </Text>
          <Text className="text-2xl font-psemibold text-white">Feri</Text>
        </View>
        <View className="mt-1">
          <Image
            source={images.logoSmall}
            className="w-9 h-10"
            resizeMode="contain"
          />
        </View>
      </View>

      <View>
        {/* TODO: Search Functionality */}
        <ASearchInput placeholder="Search a video topic" />
      </View>

      <View>
        <Text className="text-base text-gray-100 font-pregular">
          Trending Videos
        </Text>
        {/* TODO: Trending List */}
      </View>
    </View>
  )
}

const Home = () => {
  // TODO: get trending videos
  const videos = [
    {
      title:
        'Woman walks down a Tokyo ads lorem ipsum dolor sit amet consectetur adipiscing',
      thumbnail: 'https://picsum.photos/900/500',
      videoUrl: 'https://player.vimeo.com/video/949579770?h=897cd5e781',
      creatorName: 'Brandon Ether',
      creatorAvatar: 'https://picsum.photos/50',
    },
    {
      title: 'Woman walks down a Tokyo',
      thumbnail: 'https://picsum.photos/900/500',
      videoUrl: 'https://player.vimeo.com/video/949579770?h=897cd5e781',
      creatorName: 'Brandon Ether',
      creatorAvatar: 'https://picsum.photos/50',
    },
  ]

  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        className="px-4"
        data={videos}
        renderItem={({ item }) => <AVideoCard {...item} />}
        ListHeaderComponent={HomeHeader}
        ListEmptyComponent={() => (
          <AEmptyState
            title="No Videos Found"
            subtitle="Be the first one to upload a video"
            onPress={() => router.push('/create')}
            confirmBtnText="Create Video"
          />
        )}
      />
    </SafeAreaView>
  )
}

export default Home
