import { cn } from '@/helpers/helpers'
import { View, ActivityIndicator } from 'react-native';

interface Props extends React.ComponentProps<typeof ActivityIndicator> {
  size?: number | "small" | "large" | undefined
}

export const Loader = ({size = 'large', className}: Props) => {
  return (
    <View className='items-center justify-center'>
      <ActivityIndicator size={size} className={cn('text-primary', className)} />
    </View>
  );
};
