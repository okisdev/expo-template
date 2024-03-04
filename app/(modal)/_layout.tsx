import { Stack } from 'expo-router';

export default function ModalLayout() {
    return (
        <Stack>
            <Stack.Screen name='index' />
            <Stack.Screen name='modal-a' />
            <Stack.Screen name='modal-b' />
        </Stack>
    );
}
