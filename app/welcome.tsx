import { ScreenWrapper } from '@/components/ScreenWrapper'
import { Image, Text, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Button } from '@/components/Button'
import { cn } from '@/helpers/helpers'

export default function Welcome() {

  return (
    <ScreenWrapper className='text-white'>
      <StatusBar style="dark" />
      <View className={ `items-center justify-around flex-1 bg-white px-[4%]` }>
        {/* Welcome image */}
        <Image source={ require('../assets/images/welcome.png') } resizeMode='contain' className='w-full h-[50%] self-center' />
        {/* Title */}
        <View className='gap-5'>
          <Text className='text-2xl font-extrabold text-center text-primary'>Misku us!</Text>
          <Text className='text-xl font-bold text-center px-[10%] text-primary'>Para manejar nuestros gastos</Text>
        </View>
        {/* Footer */}
        <View className='w-full gap-8'>
          <Button 
            title="Comencemos" 
            textStyle={cn('text-white font-bold text-center')}
            className={'mx-[3%]'}
            onPress={() => { }} />
        </View>
      </View>

    </ScreenWrapper>
  )
};
