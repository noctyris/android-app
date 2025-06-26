import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Layout, Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';


type Page = {
	href:	string;
	name:	string;
	stack:	string;
};

export default function RootLayout() {
	return (
        <View style={styles.container}>
            <Text>Hello</Text>
        	<Stack screenOptions={{ headerShown: false }}>
		    	<Stack.Screen name="details" />
            </Stack>
        </View>

	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
	},
	header : {
        flexDirection: 'row',
		paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 0,
	},
    spacer: {
        flex: 1,
    },
    title: {
        position: 'absolute',
        left: '50%',
        transform: [{translateX: '-40%'}],
    }
});
