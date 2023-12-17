import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {} from "@expo-google-fonts/red-hat-display";
import Library from "./Pages/Library";
import Home from "./Pages/Home";
import ReadBook from "./Pages/ReadBook";
import { LinearGradient } from "expo-linear-gradient";

import AppLoading from "expo-app-loading";

import Video from "./Pages/Video";
export default function App() {
	const Stack = createStackNavigator();

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Library" component={Library} />
				<Stack.Screen name="ReadBook" component={ReadBook} />
				<Stack.Screen name="Video" component={Video} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}
