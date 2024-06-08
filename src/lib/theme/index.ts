import { lightColors } from "./theme-colors";
import { fonts } from "./theme-fonts";

export const colors = {
    ...lightColors,
} as const

export const fontSize = {
    ...fonts.sizes
} as const

export const theme = {
    dark: false,
    colors,
    fonts,
} as const

export default theme;