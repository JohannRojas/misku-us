import { cn } from '@/helpers/helpers'
import { Pressable, Text } from 'react-native'
import { Loader } from './Loader'

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
  loading = false,
  hasShadow 
}: Props) => {

  if ( loading ) {
    return (
      <Pressable
        onPress={ onPress }
        className={ cn(
          'bg-white h-14 ',
          className,
        ) }>
          <Loader className='w-5 h-5' />
      </Pressable>
    )
  }

  return (
    <Pressable
      onPress={ onPress }
      className={ cn(
        'bg-primary h-14 justify-center items-center rounded-3xl px-4',
        hasShadow ? 'shadow-lg' : '',
        className,
      ) }>
      <Text className={cn('text-base font-bold', textStyle)}>{ title }</Text>
    </Pressable>
  )
}
