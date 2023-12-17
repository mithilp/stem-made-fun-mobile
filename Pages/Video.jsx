import React from "react";
import {
	ScrollView,
	StyleSheet,
	View,
	Image,
	Text,
	TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// Updated video data with titles and descriptions
const videoData = [
	{
		src: "https://www.youtube.com/embed/TcrAJNnWQvc",
		title: "SMF Science and Beyond Unit 2 Lesson 6",
		description: "A deep dive into the intricacies of penny batteries.",
	},
	{
		src: "https://www.youtube.com/embed/5IxkjfIgqAU",
		title: "SMF Science and Beyond Unit 2 Lesson 5",
		description: "Exploring the key concepts of electromagnetics.",
	},
	{
		src: "https://www.youtube.com/embed/8B6_uY21MSQ",
		title: "SMF Science and Beyond Unit 2 Lesson 3",
		description: "A look into the basics of circuitry",
	},
	{
		src: "https://www.youtube.com/embed/6ToBe6uGV4g",
		title: " SMF Science & Beyond Unit 1 Lesson 2",
		description: "Explaining the physics behind friction and air",
	},
];

const Video = (props) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Videos</Text>
			<ScrollView style={styles.videoHolder}>
				{videoData.map((video, index) => (
					<View key={index} style={styles.videoItem}>
						<Image
							source={{ uri: video.thumbnail }} // You'll need to add a thumbnail property to your videoData objects
							style={styles.videoImage}
						/>
						<View style={styles.videoInfo}>
							<Text style={styles.videoTitle}>{video.title}</Text>
							<Text style={styles.description}>{video.description}</Text>
							{/* <iframe
                style={styles.video}
                src={video.src}
                title={video.title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              /> */}
						</View>
					</View>
				))}
			</ScrollView>
			<LinearGradient colors={["#4C566A", "#2F3541"]} style={styles.navBar}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate("Home")}
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
	videoHolder: {
		paddingBottom: "25%",
		width: "92%",
		height: "85%",
		marginLeft: "4%",
		textAlign: "center",
	},
	videoItem: {
		marginBottom: 20,
		flexDirection: "row",
		backgroundColor: "#4C566A",
		borderRadius: 10,
		overflow: "hidden",
		alignItems: "center",
		borderColor: "#FFFFFF54",
		borderWidth: 2,
		padding: 10,
	},
	videoInfo: {
		flex: 1,
		paddingHorizontal: 10,
	},
	videoTitle: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#FFF",
		marginBottom: 5,
	},
	description: {
		fontSize: 14,
		color: "#CCC",
		marginBottom: 15,
	},
	video: {
		aspectRatio: 16 / 9,
		width: "100%",
		borderWidth: 0,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "white",
		textAlign: "left",
		padding: "5%",
		width: "100%",
	},
	container: {
		position: "absolute",
		top: 0,
		left: 0,
		width: "100%",
		height: "100%",
		backgroundColor: "#172030",
	},
	nav1: {
		width: "45px",
		height: "45px",
		marginTop: "6%",
		marginLeft: "5%",
	},
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
	// ... your other styles remain unchanged
});

export default Video;
