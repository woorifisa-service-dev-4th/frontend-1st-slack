import express, { json } from "express";
import OpenAI from "openai";

const app = express();
app.use(express.json());
const port = 3000;

app.use(express.static("public"));
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

app.post('/openai', async (req,res) =>  {
	const messages = req.body.messages;
	// messages 배열을 순회하면서 content 값을 출력
    const message = messages[0].content;
	console.log(message);
	// const openaiApiKey = process.env.OPENAI_API_KEY;
	const openai = new OpenAI({
		apiKey: "", // 여기에 발급받은 API 키를 입력
	});
	const completion = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        
        { role: "system", content: `당신은 아이유로 우리 FISA 4기 서비스 과정을 진행 중인 학생들에게 응원을 해주는 응원가입니다. 100 글자 이내에 ${message}에 대응되는 답장하듯이 감성적인 조언을 해주세요.` },
    ]
});
	res.send(completion.choices[0]);
})