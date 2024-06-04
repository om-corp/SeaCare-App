import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { styles } from './style';
import { theme } from '~/lib/theme';

type ButtonProps = {
  onPress?: TouchableOpacityProps['onPress'];
  textColor?: string;
  title?: string;
} & TouchableOpacityProps;

type FilledButtonProps = {
  backgroundColor?: string;
} & ButtonProps

type OutlineButtonProps = {
  outlineColor?: string;
} & ButtonProps & FilledButtonProps;

type TransparentButtonProps = {} & ButtonProps

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

export default new Button;
