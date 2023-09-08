import React from 'react'
import { View, Button, TextInput, ScrollView, StyleSheet } from "react-native"

const CreateUserScreen = () => {
  return (
    <ScrollView>
      <View>
        <TextInput placeholder='Name User'/>
      </View>
      <View>
        <TextInput placeholder='Email User'/>
      </View>
      <View>
        <TextInput placeholder='Phone User'/>
      </View>
      <View>
          <Button title='Save User'/>
      </View>
    </ScrollView>
  )
}

export default CreateUserScreen