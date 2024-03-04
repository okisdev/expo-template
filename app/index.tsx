import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function App() {
    return (
        <View>
            <Text>Open up App.tsx to start working on your app!</Text>
            <Link href='/about'>Go to About</Link>
            <Link href='/1/hello/4'>Go to Hello</Link>
            <Link href='(modal)'>show modal</Link>
        </View>
    );
}
