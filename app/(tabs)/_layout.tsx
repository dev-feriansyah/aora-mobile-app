import { View, Image, Text, ImageSourcePropType } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { icons } from '@/constants'
import { gray, primary } from '@/constants/colors'

interface TabIconProps {
  color: string
  icon: ImageSourcePropType
  focused: boolean
  name: string
}
const TabIcon = (props: TabIconProps) => {
  const { color, focused, name, icon } = props
  return (
    <View className="flex items-center justify-center gap-2">
      <Image source={icon} className="w-6 h-6" tintColor={color} />
      <Text
        className={`${
          focused ? 'font-psemibold' : 'font-pregular'
        } text-xs capitalize`}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  const tabs = [
    { name: 'home', title: 'Home', icon: icons.home },
    { name: 'create', title: 'Create', icon: icons.plus },
    { name: 'profile', title: 'Profile', icon: icons.profile },
    { name: 'bookmark', title: 'Saved', icon: icons.bookmark },
  ]
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: primary.main,
        tabBarInactiveTintColor: gray.text,
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: gray.dark,
          height: 84,
          borderTopWidth: 1,
          borderTopColor: gray.border,
        },
      }}
    >
      {tabs.map((tab, index) => (
        <Tabs.Screen
          key={index}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused, color }) => (
              <TabIcon
                name={tab.title}
                icon={tab.icon}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  )
}

export default TabsLayout
