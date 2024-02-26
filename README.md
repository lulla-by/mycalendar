# 📆 My Calandar

## 소개

Todo List 기능을 제공하는 캘린더 웹사이트 입니다!

<a href="https://mycalendar-eight.vercel.app/">My Calandar 바로가기</a> 

## 기간

2024.2.11 ~ 2024.2.19

## skills
<div style ={{display:"flex"}}>
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=black"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=black"/>
  <img src="https://img.shields.io/badge/Recoil-3578E5?style=flat-square&logo=recoil&logoColor=black"/>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=black"/>
  <img src="https://img.shields.io/badge/vercel-000000?style=flat-square&logo=vercel&logoColor=white"/>


## 학습 목표

1) 라이브러리 없이 달력 구현
   - 라이브러리로 달력 구현시 커스텀 제작에 한계가 있다는 블로그 포스팅을 보았습니다.
   - 학습을 위해 캘린더 라이브러리와 날짜 라이브러리 없이 Date 객체로 캘린더를 구현했습니다.

2) localstorage
    - 할 일 목록과 달력을 제공하는 간단한 웹 사이트로 개인이 사용할 것이라 생각했습니다.
    - 로그인/회원가입 과정없이 localstorage를 활용해 데이터를 저장했습니다.
    - 이를 통해 자신의 일정 및 주요 목표들을 저장하고 관리할 수 있도록 제작했습니다.
  
3) styled-components 테마 적용
     - styled-components의 테마 기능을 알고 있지만 여러 모드로 나누어 구현해본 경험이 없습니다.
     - 리코일을 사용해 기본 테마를 forest로 지정 후 전역 상태로 관리하였습니다.
     - 유저가 테마 버튼을 클릭할 경우 컬러가 변경되도록 제작했습니다.

## 기능

### 1. 달력

1) 달력
2) 이전달과 다음달 랜더링
3) 오늘자 표시
4) 달력 카드 클릭 시 todolist를 관리할 수 있는 모달 띄우기


### 2. Todo list

1) Todo 작성
2) Todo 완료 여부 체크
3) Todo 삭제


### 3. 목표 list
1) 목표 작성
2) 목표 완료 여부 체크
3) 목표 삭제


### 4. 테마 설정
- forest, sea, pink 세가지 조합을 만들어 사용자 기호에 따라 달력의 컬러링이 변경되도록 구현했습니다.
