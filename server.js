import HTTP from "superagent";
import express, { json } from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use("/api", express.static("public/api"));
app.use(json());

// lh:3-/로 접속 시 응답할 핸들러(엔드포인트)
app.get("/", (_, response) => {
	response.sendFile("main-page.html");
});

app.listen(port, () =>
	console.log(
		`http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`,
	),
);
