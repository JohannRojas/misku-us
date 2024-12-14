import { cn } from '@/helpers/helpers'
import { Pressable, Text } from 'react-native'

interface Props extends React.ComponentProps<typeof Pressable> {
  title: string,
  textStyle?: string ,
  onPress: () => void,
  loading?: boolean,
  hasShadow?: boolean,
}

export const Button = ({
  className,
  title = '',
  textStyle,
  onPress = () => { },
  loading,
  hasShadow
}: Props) => {
  return (
    <Pressable
      onPress={ onPress }
      className={ cn(
        'bg-primary h-14 justify-center items-center rounded-3xl px-4',
        hasShadow && 'shadow-black shadow-xl drop-shadow-lg opacity-20',
        className
      ) }>
      <Text className={cn('text-base font-bold', textStyle)}>{ title }</Text>
    </Pressable>
  )
}
