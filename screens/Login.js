import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Link } from 'react-native';

import { Formik } from 'formik';

import MyTextInput from '../components/MyTextInput';

// import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

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
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary } = appColors;

// Login component

const Login = ({navigation}) => {

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
		console.log('Form submitted 3');
		navigation.navigate('Welcome');
	}

	const initialValues = { email: '', password: '' };

	return (
		<StyledContainer>
			<InnerContainer>
				{/* <StatusBar style="dark" /> */}
				<WelcomeImage source={require('./../assets/welcome-page-img.png')} resizeMode="contain" />
				<PageTitle>Welcome to My PocketCoach!</PageTitle>
				<PageText>Unlock your personal mastery journey with expert coaching and guided growth.</PageText>

				<Formik
					initialValues={{ email: '', password: '' }}
					onSubmit={(values) => {
						// console.log(values);
						console.log('Form submitted 2');
						// navigation.navigate('Welcome');
					}}
				>
					{
						(handleChange, handleBlur, handleSubmit3, values) => <StyledFormArea>
							<MyTextInput
								label="Email Address" 
								icon="mail" 
								placeholder="bevan@iegroup.com" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('email')} 
								// onBlur={handleBlur('email')} 
								// value={values.email} 
								keyBoardType="email-address" 
							/>

							<MyTextInput
								label="Password" 
								icon="lock" 
								placeholder="*********" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('password')} 
								// onBlur={handleBlur('password')} 
								// value={values.email} 
								secureTextEntry={hidePassword} 
								isPassword={true}
								keyBoardType="default" 
								hidePassword={hidePassword} 
								setHidePassword={setHidePassword}
							/>
							<MsgBox>...</MsgBox>

							<StyledButton onPress={handleSubmit}>
								<ButtonText>Login</ButtonText>
							</StyledButton>

							<Line />

							{/* <StyledButton google={true} onPress={handleSubmit}>
								<Fontisto name="google" size={25} color={primary} />
								<ButtonText google={true}>Sign Up with Google</ButtonText>
							</StyledButton> */}

							<ExtraView>
								<ExtraText>Don't have an account? </ExtraText>
								<TextLink onPress={() => navigation.navigate('Signup')}>
									<TextLinkContent>Sign Up</TextLinkContent>
								</TextLink>
							</ExtraView>

						</StyledFormArea>
					}
				</Formik>

				<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />

				{/* Additional components like TextInput, Button, etc. can be added here */}

			</InnerContainer>
		</StyledContainer>
	)	
}

export default Login
