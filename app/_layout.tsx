import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack, Layout, Link } from 'expo-router';
import { Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';

import  Menu from './components/menu';

type Page = {
	href:	string;
	name:	string;
	stack:	string;
};

export default function RootLayout() {
	const [isMenuOpen, setMenuOpen] = useState(false);
	const pages: Page[] = [
		{ href: "/", name: "Main", stack: "index" },
		{ href: "/details", name: "Details", stack: "details" },
		{ href: "/details", name: "Details2", stack: "details2" },
	];

	return (
		<SafeAreaView style={{flex: 1}} edges={['top', 'bottom']}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Menu pages={pages} setOpen={setMenuOpen} isOpen={isMenuOpen} />
                    <View style={styles.spacer} />
					<View style={styles.title}><Text style={{fontSize: 24}}>θCalc</Text></View>
                </View>
				
				<Stack screenOptions={{ headerShown: false }}>
					<Stack.Screen name="index" />
					<Stack.Screen name="(pages)" />
				</Stack>
			</View>
		</SafeAreaView>
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
        paddingVertical: 20,
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
