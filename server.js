import HTTP from "superagent";
import express, { json } from "express";
import OpenAI from "openai";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(json());

// lh:3-/로 접속 시 응답할 핸들러(엔드포인트)
app.get("/", (_, response) => {
	response.sendFile("index.html");
});

app.listen(port, () =>
	console.log(
		`http://127.0.0.1:${port}/ 서버 프로세스가 3000번 포트에서 실행 중입니다.`,
	),
);

app.post('/openai', async (req,res) =>  {
	const messages = req.body.messages;
	// messages 배열을 순회하면서 content 값을 출력
    const message = messages[0].content;

	console.log(message);
	const openaiApiKey = process.env.OPENAI_API_KEY;
	const openai = new OpenAI({
		apiKey: openaiApiKey, // 여기에 발급받은 API 키를 입력
	});
	const completion = await openai.chat.completions.create({
		messages: [{ role: "developer", content: `${message}` }],
		model: "gpt-3.5-turbo",
	});
	res.send(completion.choices[0]);
})

// //lh:3-/detect/로 요청시 응답한 핸들러 - POST:/detect
// app.post('/detect', (req, res) => {
//     console.log('POST:/detect called');
//     console.log(req.body);

//     // 언어 감지 요청 처리 코드 로직
//     // TODO: 언어 감지 요청 처리 로직
//     const DETECT_LANGUAGE_URL = 'https://naveropenapi.apigw.ntruss.com/langs/v1/dect';
//     const requestBody = {
//         query: req.body.query
//     }


//     const CLIENT_ID = 'lwd4vv7k1c'
//     const CLIENT_SECRET = 'rQaWHJyZNNkEsiE84lWTfiB2WNxmkGPhKqkd6D2Y'

//     HTTP.post(DETECT_LANGUAGE_URL) // 보낼 주소
//         .send(requestBody) // 보낼 내용
//         .set('x-ncp-apigw-api-key-id', CLIENT_ID) // 요청 헤더값 세팅
//         .set('x-ncp-apigw-api-key', CLIENT_SECRET)
//         .end(
//             (error, result) => {
//                 if (result.statusCode == 200) {
//                     // console.log(result.body);
//                     res.send(result.body)
//                 } else {
//                     console.error(error);
//                 }
//             }
//         ) // 응답받은 결과값 취득
// })