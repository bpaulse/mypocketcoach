import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

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
	AppDescriptionTitle,
	AppDescriptionIcon,
	AppDescriptionHeaderText,
	AppDescriptionText,
	LandingPageContainer,
	LandingPageImage,
	ButtonsContainer,
	LeftContainer,
	RightContainer,
	StyledButtonAppDesc,
	IndicatorContainer,
	Indicator
} from '../components/styles';

// Colors object for consistent color usage
const { brand, darkLight, primary, secondary, black } = appColors;

// Login component

const AppDescriptionFinal = ({navigation}) => {

	const handleSubmit = () => {
		navigation.navigate('Login');
	}

	return (
		<>
			<StatusBar style="dark" />
			<InnerContainer>
				
				<AppDescriptionTitle>
					<AppDescriptionIcon>
						<Ionicons name="people" size={48} color="white" />
					</AppDescriptionIcon>
				</AppDescriptionTitle>
				
				<AppDescriptionHeaderText>
					Expert coaching across<br /> 
					leadership,<br /> 
					communication, and<br /> 
					mindset
				</AppDescriptionHeaderText>

				<AppDescriptionText>
					Unlock Your Potential, <br />
					One Bold Step at a Time.
				</AppDescriptionText>

				<IndicatorContainer>
					<Indicator><Octicons name="dot-fill" size={24} color="#000000" /></Indicator>
					<Indicator><Octicons name="dot-fill" size={24} color="#000000" /></Indicator>
					<Indicator><Octicons name="dot-fill" size={24} color="#EF832F" /></Indicator>
				</IndicatorContainer>

				<LandingPageContainer>
					<StyledFormArea>

						<ButtonsContainer>
							<LeftContainer>
								<TextLink onPress={() => navigation.navigate('AppDescriptionMore')}>
									<TextLinkContent>Back</TextLinkContent>
								</TextLink>
							</LeftContainer>
							<RightContainer>
								<StyledButtonAppDesc onPress={() => navigation.navigate('Signup')}>
									<ButtonText>Sign Up</ButtonText>
								</StyledButtonAppDesc>
							</RightContainer>
						</ButtonsContainer>

					</StyledFormArea>

				</LandingPageContainer>

				<TouchableOpacity onPress={() => navigation.navigate('Landing')}>
					<PageLogo source={require('./../assets/iegroup-logo.png')} resizeMode="contain" />
				</TouchableOpacity>
				

			</InnerContainer>
		</>
	)	
}

export default AppDescriptionFinal;