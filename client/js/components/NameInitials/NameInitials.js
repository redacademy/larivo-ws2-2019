import React from 'react'
import {Text, View, TouchableOpacity} from 'react-native'
import styles from './styles'

const getInitial = (children) => {
  const initial = children.charAt(0) + 
    children.charAt(children.indexOf(' ') + 1)
  return initial
}

const NameInitials = ({children, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.initialBox}>
      <Text style={styles.initialText}>{getInitial(children)}</Text>
    </View>
  </TouchableOpacity>
)

export default NameInitials
