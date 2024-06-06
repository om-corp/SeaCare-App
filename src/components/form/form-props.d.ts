export interface FormProps {

}

export interface InputProps {
    icon?: any;
    label?: string;
    placeholder?: string;
    value: any;
    onChangeText: (value: any) => void;
    secureTextEntry?: boolean;
}

export interface LinkProps {
    label?: string;
    text: string;
    onPress: () => void;
}