import { cn } from '@/helpers/helpers'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

interface Props extends React.ComponentProps<typeof View> {
  children: React.ReactNode,
}

export const ScreenWrapper = ({ children, className }: Props) => {
  const { top } = useSafeAreaInsets()
  const paddingTop = top > 0 ? top + 5 : 30

  return (
    <View
      className={cn('flex-1', className)}
      style={{
        paddingTop,
      }}
      >
      { children }
    </View>
  )
}
