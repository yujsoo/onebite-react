import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const Home = () => {
  const [params, setParams] = useSearchParams();
  
  const updateQuery = () => {
    setParams({ value: "newValue", page: "2" }); // 쿼리 파라미터 업데이트
  };

  return (
    <div>
      <div>
        <p>현재 value: {params.get("value") || "없음"}</p>
        <button onClick={updateQuery}>Update Query Params</button>
      </div>
      Home
    </div>
  )
}

export default Home
