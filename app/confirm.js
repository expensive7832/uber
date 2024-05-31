import { View, Text, ScrollView, Platform, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { useState } from 'react';


const CELL_COUNT = 4;

const confirm = () => {

  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

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

        <View  className="my-5">
        <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
       
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoComplete={Platform.select({ android: 'sms-otp', default: 'one-time-code' })}
        testID="my-code-input"
        renderCell={({index, symbol, isFocused}) => (
         <TouchableWithoutFeedback
         key={index}
         className="items-center justify-center rounded-md "
         >
           <Text
           
            // style={[styles.cell, isFocused && styles.focusCell]}
            className={`text-lg w-16 h-16   text-center`}
            style={{
              borderColor: `${isFocused ? "#000" : "#f00"}`,
              borderWidth:"1px"
            }}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor/> : null)}
          </Text>
         </TouchableWithoutFeedback>
        )}
      />

</View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default confirm