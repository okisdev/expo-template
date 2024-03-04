import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function ModalIndex() {
    return (
        <View>
            <Text>Modal Index</Text>
            <Link href='./modal-a'>Go Modal A</Link>
        </View>
    );
}
