import { useAuthStore } from '@/store/useAuthStore'
import { Input } from '@rneui/themed'
import { useRouter } from 'expo-router'
import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginScreen() {
  const signIn = useAuthStore((state) => state.signIn)
  const router = useRouter()

  const handleLogin = () => {
    signIn('my-auth-token')
    router.replace('/(tabs)')
  }

  return (
    <SafeAreaView className='flex-1'>
      <Input placeholder='Email' className='mt-10 mb-5' />
      <Input placeholder='Password' className='mt-10 mb-5' />
      <View className='items-center justify-center flex-1'>
        <Text className='text-2xl font-bold text-center text-white'>
          Login to your account
        </Text>
        <Button onPress={ handleLogin } title="Login" />
      </View>
    </SafeAreaView>
  )
};
