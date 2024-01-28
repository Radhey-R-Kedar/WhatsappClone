import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import MyStatus from '../components/MyStatus'
import RecentStatus from '../components/RecentStatus'
import ViewedStatus from '../components/ViewedStatus'
import { Colors } from '../theme/Colors'

const StatusListScreen = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{backgroundColor: Colors.background, padding:16}}>
      <MyStatus/>
      <RecentStatus/>
      <ViewedStatus/>
    </ScrollView>
  )
}

export default StatusListScreen