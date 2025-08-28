import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Link } from 'react-native';

import { Formik } from 'formik';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

import { 
	StyledContainer, 
	InnerContainer, 
	PageLogo, 
	PageTitle, 
	WelcomeImage, 
	SubTitle, 
	StyledFormArea,
	LeftIcon,
	RightIcon,
	StyledButton,
	PageText,
	appColors,
	StyledInputLabel,
	StyledTextInput,
	ButtonText,
	MsgBox,
	Line,
	ExtraText,
	ExtraView,
	TextLink,
	TextLinkContent,
	WelcomeContainer
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary } = appColors;

// Login component

const Welcome = () => {

	const [hidePassword, setHidePassword] = useState(true);

	// This component will render the login screen
	// It will include a welcome image, title, subtitle, and a form for email input

	const handleChange = (field) => (value) => {
		console.log(`Field: ${field}, Value: ${value}`);
	}

	const handleBlur = (field) => () => {
		console.log(`Field: ${field} blurred`);
	}

	const handleSubmit = () => {
		console.log('Form submitted');
	}

	const initialValues = { email: '', password: '' };

	return (
		<>
			<StatusBar style="dark" />
			<InnerContainer>
				<WelcomeImage source={require('./../assets/welcome-page-img.png')} resizeMode="contain" />
				<PageTitle>Welcome to My PocketCoach!</PageTitle>
				<PageText>Unlock your personal mastery journey with expert coaching and guided growth.</PageText>

				<WelcomeContainer>
					<StyledFormArea>


						<StyledButton onPress={handleSubmit}>
							<ButtonText>Login</ButtonText>
						</StyledButton>

						{/* <Line /> */}

						<ExtraView>
							<ExtraText>Don't have an account? </ExtraText>
							<TextLink>
								<TextLinkContent>Sign Up</TextLinkContent>
							</TextLink>
						</ExtraView>

					</StyledFormArea>

				</WelcomeContainer>

				<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />
				{/* Additional components like TextInput, Button, etc. can be added here */}

			</InnerContainer>
		</>
	)	
}

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
}

export default Welcome;
