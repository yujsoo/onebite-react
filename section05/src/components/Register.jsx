import React, { useState } from 'react'

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
    // console.log(input)

    // 통합 이벤트 핸들러
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]:e.target.value
        })
    }

    {/*
    // 생년월일
    const onChangeBirth = (e) => {
        setInput({
            ...input, // 기존 값을 변경하지 않고 그대로 유지하도록
            birth : e.target.value 
        })
    }

    // 이름
    const onChangedName = (e) => {
        setInput({
            ...input, // 기존 값을 변경하지 않고 그대로 유지하도록
            name : e.target.value 
        })
    }

    // 국적
    const onChangedCountry = (e) => {
        setInput({
            ...input, // 기존 값을 변경하지 않고 그대로 유지하도록
            country : e.target.value 
        })
    }

    const onChangedBio = (e) => {
        setInput({
            ...input, // 기존 값을 변경하지 않고 그대로 유지하도록
            bio : e.target.value 
        })
    }
    */}

    return (
    <div>
        <div>
            <input name="name" value={input.name} onChange={onChange} type="text" placeholder={"이름"} />
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
    </div>
    )
}

export default Register
