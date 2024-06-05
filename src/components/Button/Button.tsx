import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { theme } from '~/lib/theme';
import { FilledButtonProps, OutlineButtonProps, TransparentButtonProps } from './button-props';

class Button {
  Filled({ backgroundColor = theme.colors.primary, textColor = theme.colors.white, title, onPress }: FilledButtonProps) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: backgroundColor }]}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    )
  }

  Outline({ backgroundColor = 'transparent', outlineColor = theme.colors.primary, textColor = outlineColor, title, onPress }: OutlineButtonProps) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: backgroundColor, borderColor: outlineColor }]}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    )
  }

  Transparent({ textColor = theme.colors.primary, title, onPress }: TransparentButtonProps) {
    return (
      <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: 'transparent' }]}>
        <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderRadius: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  buttonText: {
    fontSize: theme.fonts.sizes.base,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default new Button;

