import { Account } from '@/components/Auth/Account'
import { Auth } from '@/components/Auth/Auth'
import { supabase } from '@/lib/supabase'
import { Session } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'
import { View } from 'react-native'

export default function HomeScreen() {
  const [session, setSession] = useState<Session | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <View>
      {
        session && session.user
          ? <Account key={ session.user.id } session={ session } />
          : <Auth />
      }
    </View>
  )
}

