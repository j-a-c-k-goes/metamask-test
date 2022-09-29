// SERVER
import "dotenv/config"
import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT;
const app = express();
const router = express.Router();
app.use("/", router, cors());
app.use(express.static(path.join(__dirname, 'public')));
app.get("/", function(request, response, next){
	// response.sendFile(path.join(__dirname+"/public/index.html"));
	response.render("index.html");
});
app.get("/css/", function(request, response){
	response.render("main.css");
});
app.get("/js/", function(request, response, next){
	response.render("metamask.js");
});
app.get("/js/", function(request, response, next){
	response.render("button-action.js");
});
app.listen(port, (error)=>{
	(error) ? console.error(error):console.log(`Live @ Port ${port}`);
});

