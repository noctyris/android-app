import React, { useRef, useEffect } from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function Menu(props) {
	const fadeAnim = useRef(new Animated.Value(0)).current;

	// Animation au changement de props.isOpen
	useEffect(() => {
		Animated.timing(fadeAnim, {
			toValue: props.isOpen ? 1 : 0,
			duration: 500,
			useNativeDriver: true,
		}).start();
	}, [props.isOpen]);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.setOpen(!props.isOpen)}>
				<View style={styles.bar} />
				<View style={styles.bar} />
				<View style={styles.bar} />
			</TouchableOpacity>

			<Animated.View style={{ opacity: fadeAnim }}>
				{props.pages.map((page) => (
					<Link
						key={page.name.toLowerCase()}
						href={page.href}
						style={styles.link}
					>
						- {page.name}
					</Link>
				))}
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
	bar: {
		backgroundColor: 'black',
		width: 24,
		height: 3,
		borderRadius: 5,
		marginVertical: 2,
	},
	link: {
		marginTop: 8,
		fontSize: 16,
	},
});

