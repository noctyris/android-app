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
	];

	return (
		<SafeAreaView style={{flex: 1}} edges={['top', 'bottom', 'left', 'right']}>
			<View style={styles.container}>
				<View style={styles.header}>
					<Menu pages={pages} setOpen={setMenuOpen} isOpen={isMenuOpen} />
				</View>
				
				<Stack>
					{pages.map((page) => <Stack.Screen options={{ headerShown: false }} name={page.stack} key={page.stack} />)}
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
		paddingLeft: 10,
		paddingRight: 10,
	},
	text: {
		textAlign: "center",
		fontSize: 24
	}
});
