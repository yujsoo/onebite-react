import { useContext, useState, useEffect } from "react"
import { DiaryStateContext } from "../App"
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
    const nav = useNavigate();
    const data = useContext(DiaryStateContext);
    const [currentDiaryItem, setCurrentDiaryItem] = useState();

    useEffect(()=> {
        const currentDiaryItem = data.find((item) => String(item.id) === String(id))

        if (!currentDiaryItem) { //currentDiaryItem이 존재하지 않는다 (사용자가 없는 페이지에 들어감)
            window.alert("존재하지 않는 일기입니다.")
            nav('/',{replace:true})
        }
        setCurrentDiaryItem(currentDiaryItem)
    },[id,data])
    
    return currentDiaryItem;
}

export default useDiary