import { PressableProps } from "react-native";

export default interface ButtonProps extends PressableProps {
    borderRadius?: number;
    color?: string;
    onPress?: PressableProps['onPress'];
    title?: string;
    children?: any;
}

export interface ButtonFilledProps extends ButtonProps {
    backgroundColor?: string;
}

export interface ButtonOutlineProps extends ButtonProps {
    borderStyle?: 'solid' | 'dashed' | 'dotted';
    borderWidth?: number;
}