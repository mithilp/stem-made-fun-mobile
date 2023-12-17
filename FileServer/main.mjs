import { ChatGPTAPI } from "chatgpt";
import * as url from "url";
import express from "express";
import cors from "cors";
import fs from "fs";
import env from "dotenv";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
let convID = "";
let lastbook = "";
env.config();
let app = express();
app.use(cors());
app.use(express.json());
const PORT = 2525;
const api = new ChatGPTAPI({
	apiKey: process.env.key,
});

app.get("/", (req, res) => {
	res.send("TEST run");
});
app.post("/AI/Question", (req, res) => {
	console.log(req.body);
	let prompt =
		"You are a teacher answering a students question about the book " +
		req.body.book +
		", answer the students question: " +
		req.body.question;
	let params = {
		prompt: prompt,
	};
	if (req.body.book == lastbook) {
		params = {
			parentMessageId: convID,
		};
	}
	console.log(req.body);
	let question = req.body.question;
	console.log(question);
	api.sendMessage(prompt, params).then((response) => {
		convID = response.parentMessageId;
		res.json(response);
	});
	lastbook = req.body.book;
});
app.get("/Books/:Name", (req, res) => {
	let files = fs.readdirSync("./Data/");
	let name = req.params.Name;
	let found = false;
	files.forEach((file) => {
		if (file.split(".")[1] != "pdf") return;
		let a = file.split(".")[0].split("-");
		if (a[0] == name && !found) {
			res.sendFile(__dirname + "/Data/" + file);
			found = true;
			return;
		}
	});
	if (!found) res.send("404");
});

app.get("/books/", (req, res) => {
	//read all books in the data directory
	let data = [];
	let files = fs.readdirSync("./Data/");
	files.forEach((file) => {
		if (file.split(".")[1] != "pdf") return;
		let a = file.split(".")[0].split("-");
		let o = {
			title: a[0],
			author: a[1],
			pages: a[2],
		};
		data.push(o);
	});
	console.log(data);
	res.json(data);
});
app.get("/File/:Name", (req, res) => {
	res.sendFile(__dirname + "/Data/" + req.params.Name);
});
app.get("/File/Image/:Name", (req, res) => {
	res.sendFile(__dirname + "/Data/Image/" + req.params.Name);
});
app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
});
