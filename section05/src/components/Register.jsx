import React, { useState } from 'react'

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    // 생년월일
    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    // 이름
    const onChangedName = (e) => {
        //console.log(e.target.value)
        setName(e.target.value)
    }

    // 국적
    const onChangedCountry = (e) => {
        //console.log(e.target.value)
        setCountry(e.target.value)
    }

    const onChangedBio = (e) => {
        setBio(e.target.value);
    }

    return (
    <div>
        <div>
            <input value={name} onChange={onChangedName} type="text" placeholder={"이름"} />
            {name}
        </div>
        <div>
            <input value={birth} onChange={onChangeBirth} type="date"/>
            {birth}
        </div>
        <div>
            <select value={country} onChange={onChangedCountry}>
                <option value=""></option>
                <option value="kr">한국</option>
                <option value="us">미국</option>
                <option value="uk">영국</option>
            </select>
            {country}
        </div>
        <div>
            <textarea value={bio} onChange={onChangedBio} name="" id=""></textarea>
            {bio}
        </div>
    </div>
    )
}

export default Register
