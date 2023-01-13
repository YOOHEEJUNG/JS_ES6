/*
  👩‍💻모듈 익스포트, 임포트

   모듈은 JS ES6의 미리 작성해놓은 스크립트 파일이다
   변수, 함수, 클래스 등이 정의되어 있다

    ✅모듈을 내보내는 방식
      1️⃣ 여러 값을 내보낼 때, named export방식
      2️⃣단일 값을 내보낼 때, defualt export방식
*/

//1번 방법
export const name = "이순신";
export const age = 20;

export const info = () => {
    console.log("이름:" +  name + ", 나이:" + age);
}

//2번 방법
let addr = "서울시";
let myInfo = () => {
    console.log(addr);
}

export {addr, myInfo};