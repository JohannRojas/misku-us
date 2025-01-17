import { ScreenWrapper } from '@/components/ScreenWrapper'
import { useRouter } from 'expo-router'
import { Button, Text } from 'react-native'

export default function Home() {

  const router = useRouter()

  return (
    <ScreenWrapper>
      <Text className='text-primary'>Home</Text>
      <Button onPress={() => router.push('/welcome')} title="Welcome"/>
    </ScreenWrapper>
  )
}
