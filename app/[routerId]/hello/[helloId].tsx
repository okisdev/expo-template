import { Link, useGlobalSearchParams, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function HelloId() {
    const global = useGlobalSearchParams();

    const local = useLocalSearchParams();

    return (
        <View>
            <Text>Hello Id</Text>
            <Text>global: {JSON.stringify(global)}</Text>
            <Text>local: {JSON.stringify(local)}</Text>

            <Link href='/'>Go Home</Link>
        </View>
    );
}
