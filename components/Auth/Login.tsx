import { useAuthStore } from '@/store/useAuthStore'
import { Button } from '@rneui/themed/dist/Button'
import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'
export const Login = () => {

  const signIn = useAuthStore((state) => state.signIn)
  const router = useRouter()

  const handleLogin = () => {
    signIn('my-auth-token')
    router.replace('/(tabs)')
  }
  return (
    <View className='items-center justify-center flex-1 mx-4'>
      <Text className='text-2xl font-bold text-center text-white'>
        Login to your account
      </Text>
      <Button onPress={handleLogin} title="Login" />
    </View>
  )
}
