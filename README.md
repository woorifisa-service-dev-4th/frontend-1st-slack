# 우리FISA - Frontend Toy Project
---

## 서비스 소개
이 프로젝트는 Slack의 클론 프로젝트입니다. 팀 커뮤니케이션을 위한 다양한 기능을 제공하며, 사용자가 채널을 생성하고 다이렉트 메시지를 주고받을 수 있는 플랫폼을 구현했습니다.(HTML, CSS 구현 완료)
![image](https://github.com/user-attachments/assets/842b4b4b-f2a1-47c8-a6f8-db6640cf6113)

## 팀 소개
|      신희원       |          여은동         |       유승한        |                                                                                            
| :------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   <img src="https://avatars.githubusercontent.com/u/104755384?v=4" width="170" alt="깃허브계정-프로필사진"> |                 <img src="https://avatars.githubusercontent.com/u/59414536?v=4" width="170" alt="깃허브계정-프로필사진">   |                 <img src="https://avatars.githubusercontent.com/u/106146847?v=4" width="170" alt="깃허브계정-프로필사진">  |
|   [@glone0506](https://github.com/glone0506)   |    [@sillonjeu](https://github.com/sillonjeu)  | [@ryuseunghan](https://github.com/ryuseunghan)  |
| Frontend | Frontend | Frontend |

## 데모 링크/ 시연 영상
- [데모 링크](https://woorifisa-service-dev-4th.github.io/frontend-1st-slack/src/main-page.html)
- 시연 영상
![Slack - Chrome 2025-01-03 17-32-20 (1)](https://github.com/user-attachments/assets/702193e6-ebfa-4555-a04d-4a693ec30e71)

## UI 스타일 가이드라인

### 폰트 서체, 폰트 사이즈
- **서체**: 기본 서체이며, 필요에 따라 다른 서체를 사용할 수 있습니다.
- **폰트 사이즈**: 
  - 본문 텍스트: `16px`
  - 헤더 텍스트: `20px`
  - 버튼 텍스트: `14px`

### 컬러 배색
서비스의 주요 컬러 배색은 다음과 같습니다:
- **진한 보라**: `#3A1140`
- **중간 보라**: `#542A59`
- **연한 보라**: `#ECE4F2`
- **회색**: `#F2F2F2`

![컬러 배색](https://github.com/user-attachments/assets/6776a4bc-e041-4422-abce-6ff101ad8433)

## 프로젝트 룰

### Commit Rule - 커밋룰에 따라 작업 내용을 확인하기 쉽도록 작성
- [.gitmessage.txt] 파일을 작성해 커밋룰 적용

### Github Flow 전략 이용 - main과 각 기능별 feat 브랜치로 구분하여 빠른 개발
![image](https://github.com/user-attachments/assets/0f69f9a1-6e1d-4dda-95b6-4bd315c2c561)


## 기능 설명

- **채널 생성 및 관리**: 사용자는 다양한 채널을 생성하고 참여할 수 있습니다. (미구현)
- **다이렉트 메시지(DM)**: 팀원들과 개인적인 메시지를 주고받을 수 있습니다. (미구현)
- **알림**: 새 메시지나 활동에 대한 알림을 실시간으로 제공합니다. (미구현)
- **검색**: 팀 내 모든 채팅 내용을 검색할 수 있습니다. (미구현)
- **현재 정적페이지만 구현되었습니다. 추후 기능 및 JS구현 예정입니다.**

## Lighthouse 성능 지표

![image](https://github.com/user-attachments/assets/917108ac-f051-4fdc-a56c-f200fcdb59e9)

### 개선 전 Lighthouse 성능 지표

![image](https://github.com/user-attachments/assets/94053249-a86a-4c09-874f-95f0be368a01)

### 개선 사항
- 버튼에 접근 가능한 이름 추가 (aria-label 추가로 해결)
- 이미지 요소에 alt 속성 구체화
- 선택 요소에 라벨 요소 추가
- 문서에 메타 설명 추가
