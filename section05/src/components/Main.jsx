import "./Main.css"
// jsx의 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
// 2. 숫자, 문자열, 배열 값만 렌더링 된다.
// 3. 모든 태그는 닫혀있어야 한다.
// 4. 최상위 태그는 반드시 하나여야만 한다. 빈 태그도 가능  <></>

const Main = () => {
  const user = {
    name: "유지수",
    isLogin: true, // 로그인 여부
  }

  // 방법 1
  if (user.isLogin) {
    return <div style={{
      backgroundColor:'red'
    }}>로그아웃
      <p className="logout">className</p>
    </div>
  }else{
    return <div>로그인</div>
  }

  // 방법 2
  // return (
  //   <>
  //     {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
  //   </>
  // )
}

export default Main