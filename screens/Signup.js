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
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary } = appColors;

// Login component

const Signup = ({navigation}) => {

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
		// navigation.navigate('Welcome');
	}

	const initialValues = { email: '', password: '' };

	return (
		<StyledContainer>
			<InnerContainer>
				{/* <StatusBar style="dark" /> */}
				<WelcomeImage source={require('./../assets/welcome-page-img.png')} resizeMode="contain" />
				<PageTitle>Welcome to My PocketCoach!</PageTitle>

				<SubTitle>Account Sign Up</SubTitle>

				{/* <Link>Sign Up -{'>'} </Link> */}

				<Formik
					initialValues={{ fullName: '', dateOfBirth: '', email: '', password: '', confirmPassword: '' }}
					
					onSubmit={(values) => {
						console.log(values);
						// navigation.navigate('Welcome');
					}}
				>
					{
						(handleChange, handleBlur, handleSubmit, values) => <StyledFormArea>

							<MyTextInput
								label="Full Name" 
								icon="person" 
								placeholder="Richard Barnes" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('FullName')} 
								// onBlur={handleBlur('FullName')} 
								// value={values.FullName} 
							/>

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
								label="Date of Birth" 
								icon="calendar" 
								placeholder="YYYY-MM-DD" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('dateOfBirth')} 
								// onBlur={handleBlur('dateOfBirth')} 
								// value={values.dateOfBirth} 
							/>

							<MyTextInput
								label="Password" 
								icon="lock" 
								placeholder="*********" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('password')} 
								// onBlur={handleBlur('password')} 
								// value={values.password} 
								secureTextEntry={hidePassword} 
								isPassword={true}
								keyBoardType="default" 
								hidePassword={hidePassword} 
								setHidePassword={setHidePassword}
							/>

							<MyTextInput
								label="Confirm Password" 
								icon="lock" 
								placeholder="*********" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('confirmPassword')} 
								// onBlur={handleBlur('confirmPassword')} 
								// value={values.confirmPassword} 
								secureTextEntry={hidePassword} 
								isPassword={true}
								keyBoardType="default" 
								hidePassword={hidePassword} 
								setHidePassword={setHidePassword}
							/>
							<MsgBox>...</MsgBox>

							<StyledButton onPress={handleSubmit}>
								<ButtonText>Signup</ButtonText>
							</StyledButton>

							<Line />

							<ExtraView>
								<ExtraText>Already have an account? </ExtraText>
								<TextLink onPress={() => navigation.navigate('Login')}>
									<TextLinkContent>Login</TextLinkContent>
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

export default Signup;
