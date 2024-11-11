import React, { useRef, useState, useEffect } from 'react'

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

    //상태 업데이트와 리렌더링 흐름 요약
    //1. setCount(count + 1) 호출 -> 상태 업데이트 요청
    //2. console.log(count) -> 이전 상태 값 출력 (리렌더링 전)
    //3. React가 상태를 업데이트하고 리렌더링을 처리 -> 새로운 상태 값이 반영됨
    //4. UI에 새로운 상태 값이 반영됨 (화면에서 확인 가능)

    // 상태 업데이트 후 console.log를 확인하고 싶다면? => useEffect 훅 사용
    // useEffect는 컴포넌트가 리렌더링된 후에 실행되므로, 상태가 업데이트된 후에 최신 값을 확인할 수 있습니다

    const [count, setCount] = useState(0);

    const handleClick = () => {
        //console.log("prev:", count); // 이전 값이 출력됨
        setCount(count + 1); // 상태 업데이트 요청 (비동기적 처리)
        console.log("Count immediately after setState:", count); // 이전 값이 출력됨
    };

    useEffect(() => {
        console.log("Count after re-render:", count);  // 리렌더링 후 count 값 출력
    }, [count]);  // count가 변경될 때마다 실행

    const countRef = useRef(0);
    //console.log(countRef.current)
    const inputRef = useRef()

    const ref = useRef(0); // 리렌더링해도 유지되는 ref 변수

    const [renderCount, setRenderCount] = useState(0); // 리렌더링을 위한 상태

    const incrementRef = () => {
        ref.current += 1;
        console.log("countRef:", ref.current); // 매번 증가된 값이 유지됨
    };

    const triggerRender = () => {
        setRenderCount(prev => prev + 1); // 리렌더링을 강제로 발생시킴
    };
    
    // 통합 이벤트 핸들러
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        setInput({ //setInput으로 상태를 변경 -> 상태가 업데이트
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
        <p>Count: {count}</p>
        <button onClick={handleClick}>Increment</button>
        <p>Render Count: {renderCount}</p>
        <p>Ref Count (Not re-rendered): {countRef.current}</p>
        <button onClick={incrementRef}>Increment Ref Count</button>
        <button onClick={triggerRender}>Trigger Re-render</button>
        <hr/>
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
