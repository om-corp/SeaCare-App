import { View, Text } from 'react-native'
import Button from '~/components/button'
import { theme } from '~/lib/theme'

export function Feed() {
    return (
        <View>
            <Text>Feed</Text>
            <View style={{ margin: 25, gap: 25 }}>
                <Button.Filled title='Test' />
                <Button.Outline title='Test' />
                <Button.Transparent title='Test' />

                <Button.Filled title='Error' backgroundColor={theme.colors.error} />
                <Button.Outline title='Successo!' outlineColor={theme.colors.success} />
                <Button.Transparent title='Warning!' textColor={theme.colors.warning} />
                <Button.Filled title='Ok' backgroundColor={theme.colors.accent} textColor={theme.colors.black} />

            </View>
        </View>
    )
}