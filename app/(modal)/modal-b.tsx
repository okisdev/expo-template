import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ModalB() {
    return (
        <View>
            <Text>Modal B</Text>
            <Link href='./modal-a'>Go Modal A</Link>
        </View>
    );
}
