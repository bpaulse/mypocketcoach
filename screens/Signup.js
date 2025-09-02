import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Link, TouchableOpacity } from 'react-native';

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
	AddUserTitle,
	AddUserIcon,
	AppDescriptionHeaderText,
	AppDescriptionText
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary, black } = appColors;

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
		navigation.navigate('Confirmation');
	}

	const initialValues = { email: '', password: '' };

	return (
		<StyledContainer>
			<InnerContainer>

				<AddUserTitle>
					<AddUserIcon>
						<Ionicons name="add-circle" size={36} color="white" />
					</AddUserIcon>
				</AddUserTitle>

				<AppDescriptionHeaderText>
					Your journey starts here
				</AppDescriptionHeaderText>

				<AppDescriptionText>
					Join thousands discovering their potential with My Pocket Coach
				</AppDescriptionText>

				<Formik
					initialValues={{ fullName: '', email: '', password: '' }}
					
					onSubmit={(values) => {
						console.log(values);
						// navigation.navigate('Welcome');
					}}
				>
					{
						(handleChange, handleBlur, handleSubmit3, values) => <StyledFormArea>

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

							{/* <MyTextInput
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
							/> */}
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

				<TouchableOpacity onPress={() => navigation.navigate('Landing')}>
					<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />
				</TouchableOpacity>
				

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
