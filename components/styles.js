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
	brand: '#6D28D9',
	green: '#10B981',
	red: '#EF4444',
};

const { primary, secondary, tertiary, darkLight, brand, green, red } = appColors;

export const StyledContainer = styled.View`
	flex: 1;
	padding: 25px;
	padding-top: ${statusBarHeight + 30}px;
	background-color: ${primary};
`;

export const InnerContainer = styled.View`
	flex: 1;
	width: 100%;
	align-items: center;
`;

export const WelcomeContainer = styled(InnerContainer)`
	padding: 25px;
	padding-top: 10px;
	justify-content: center;
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
	width: 100%;
`;


export const PageLogo = styled.Image`
	width: 128px;
	height: 64px;
`;


export const PageTitle = styled.Text`
	font-size: 30px;
	text-align: center;
	font-weight: bold;
	color: ${brand};
	padding: 10px;
	margin-bottom: 10px;

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

export const PageText = styled.Text`
	font-size: 14px;
	color: ${darkLight};
	text-align: center;
	margin-top: 40px;
	margin-bottom: 40px;
`;

export const ButtonText = styled.Text`
	color: ${primary};
	font-size: 16px;
	${props => props.google === true && `
		padding: 25px;
	`}
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