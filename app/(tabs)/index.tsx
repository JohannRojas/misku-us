import { ScreenWrapper } from '@/components/ScreenWrapper'
import { Text, View } from 'react-native'

export default function Home() {

  const totalIncome = 10000
  const totalExpenses = 5000

  return (
    <ScreenWrapper className='px-4 bg-white'>
      <Text className='text-2xl font-semibold text-center text-primary'>
        Resumen
      </Text>
      <View className='p-4 border rounded-lg border-primary/50'>
        <View className='flex flex-row justify-between'>
          <Text className='text-secondary'>Ingresos totales: </Text>
          <Text className='text-secondary'>$ { totalIncome }</Text>
        </View>
        <View className='flex flex-row justify-between'>
          <Text className='text-alert'>Gastos totales: </Text>
          <Text className='text-alert'>$ { totalExpenses }</Text>
        </View>
        <View className='flex flex-row justify-between'>
          <Text className='text-primary'>Saldo: </Text>
          <Text className='text-primary'>$ { totalIncome - totalExpenses }</Text>
        </View>

      </View>

    </ScreenWrapper>
  )
};
