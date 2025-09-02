import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
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
	LandingPageText,
	LandingPageImage,
	WelcomeContainer,
	LandingPageContainer
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary, black } = appColors;

// Login component

const Landing = ({navigation}) => {

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
		navigation.navigate('Login');
	}

	const initialValues = { email: '', password: '' };

	return (
		<>
			<StatusBar style="dark" />
			<InnerContainer>
				
				<PageTitle>Welcome to<br />My PocketCoach!</PageTitle>
				
				<LandingPageText>
					Unlock your personal mastery journey with expert coaching and guided growth.
				</LandingPageText>

				<LandingPageImage source={require('./../assets/welcome-page-img.png')} resizeMode="contain" />

				<LandingPageContainer>
					<StyledFormArea>

						<StyledButton onPress={handleSubmit}>
							<ButtonText>Login</ButtonText>
						</StyledButton>

						<Line />

						<ExtraView>
							<ExtraText>Don't have an account? </ExtraText>
							<TextLink onPress={() => navigation.navigate('AppDescription')}>
								<TextLinkContent>Sign Up</TextLinkContent>
							</TextLink>
						</ExtraView>

					</StyledFormArea>

				</LandingPageContainer>

				<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />

			</InnerContainer>
		</>
	)	
}

export default Landing;
