import { useAuthStore } from '@/store/useAuthStore'
import { Button } from '@rneui/themed'
import { useRouter } from 'expo-router'
import { View, Text } from 'react-native';

export default function ProfileScreen () {

  const signOut = useAuthStore((state) => state.signOut)
  const router = useRouter()

  const handleSignOut = () => {
    signOut()
    router.replace('/(auth)/login')
  }

  return (
    <View className='items-center justify-center flex-1'>
      <Text className='text-2xl font-bold text-center text-white'>
        Profile
      </Text>
      <Button onPress={handleSignOut} title="Sign Out" />
    </View>
  );
};
