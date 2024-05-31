import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Link } from 'expo-router'

const index = () => {
  return (
   <SafeAreaView className=" flex-1">
    <ScrollView
    contentContainerStyle={{
        flex: 1
    }}
    >
        <ImageBackground
    
        source={require("./../assets/images/uber.gif")}
        className="w-full h-full object-cover items-center justify-center"
        resizeMode='cover'
        >
         <View className="flex-1"/>

         <Link className='' asChild href="/register">

            <TouchableOpacity className="bg-white absolute bottom-5 w-[90%] rounded-md h-10 items-center justify-center">
                <Text className=" font-bold">Continue</Text>
            </TouchableOpacity>
         
         </Link>
        </ImageBackground>
    </ScrollView>
   </SafeAreaView>
  )
}

export default index