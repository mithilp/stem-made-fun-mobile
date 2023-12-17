import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableOpacity,
	ScrollView,
	Linking,
} from "react-native";
import WebView from "react-native-webview";

const bookCoverImage = require("../FileServer/Data/Image/sciencebook.webp"); // Update the path if necessary
const websiteImage = require("../FileServer/Data/Image/website.png");

const Home = (props) => {
	// Hardcoded last watched video and read book data
	const lastWatchedVideo = {
		src: "https://www.youtube.com/embed/TcrAJNnWQvc",
		title: "SMF Science and Beyond Unit 2 Lesson 6",
		description: "A deep dive into the intricacies of penny batteries.",
		thumbnail: "path-to-thumbnail.jpg", // You should replace this path with the actual path to your video thumbnail
	};

	const lastReadBook = {
		title: "Science and Beyond",
		author: "Daren S. Starnes",
		pages: "858",
		size: "45MB",
		source: "../FileServer/Data/Image/One.jpg", // This path should be the actual path to your book cover image
	};

	return (
		<View style={styles.container}>
			<ScrollView style={styles.scroller}>
				<Text style={styles.header}>Home</Text>

				<TouchableOpacity
					onPress={() =>
						Linking.openURL("https://www.stemmadefun.com/subjects")
					}
					style={styles.box}
				>
					<Text style={styles.subHeader}>Visit Our Website!</Text>
					<Image source={websiteImage} style={styles.website} />
					<Text style={styles.title}>{lastReadBook.title}</Text>
				</TouchableOpacity>
				<View style={styles.contentContainer}>
					<TouchableOpacity
						onPress={() => props.navigation.navigate("Library")}
						style={styles.box}
					>
						<Text style={styles.subHeader}>Last Read Book</Text>
						<Image source={bookCoverImage} style={styles.bookCover} />
						<Text style={styles.title}>{lastReadBook.title}</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => props.navigation.navigate("Video")}
						style={styles.box}
					>
						<Text style={styles.subHeader}>Last Watched Video</Text>

						<WebView
							scalesPageToFit={true}
							bounces={false}
							javaScriptEnabled
							style={{ height: 200, width: 300 }}
							source={{
								html: `
                  <!DOCTYPE html>
                  <html>
                    <head></head> 
                    <body>
                      <div id="baseDiv">
											<iframe width="100%" height="600" src="${lastWatchedVideo.src}"></iframe>
											
											</div> 
                    </body>
                  </html>
            `,
							}}
							automaticallyAdjustContentInsets={false}
						/>
						<Text style={styles.title}>{lastWatchedVideo.title}</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
			<LinearGradient colors={["#4C566A", "#2F3541"]} style={styles.navBar}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Library")}
					style={styles.navStyle1}
				>
					<Image
						source={{
							uri: "https://drive.google.com/uc?export=download&id=1LkxU8GOt_hAzKyqa5qJSObhSdpe6EvBz",
						}}
						style={styles.nav1}
					></Image>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Library")}
					style={styles.navStyle2}
				>
					<Image
						source={{
							uri: "https://drive.google.com/uc?export=download&id=1JkkuGjJC4PuG9xLju_yJwckmzLqXEd5-",
						}}
						style={styles.nav2}
					></Image>
				</TouchableOpacity>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Video")}
					style={styles.navStyle3}
				>
					<Image
						source={{
							uri: "https://drive.google.com/uc?export=download&id=1OTC__Y92Rq8LGlgSFeJHDcktWT9YkiQE",
						}}
						style={styles.nav3}
					></Image>
				</TouchableOpacity>
			</LinearGradient>
		</View>
	);
};

const styles = StyleSheet.create({
	navBar: {
		bottom: "-2px",
		position: "fixed",
		overflowy: "hidden",
		height: "10%",
		borderBottomLeftRadius: "0px",
		borderBottomRightRadius: "0px",
		borderTopLeftRadius: "40px",
		borderTopRightRadius: "40px",
		flex: 1,
		alignContent: "center",
		flexDirection: "row",
		width: "100%",
	},
	nav1: {
		width: "45px",
		height: "45px",
	},
	navStyle1: {
		marginTop: "6%",
		marginLeft: "5%",
	},
	nav2: {
		width: "50px",
		height: "45px",
	},
	navStyle2: {
		marginTop: "6%",
		marginLeft: "28%",
	},
	nav3: {
		width: "66px",
		height: "45px",
	},
	navStyle3: {
		marginTop: "6%",
		marginLeft: "23%",
	},
	container: {
		flex: 1,
		backgroundColor: "#172030",
	},
	website: {
		width: 300,
		height: 150,
	},
	scroller: {
		width: "92%",
		height: "85%",
		marginLeft: "4%",
		textAlign: "center",
	},
	header: {
		fontSize: 50,
		fontWeight: "bold",
		color: "white",
		margin: 20,
		textAlign: "left",
		marginTop: 10,
	},
	buttonContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
		marginBottom: 20,
		marginTop: 20,
	},
	contentContainer: {
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 20,
		paddingBottom: 20,
		width: "100%",
	},
	box: {
		backgroundColor: "rgba(108, 117, 125, 0.7)", // Translucent gray box
		borderRadius: 10,
		padding: 10,
		alignItems: "center",
		marginBottom: 20,
	},
	subHeader: {
		fontSize: 20,
		color: "white",
		marginTop: 10,
		marginBottom: 20,
	},
	title: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFF",
		marginBottom: 10,
		marginTop: 20,
	},
	bookCover: {
		width: 150,
		height: 220,
		borderRadius: 10,
	},
	videoThumbnail: {
		width: 300,
		height: 169, // 16:9 aspect ratio
		borderRadius: 10,
	},
});

export default Home;
