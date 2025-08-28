import { StyleSheet, Text, View, Link } from 'react-native';
import React from 'react';
import { Octicons, Ionicons } from '@expo/vector-icons';

import { appColors, LeftIcon, RightIcon, StyledInputLabel, StyledTextInput } from './styles';

const { brand, darkLight, primary, secondary } = appColors;

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, ...props}) => {
	return (
		<View>
			<LeftIcon>
				<Octicons name={icon} size={30} color={brand} />
			</LeftIcon>

			<StyledInputLabel>{label}</StyledInputLabel>

			<StyledTextInput {...props} />

			{ isPassword && (
				<RightIcon onPress={() => setHidePassword(!hidePassword)}>
					<Ionicons name={hidePassword ? 'eye-off' : 'eye'} size={30} color={darkLight} />
				</RightIcon>
			) }

		</View>
	);
};

export default MyTextInput;