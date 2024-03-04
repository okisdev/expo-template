import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ModalA() {
    return (
        <View>
            <Text>Modal A</Text>
            <Link href='./modal-b'>Go Modal B</Link>
        </View>
    );
}
