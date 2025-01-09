
// openai
export const openaiAPI = async (message) => {
    let responseText;
    const url = '/openai';
    // const openaiApiKey = process.env.OPENAI_API_KEY;        // API KEY
    // // fetch API
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', 
            //'Authorization': `Bearer ${openaiApiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",  // 사용할 AI 모델
            messages: [{ role: "user", content: message }],  // 사용자 메시지
            temperature: 0.8,
            max_tokens: 1024,
            top_p: 1,
            frequency_penalty: 0.5,
            presence_penalty: 0.5,
            stop: ["Human"]  // 텍스트 생성 중 멈출 조건
        })
    };
    try {
        const response = await fetch(url, options);  // POST 방식으로 요청 보내기
        const data = await response.json();
        return data.message.content;  // 서버 응답 반환
    } catch (error) {
        console.error("Fetch error:", error);
    }
}