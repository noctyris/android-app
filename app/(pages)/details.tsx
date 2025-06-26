import { View, Text, StyleSheet } from 'react-native';

export default function DetailsScreen() {
	const texts = [
		"Pages pour chaque chapitre livre astro",
		"Page index.tsx: dashboard sur l'actu scientifique"
	]
	

	return (
		<View style={styles.container}>
			<Text style={{fontSize: 24}}>Details</Text>
			{texts.map((t) => <Text key={t.slice(3)} style={{marginBottom: 3}}>- {t}</Text>)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
	},
});

