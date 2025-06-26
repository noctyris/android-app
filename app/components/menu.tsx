import React, { useRef, useEffect } from 'react';
import { Link } from 'expo-router';
import { View, StyleSheet, TouchableOpacity, Animated } from 'react-native';

export default function Menu(props) {
	const fadeAnim = useRef(new Animated.Value(0)).current;
    const heightAnim = useRef(new Animated.Value(0)).current;

	useEffect(() => {
    	Animated.timing(fadeAnim, {
    		toValue: props.isOpen ? 1 : 0,
    		duration: 300,
    		useNativeDriver: false,
    	}).start();
        Animated.timing(heightAnim, {
            toValue: props.isOpen ? 100 : 0,
            duration: 300,
            useNativeDriver: false,
        }).start();
	}, [props.isOpen]);

	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => props.setOpen(!props.isOpen)}>
				<View style={styles.bar} />
				<View style={styles.bar} />
				<View style={styles.bar} />
			</TouchableOpacity>

			<Animated.View style={[styles.links, { opacity: fadeAnim, height: heightAnim }]}>
				{props.pages.map((page) => (
					<Link
						key={page.name.toLowerCase()}
						href={page.href}
						style={styles.link}
					>
						{page.name}
					</Link>
				))}
			</Animated.View>
		</View>
	);
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10
    },
    links: {
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 10,
        top: 20,
        left: 10,
        width: 100,
        background: 'white'
    },
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

