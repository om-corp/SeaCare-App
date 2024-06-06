import { PressableProps } from "react-native";

export default interface ButtonProps {
    borderRadius?: number;
    color?: string;
    onPress?: PressableProps['onPress'];
    title?: string;
}

export interface ButtonFilledProps extends ButtonProps {
    backgroundColor?: string;
}

export interface ButtonOutlineProps extends ButtonProps {
    borderStyle?: 'solid' | 'dashed' | 'dotted';
    borderWidth?: number;
}