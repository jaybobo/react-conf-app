import React, { Component, PropTypes } from 'react';
import { Image, PixelRatio, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Avatar from '../../../../components/Avatar';
import theme from '../../../../theme';

export default function Talk ({
	endTime,
	onPress,
	speakerAvatarUri,
	speakerName,
	startTime,
	title,
}) {
	return (
		<TouchableHighlight onPress={onPress} underlayColor={theme.color.gray05} activeOpacity={1} style={styles.touchable}>
			<View style={styles.base}>
				<View style={styles.statusBar} />
				<View style={styles.content}>
					<View style={styles.text}>
						<Text style={styles.subtitle}>{startTime} &mdash; {speakerName}</Text>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.right}>
						<Avatar source={speakerAvatarUri} />
						<Icon
							color={theme.color.text}
							name="ios-arrow-forward"
							size={20}
							style={styles.chevron}
						/>
					</View>
				</View>
			</View>
		</TouchableHighlight>
	);
};

const styles = StyleSheet.create({
	touchable: {
		backgroundColor: 'white',
	},
	base: {
		alignItems: 'stretch',
		borderBottomColor: theme.color.gray20,
		borderBottomWidth: 1 / PixelRatio.get(),
		flexDirection: 'row',
	},

	// status [future|present|past]
	statusBar: {
		backgroundColor: theme.color.gray20,
		width: 6,
	},

	// content
	content: {
		alignItems: 'center',
		flexDirection: 'row',
		flexGrow: 1,
		flexShrink: 1,
		padding: theme.fontSize.default,
	},
	text: {
		flexGrow: 1,
		flexShrink: 1,
		paddingRight: theme.fontSize.default,
	},
	subtitle: {
		color: theme.color.gray60,
		fontSize: theme.fontSize.small,
		fontWeight: '300',
		marginBottom: theme.fontSize.small,
	},
	title: {
		color: theme.color.text,
		fontSize: theme.fontSize.default,
	},

	// right (avatar and chevron)
	right: {
		alignItems: 'center',
		flexDirection: 'row',
		flexShrink: 0,
	},

	// chevron
	chevron: {
		marginLeft: theme.fontSize.default,
	},
});