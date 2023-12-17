import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	Pressable,
	Button,
	FlatList,
	Image,
	TextInput,
} from "react-native";
import WebView from "react-native-webview";
const api = "http://10.0.0.139:2525";

export default function ReadBook(props) {
	const [response, changeResponse] = useState(" ");
	const [text, onChangeText] = React.useState("Ask the AI a question");
	const [bottomPosition, changeBottomPosition] = useState("0");
	let book = api + "/Books/" + props.route.params.book;
	console.log(book);
	let bottom = (
		<View
			style={{
				bottom: bottomPosition + "%",
				padding: 10,
				display: "flex",
				flexDirection: "row",
				alignItems: "Center",
				width: "100%",
				height: "10%",
				backgroundColor: "black",
				position: "fixed",
				left: 0,
			}}
		>
			<TextInput
				onSubmitEditing={() => {
					fetch(api + "/AI/Question", {
						method: "POST",
						body: JSON.stringify({
							question: text,
							book: props.route.params.book,
						}),
						headers: {
							"Content-Type": "application/json",
						},
					})
						.then((response) => response.json())
						.then((responseText) => {
							console.log(responseText);
							let response = responseText.text;
							if (response.length > 275) {
								response = response.substring(0, 275);
							}
							changeBottomPosition("35");
							onChangeText(" ");
							changeResponse(response);
							//change the  style of the bottom object
						});
				}}
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
			<Button
				style={{ padding: "5px", position: "relative" }}
				title="Close"
				onPress={() => {
					if (bottomPosition == "35") {
						changeBottomPosition("0");
					} else {
						props.navigation.navigate("Library");
					}
				}}
			></Button>
		</View>
	);
	return (
		<View style={styles.holder}>
			<WebView
				scalesPageToFit={true}
				bounces={false}
				javaScriptEnabled
				style={styles.frame}
				source={{
					html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv">
                        <iframe style="width:100vw;height:100vh;" src="${book}" title="Book"></iframe>
                    </div> 
                    </body>
                  </html>
            `,
				}}
				automaticallyAdjustContentInsets={false}
			/>

			{bottom}
			<Text
				style={{
					position: "fixed",
					height: "30",
					bottom: bottomPosition - 25 + "%",
					left: "0%",
					color: "white",
					backgroundColor: "black",
					fontSize: 20,
					textAlign: "center",
				}}
			>
				{response}
			</Text>
		</View>
	);
}
let styles = StyleSheet.create({
	input: {
		position: "relative",
		width: "80%",
		height: "80%",
		backgroundColor: "white",
	},
	holder: {
		width: "100%",
		height: "100%",
	},
	frame: {
		width: "100%",
		height: "100%",
	},
});
