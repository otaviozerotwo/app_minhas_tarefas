import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationParamList } from '../@types/navigation';

import { Home } from '../screens/Home';
import { CreateTask } from '../screens/CreateTask';
import { Header } from '../components/Header';

const Stack = createNativeStackNavigator<NavigationParamList>();

export function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#FFF' },
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen
        name='Home'
        component={Home}
        options={({ navigation }) => ({
          header: () => (
            <Header
              title='Minhas Tarefas'
              onPress={() => navigation.navigate('CreateTask', {})}
            />
          )
        })}
      />
      <Stack.Screen
        name='CreateTask'
        component={CreateTask}
        options={{
          headerTitleAlign: 'center',
          title: 'Nova Tarefa'
        }}
      />
    </Stack.Navigator>
  );
}