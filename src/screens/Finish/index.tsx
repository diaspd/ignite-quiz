import { Text, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { Button } from '../../components/Button';
import { Stars } from '../../components/Stars';

import { styles } from './styles';

interface Params {
  total: string;
  points: string;
}

export function Finish() {
  const route = useRoute();
  const { points, total } = route.params as Params;
  
  const isScoreGood = Number(points) > (Number(points) % 2) 

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>

      <Stars />

      <View style={styles.message}>
        <Text style={styles.title}>
          {isScoreGood ? 'Parabéns!' : 'Que pena'}
        </Text>

        <Text style={styles.subtitle}>
          Você acertou {points} de {total} questões
        </Text>
      </View>

      <Button
        title="Ir para o início"
        onPress={() => navigate('home')}
      />
    </View>
  );
}