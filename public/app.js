import { generateText } from "./api.js";

const sendButton = document.querySelector(".fas.fa-share");
const [textarea] = document.getElementsByTagName("textarea");
const middleBottom = document.querySelector(".middle-bottom"); // 메시지 목록을 추가할 부모 컨테이너
const middleSpace = document.querySelector(".middle-space");


sendButton.addEventListener("click", sendMessage);

textarea.addEventListener("keydown", (event)=>{
    if(event.key == "Enter" && !event.shiftKey){
        event.preventDefault(); // 기본 enter 방지
        sendMessage();
    }
});

async function sendMessage() {
    console.log("start");
    const inputValue = textarea.value.trim(); 
    if(inputValue){
        // 새로운 메시지 생성
        const newMessage = document.createElement("div");
        newMessage.classList.add("middle-bottom-chatting1");

        newMessage.innerHTML = `
                    <div class="middle-bottom-chatting1-icon">
                        <img
                            src="annonymous.png"
                            alt="Woori FG Logo"
                        />
                    </div>
                    <div class="middle-bottom-chatting1-inputbox">
                        <div class="middle-bottom-chatting1-information">
                            <div class="middle-bottom-chatting1-information-user">
                                서비스_유승한
                            </div>
                            <div class="middle-bottom-chatting1-information-time">
                                ${getCurrentTime()}
                            </div>
                        </div>
                        <div>
                            <div class="middle-bottom-chatting1-chattingbox">
                                ${inputValue}
                            </div>
                        </div>
                    </div>
                `;

                middleBottom.appendChild(newMessage);

                // 스크롤을 맨 아래로 이동
                scrollToBottom();

                
                // ChatGPT 응원 메시지 생성
                const aiResponse = await generateText(inputValue);

                // AI 응원 메시지 추가
                const aiMessage = document.createElement("div");
                aiMessage.classList.add("middle-bottom-chatting1");
                aiMessage.innerHTML = `
                    <div class="middle-bottom-chatting1-icon">
                        <img
                            src="https://www.woorifg.com/files/upload/2022/4/202204250255341130.jpg"
                            alt="Woori FG Logo"
                        />
                    </div>
                    <div class="middle-bottom-chatting1-inputbox">
                        <div class="middle-bottom-chatting1-information">
                            <div class="middle-bottom-chatting1-information-user">
                                IU
                            </div>
                            <div class="middle-bottom-chatting1-information-time">
                                ${getCurrentTime()}
                            </div>
                        </div>
                        <div>
                            <div class="middle-bottom-chatting1-chattingbox">
                                ${aiResponse}
                            </div>
                        </div>
                    </div>
                `;
                middleBottom.appendChild(aiMessage);


                // 스크롤을 맨 아래로 이동
                scrollToBottom();

                textarea.value="";
        
    } else{
        console.warn("메시지를 입력하세요.");
    }

}


function getCurrentTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const period = hours >= 12 ? "오후" : "오전";
    hours = hours % 12 || 12; // 12시간제
    return `${period} ${hours}:${minutes}`;
}

function scrollToBottom() {
    middleSpace.scrollTop = middleSpace.scrollHeight;
}

