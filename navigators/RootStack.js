import { appColors } from '../components/styles';
const { primary, tertiary } = appColors;

// React Navigation Setup
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Landing from '../screens/Landing';
import AppDescription from '../screens/AppDescription';
import AppDescriptionMore from '../screens/AppDescriptionMore';
import AppDescriptionFinal from '../screens/AppDescriptionFinal';
import Confirmation from '../screens/Confirmation';

const Stack = createStackNavigator();

const RootStack = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerStyle: { 
						backgroundColor: 'transparent' 
					},
					headerTintColor: tertiary,
					headerTransparent: true,
					headerTitle: '',
					headerLeftContainerStyle: {
						paddingLeft: 20
					},
				}} 
				initialRouteName="Landing"
			>

				<Stack.Screen name="Landing" component={Landing} />
				<Stack.Screen name="Login" component={Login} />
				<Stack.Screen name="Signup" component={Signup} />
				<Stack.Screen name="AppDescription" component={AppDescription} />
				<Stack.Screen name="AppDescriptionMore" component={AppDescriptionMore} />
				<Stack.Screen name="AppDescriptionFinal" component={AppDescriptionFinal} />
				<Stack.Screen name="Confirmation" component={Confirmation} />
				<Stack.Screen options={{ headerTintColor: primary }} name="Welcome" component={Welcome} />

			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootStack;
