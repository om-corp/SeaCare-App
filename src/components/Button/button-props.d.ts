type ButtonProps = {
    onPress?: TouchableOpacityProps['onPress'];
    textColor?: string;
    title?: string;
} & TouchableOpacityProps;

export type FilledButtonProps = {
    backgroundColor?: string;
} & ButtonProps

export type OutlineButtonProps = {
    outlineColor?: string;
} & ButtonProps & FilledButtonProps;

export type TransparentButtonProps = {} & ButtonProps