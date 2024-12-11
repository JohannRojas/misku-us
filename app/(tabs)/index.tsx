import { Account } from '@/components/Auth/Account'
import { Auth } from '@/components/Auth/Auth'
import { supabase } from '@/lib/supabase'
import { useAuthStore } from '@/store/useAuthStore'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'

export default function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null)
  const userToken = useAuthStore((state) => state.userToken)
  console.log("🚀 ~ HomeScreen ~ userToken:", userToken)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View className='items-center justify-center flex-1 mx-4'>
      <Text className='text-2xl font-bold text-center text-white'>
        Home
      </Text>
    </View>
  )
}

