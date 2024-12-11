import { useAuthStore } from '@/store/useAuthStore'
import { View, Text } from 'react-native';

export default function LoginScreen () {
  const signIn = useAuthStore((state) => state.signIn)
  return (
    <View>
      <Text></Text>
    </View>
  );
};
