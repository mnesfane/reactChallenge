import {useEffect, useState, useRef} from 'react'

export function ReactChallenge(){
    const clavier = [
    ['0'],
    ['1'],                    
    ['2', 'a', 'b', 'c'],
    ['3', 'd', 'e', 'f'],
    ['4', 'g', 'h', 'i'],     
    ['5', 'j', 'k', 'l'],     
    ['6', 'm', 'n', 'o'],     
    ['7', 'p', 'q', 'r', 's'],
    ['8', 't', 'u', 'v'],     
    ['9', 'w', 'x', 'y', 'z'],
    ['*'],                                       
    ['#']                   
];
    const [mess, setMess] = useState('')
    const [indexButtonState, setIndexButton] = useState()
    let doubleClickIndex= useRef(0);
    let interValId = useRef(null);

    
    const handleClavier = (indexButtonArg)=>{
        // alert(indexButtonArg)
        setIndexButton(prevIndexButton=>{
            if(prevIndexButton === indexButtonArg && doubleClickIndex.current !== -1){
                if(interValId.current) clearTimeout(interValId.current)
                // alert(doubleClickIndex.current)
                setMess((prevMess)=> prevMess.slice(0, -1))
                doubleClickIndex.current === clavier[indexButtonArg].length - 1 ? doubleClickIndex.current = 0 : doubleClickIndex.current++
                // alert(doubleClickIndex.current)
            }
            else{
                doubleClickIndex.current = 0
            }
            setMess((prevMess)=>prevMess +  clavier[indexButtonArg][doubleClickIndex.current])
            interValId.current = setTimeout(()=>{
                doubleClickIndex.current = - 1
            }, 1000)
            return indexButtonArg
        })
    }


    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td><button onClick={() => {handleClavier(1), handleMessage()}}>1</button></td>
                    <td><button onClick={() => {handleClavier(2)}}>2abc</button></td>
                    <td><button onClick={() => {handleClavier(3), handleMessage()}}>3def</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => {handleClavier(4), handleMessage()}}>4ghi</button></td>
                    <td><button onClick={() => {handleClavier(5), handleMessage()}}>5jkl</button></td>
                    <td><button onClick={() => {handleClavier(6), handleMessage()}}>6mno</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => {handleClavier(7), handleMessage()}}>7pqrs</button></td>
                    <td><button onClick={() => {handleClavier(8), handleMessage()}}>8tuv</button></td>
                    <td><button onClick={() => {handleClavier(9), handleMessage()}}>9wxyz</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => {handleClavier(10), handleMessage()}}>*</button></td>
                    <td><button onClick={() => {handleClavier(0), handleMessage()}}>0</button></td>
                    <td><button onClick={() => {handleClavier(11), handleMessage()}}>#</button></td>
                </tr>
            </tbody>
        </table>
        <br />
        <div>{mess}</div>
        </>
    )
}