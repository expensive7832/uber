import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";

import PhoneInput from "react-native-phone-number-input";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useState } from "react";

import * as WebBrowser from "expo-web-browser"
import * as Google from "expo-auth-session/providers/google"

import { makeRedirectUri } from "expo-auth-session"


WebBrowser.maybeCompleteAuthSession();

const register = () => {


  const [ request,  response, promptAsync] = Google.useAuthRequest({
    androidClientId: "614268611299-8k8bc5j5q6ibbl0oponqap9ih90sfmlh.apps.googleusercontent.com",
    iosClientId: "614268611299-n2am7s0cn7fmeb6p5ij7tr40jn8n35nu.apps.googleusercontent.com",
    
    
  })

  const [value, setValue] = useState("");
  const [formattedValue, setFormattedValue] = useState("");
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  async function handleOnboard(){
    const checkValid = phoneInput.current?.isValidNumber(formattedValue);

    
    if(checkValid){

   
      // router.push("/confirm")



     
    }else{
      setShowMessage(true);
    setValid(false);
    }
  }


  React.useEffect(() =>{

    if(response?.type === "success"){
      const { id_token } = response?.params

      const credential = GoogleAuthProvider.credential(id_token)

      signInWithCredential(auth, credential)
    }

  }, [response])
  

  return (
    <SafeAreaView className="flex-1 min-h-full w-full p-2 bg-white">
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        <View className="bg-black w-full p-6">
          <Text className="text-white font-bold text-xl">Uber</Text>
        </View>

        <View className="my-4">
          <Text className="text-lg font-medium">
            What is your phone number or e-
          </Text>
          <Text className="text-lg font-medium">mail address?</Text>
        </View>

        <View>
        
        <PhoneInput
          containerStyle={{
            width:"100%"
          }}
          withDarkTheme
            ref={phoneInput}
            defaultValue={value}
            defaultCode="NG"
            layout="first"
            
            onChangeFormattedText={(text) => {
              setFormattedValue(text);
            }}
           
            withShadow
           
          />

          
            <TouchableOpacity className="bg-black p-3 rounded-md my-3" onPress={handleOnboard} >
              <Text className="text-white text-center">Next</Text>
            </TouchableOpacity>
          
        </View>

        {/* error display */}

        {showMessage && (
          
            <Text className="text-red-600 text-center">{valid !== true && "Enter Valid Number"}</Text>
           
          )}


        <View className="my-4">

        <Image
        source={require("./../assets/images/line.png")}
          className="object-contain w-full"

        />

        {/* social link */}

        <TouchableOpacity onPress={() => promptAsync()} className="flex flex-row rounded-md space-x-3 my-2 justify-center bg-gray-200 h-10 items-center">
        <Image
        source={require("./../assets/images/googlelogo.png")}
          className="object-contain w-5 h-5"
          
        />
        <Text className="font-semibold">Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex flex-row rounded-md space-x-3 my-2 justify-center bg-gray-200 h-10 items-center">
        <Image
        source={require("./../assets/images/apple.png")}
          className="object-contain w-5 h-5"
          
        />
        <Text className="font-semibold">Continue with Apple</Text>
        </TouchableOpacity>

        {/* end of social link */}

        <Image
        source={require("./../assets/images/line.png")}
          className="object-contain w-full"
        />

        </View>

        <View className="mt-6">
          <Text>
          By moving forward, you give Uber and its partners 
permission to call the specified number 
or send WhatsApp messages or text messages (e.g. 
via an automated service).
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default register;
