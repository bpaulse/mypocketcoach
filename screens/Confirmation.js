import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Link } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';

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
	AddUserTitle,
	AddUserIcon,
	AppDescriptionHeaderText,
	AppDescriptionText
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary, black } = appColors;

// Confirmation component

const Confirmation = ({navigation}) => {

	const [hidePassword, setHidePassword] = useState(true);

	// This component will render the Confirmation screen
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

	const initialValues = { confirmation: '' };

	return (
		<StyledContainer>
			<InnerContainer>
				
				<AddUserTitle>
					<AddUserIcon>
						<Ionicons name="mail-unread-outline" size={36} color="white" />
					</AddUserIcon>
				</AddUserTitle>

				<AppDescriptionHeaderText>
					Check your inbox
				</AppDescriptionHeaderText>

				<AppDescriptionText>
					We've sent a confirmation link to your<br />email. Click it to activate your account.
				</AppDescriptionText>

				<Formik
					initialValues={{ confirmation: '' }}
					onSubmit={(values) => {
						// console.log(values);
						console.log('Form submitted 2');
						// navigation.navigate('Welcome');
					}}
				>
					{
						(handleChange, handleBlur, handleSubmit3, values) => <StyledFormArea>
							<MyTextInput
								label="Confirmation Code" 
								icon="lock" 
								placeholder="Email Confirnmation Link" 
								placeholderTextColor={darkLight} 
								// onChangeText={handleChange('email')} 
								// onBlur={handleBlur('email')} 
								// value={values.confirmation} 
								keyBoardType="text" 
							/>

							<StyledButton onPress={() => navigation.navigate('Welcome')}>
								<ButtonText>Complete Registration</ButtonText>
							</StyledButton>


							<StyledButton onPress={handleSubmit}>
								<ButtonText><Ionicons name="send" size={24} color="white" /> Resend Email</ButtonText>
							</StyledButton>

							<br />
							<br />


							<TextLink onPress={() => navigation.navigate('Login')}>
								<TextLinkContent>Back to Login</TextLinkContent>
							</TextLink>

							<ExtraView>
								<ExtraText>Didn't receive the email? </ExtraText>
								<TextLink>
									<TextLinkContent>Check spam folder</TextLinkContent>
								</TextLink>
								{/* <TextLink>
									<TextLinkContent>Contact Support</TextLinkContent>
								</TextLink> */}
							</ExtraView>

						</StyledFormArea>
					}
				</Formik>

				{/* <PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" /> */}

				<TouchableOpacity onPress={() => navigation.navigate('Landing')}>
					<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />
				</TouchableOpacity>


			</InnerContainer>
		</StyledContainer>
	)	
}

export default Confirmation;
