import React, { useMemo, useState, useCallback} from 'react'



const Counter = () => {
    const [number, setNumber] = useState(5);

    function handleClick(e){
        e.stopPropagation();
        // number++;
        setNumber(number => number+1);
    }
    const fibx = useCallback(function fibo(n) {
      if(n===1 || n===2){
        return 1
      }
      return fibo(n-1) +fibo(n-2)
    },[])
  const fibMemo = useMemo(()=>fibx(number),[number,fibx])
    
  return (
    <div>
        <h1>{number} || {fibMemo}</h1>
        <button onClick={handleClick}>Add</button>
    </div>
  )
}

export default Counter