import { Feather } from '@expo/vector-icons';
import { Text, View } from 'react-native';
import { backButtonStyles as styles } from './style';

export const BackButton = ({ onPress }: { onPress: () => void }) => {
  return (
    <View style={styles.backButton}>
      <Feather name="chevron-left" size={16} color="#007AFF" />
      <Text style={styles.backButtonText} onPress={onPress}>
        Back
      </Text>
    </View>
  );
};

