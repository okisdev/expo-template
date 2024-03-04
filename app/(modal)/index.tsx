import { Link, useRouter } from 'expo-router';
import { View, Text, Pressable } from 'react-native';

export default function ModalIndex() {
    const router = useRouter();

    return (
        <View>
            <Text>Modal Index</Text>
            <Link href='./modal-a'>Go Modal A</Link>
            <Pressable onPress={() => router.back()}>
                <Text>Quit Modal</Text>
            </Pressable>
        </View>
    );
}
