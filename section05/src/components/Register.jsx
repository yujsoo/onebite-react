import React, { useRef, useState } from 'react'

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    // 하나의 state로 함께 관리하는 방법
    const [input, setInput] = useState({
        name : "",
        birth : "",
        country : "",
        bio : ""
    })

    const countRef = useRef(0);
    const inputRef = useRef()
    
    // 통합 이벤트 핸들러
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    const onSubmit = () => {
        if (input.name === "") {
            //이름을 입력하는 DOM 요소 포커스
            //console.log(inputRef.current)
            inputRef.current.focus();
        }
    }

    return (
    <div>
        <div>
            <input ref={inputRef} name="name" value={input.name} onChange={onChange} type="text" placeholder={"이름"} />
            {input.name}
        </div>
        <div>
            <input name="birth" value={input.birth} onChange={onChange} type="date"/>
            {input.birth}
        </div>
        <div>
            <select name="country" value={input.country} onChange={onChange}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
            {input.country}
        </div>
        <div>
            <textarea name="bio" value={input.bio} onChange={onChange} ></textarea>
            {input.bio}
        </div>
        <button onClick={onSubmit}>제출</button>
    </div>
    )
}

export default Register
