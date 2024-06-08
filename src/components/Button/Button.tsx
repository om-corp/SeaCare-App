import React from "react"
import { Pressable, StyleSheet, Text } from "react-native"
import { colors, fontSize } from "~/lib/theme"
import { ButtonFilledProps, ButtonOutlineProps } from "./button-props"

class Button {

  Filled = ({ children, title, onPress, color = colors.white, backgroundColor = colors.primary, borderRadius = 6 }: ButtonFilledProps) => {
    return (
      <Pressable onPress={onPress} style={[styles.button, { backgroundColor, borderRadius }]}>
        {children ? children : <Text style={[styles.text, { color }]}>{title}</Text>}
      </Pressable>
    )
  }

  Outline = ({ children, title, onPress, color = colors.primary, borderRadius = 6, borderStyle = 'solid', borderWidth = 2 }: ButtonOutlineProps) => {
    return (
      <Pressable onPress={onPress} style={[styles.button, { borderColor: color, borderStyle, borderRadius, borderWidth }]}>
        {children ? children : <Text style={[styles.text, { color }]}>{title}</Text>}
      </Pressable>
    )
  }

}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: fontSize.base,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default new Button;