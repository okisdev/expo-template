import { Stack } from 'expo-router';

export default function HomeLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='about' />
            <Stack.Screen
                name='(modal)'
                options={{
                    presentation: 'modal',
                    headerTransparent: false,
                    headerShown: false,
                }}
            />
            <Stack.Screen name='[routerId]/hello/[helloId]' />
        </Stack>
    );
}
