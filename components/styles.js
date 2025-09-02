import { StyleSheet } from 'react-native';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

const statusBarHeight = Constants.statusBarHeight;

// colors
export const appColors = {
	primary: '#ffffff',
	secondary: '#E5E7EB',
	tertiary: '#1F2937',
	darkLight: '#9CA3AF',
	brand: '#EF832F',
	green: '#10B981',
	red: '#EF4444',
	blackText: '#121212'
};

const { primary, secondary, tertiary, darkLight, brand, green, red, blackText } = appColors;

export const StyledContainer = styled.View`
	flex: 1;
	padding: 10px;
	padding-top: ${statusBarHeight + 10}px;
	background-color: ${primary};
`;

export const InnerContainer = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
	background-color: ${primary};
`;

export const WelcomeContainer = styled(InnerContainer)`
	padding: 25px;
	padding-top: 0px;
	justify-content: center;
`;

export const LandingPageContainer = styled.View`
	flex: 0.3;
	width: 100%;
	align-items: center;
	justify-content: center;
	background-color: ${primary};
`;

export const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	margin: auto;
	border-radius: 50px;
	border-width: 2px;
	border-color: ${secondary};
	margin-bottom: 10px;
	border-radius: 10px;
`;

export const WelcomeImage = styled.Image`
	height: 50%;
	width: 75%;
	border: 1px solid black;
`;

export const LandingPageImage = styled.Image`
	height: 300px;
	width: 75%;
`;


export const PageLogo = styled.Image`
	width: 128px;
	height: 64px;
`;


export const PageTitle = styled.Text`
	font-size: 40px;
	text-align: center;
	font-weight: bold;
	color: ${brand};
	padding: 10px;
	margin-top: 70px;
	margin-bottom: 20px;

	${(props) => props.welcome && `
		font-size: 35px;
	`}
`;

export const SubTitle = styled.Text`
	font-size: 18px;
	margin-bottom: 20px;
	letter-spacing: 1px;
	font-weight: bold;
	color: ${tertiary};

	${(props) => props.welcome && `
		margin-bottom: 5px;
		font-weight: normal;
	`}
`;

export const StyledFormArea = styled.View`
	width: 80%;
`;

export const StyledTextInput = styled.TextInput`
	
	background-color: ${secondary};
	padding: 15px;
	padding-left: 55px;
	padding-right: 55px;
	border-radius: 5px;
	font-size: 16px;
	height: 60px;

	margin-vertical: 3px;
	margin-bottom: 10px;

	border-width: 1px;
	border-color: ${darkLight};
	color: ${tertiary};
`;

export const StyledInputLabel = styled.Text`
	color: ${tertiary};
	font-size: 13px;
	text-align: left;
`;

export const LeftIcon = styled.View`
	position: absolute;
	left: 15px;
	top: 38px;
	z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
	position: absolute;
	right: 15px;
	top: 38px;
	z-index: 1;
`;

export const StyledButton = styled.TouchableOpacity`
	padding: 15px;
	background-color: ${brand};
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	align-items: center;
	margin-vertical: 5px;
	height: 60px;
	${props => props.google === true && `
		background-color: ${green};
		flex-direction: row;
		justify-content: center;
	`}
`;



export const StyledButtonAppDesc = styled.TouchableOpacity`
	padding: 15px;
	background-color: ${brand};
	border-radius: 5px;
	align-items: center;
	justify-content: center;
	align-items: center;
	margin-vertical: 5px;
	height: 60px;
	width: 80%;
`;

export const PageText = styled.Text`
	font-size: 14px;
	color: ${blackText};
	text-align: center;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const LandingPageText = styled.Text`
	width: 75%;
	height: 100px;
	font-size: 20px;
	color: ${blackText};
	text-align: center;
	margin-top: 40px;
	margin-bottom: 30px;
`;

export const ButtonText = styled.Text`
	color: ${primary};
	font-size: 16px;
	${props => props.google === true && `
		padding: 25px;
	`}
`;

export const AppDescriptionTitle = styled.View`
	margin-top: 60px;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 100%;
	align-items: center;
	justify-content: center;
	width: 250px;
`;

export const AppDescriptionIcon = styled.View`
	width: 150px;
	height: 150px;
	border-radius: 15px;
	background-color: ${brand};
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;



export const AddUserTitle = styled.View`
	margin-top: 60px;
	padding-top: 10px;
	padding-bottom: 10px;
	width: 100%;
	align-items: center;
	justify-content: center;
	width: 250px;
`;

export const AddUserIcon = styled.View`
	width: 100px;
	height: 100px;
	border-radius: 10px;
	background-color: ${brand};
	text-align: center;
	align-items: center;
	justify-content: center;
	margin-bottom: 10px;
`;

export const AppDescriptionHeaderText = styled.Text`
	margin-top: 26px;
	bottom-top: 26px;
	height: 145px;
	font-size: 24px;
	text-align: center;
	color: ${blackText};
	font-weight: bold;
	width: 80%;
`;

export const AppDescriptionText = styled.Text`
	margin-top: 20px;
	color: ${darkLight};
	font-size: 16px;
	text-align: center;
	height: 100px;
	width: 80%;
`;

export const ButtonsContainer = styled.View`
	flex: 0.5;
	width: 100%;
	align-items: center;
	justify-content: center;
	flex-direction: row;
`;

export const LeftContainer = styled.Text`
	width: 200px;
	text-align: center;
	border: 0px solid black;
`;

export const RightContainer = styled.Text`
	width: 200px;
	text-align: center;
	border: 0px solid black;
`;

export const IndicatorContainer = styled.View`
	flex: 0.03;
	flex-direction: row;
	width: 50%;
	align-items: center;
	justify-content: center;
`;

export const Indicator = styled.View`
	width: 10px;
	height: 10px;
	margin: 5px;
`;

export const MsgBox = styled.Text`
	text-align: center;
	font-size: 13px;
`;

export const Line = styled.View`
	height: 1px;
	width: 100%;
	background-color: ${darkLight};
	margin-vertical: 10px;
`;

export const ExtraView = styled.View`
	justify-content: center;
	flex-direction: row;
	align-items: center;
	padding: 10px;
`;

export const ExtraText = styled.Text`
	justify-content: center;
	align-content: center;
	color: ${tertiary};
	font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
	justify-content: center;
	align-items: center;
`;

export const TextLinkContent = styled.Text`
	color: ${brand};
	font-size: 15px;
`;

export default StyleSheet