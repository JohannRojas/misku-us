import { Tabs } from 'expo-router'
import { CoinsIcon, HandCoinsIcon, HomeIcon, WalletIcon } from 'lucide-react-native'
export default function TabLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: '#264653' }}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Presupuesto',
          tabBarIcon: ({ color }) => <WalletIcon color={color} />,
        }}
      />
      <Tabs.Screen 
        name="expenses"
        options={{
          title: 'Gastos',
          tabBarIcon: ({ color }) => <HandCoinsIcon color={color} />,
        }}
      />
      <Tabs.Screen 
        name="incomes"
        options={{
          title: 'Ingresos',
          tabBarIcon: ({ color }) => <CoinsIcon color={color} />,
        }}
      />
    </Tabs>
  );
};
