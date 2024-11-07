import React from 'react'

const Button = ({ text, color="black", children }) => {
    console.log(text,color)
    //console.log(props) // text={"메일"} , text={"카페"}, text={"블로그"} 객체 형태로 전달
    return (
        <button style={{color}}>
            {text} - {color.toUpperCase()}
            {children}
        </button>
    )
}

// defaultProps를 설정하여 기본 props 값을 지정
// 이 방식은 React의 최신 버전에서는 함수형 컴포넌트에서 defaultProps를 지원하지 않는다.
// 매개변수에 기본값을 지정하는 방법 권장!
// Button.defaultProps = {
//     color: "black",
// }

export default Button

