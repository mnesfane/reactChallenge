import {useEffect, useState} from 'react'

// export function ReactChallenge(){
//     const [mess, setMess] = useState('')
//     const [indexButtonState, setIndexButton] = useState()
//     let sameIndex = false
//     const clavier = [
//         ['0'],
//         ['1'],                    
//         ['2', 'a', 'b', 'c'],
//         ['3', 'd', 'e', 'f'],     
//         ['4', 'g', 'h', 'i'],     
//         ['5', 'j', 'k', 'l'],     
//         ['6', 'm', 'n', 'o'],     
//         ['7', 'p', 'q', 'r', 's'],
//         ['8', 't', 'u', 'v'],     
//         ['9', 'w', 'x', 'y', 'z'],
//         ['*'],                                       
//         ['#']                   
//     ];

//     useEffect(()=>{
//         if(indexButtonState !== undefined){
//             setMess((prevMess) => prevMess + clavier[indexButtonState][0])
//         }
//     }, [indexButtonState])

//     function handleClavier(indexButtonVar){
//         setIndexButton((prevIndex)=>{
//             if(prevIndex === indexButtonVar)
//                 sameIndex = true
//             else
//                 sameIndex = false
//             return indexButtonVar
//         })
//     }

//     return(
//         <>
//         <table>
//             <tbody>
//                 <tr>
//                     <td><button onClick={() => handleClavier(1)}>1</button></td>
//                     <td><button onClick={() => handleClavier(2)}>2abc</button></td>
//                     <td><button onClick={() => handleClavier(3)}>3def</button></td>
//                 </tr>
//                 <tr>
//                     <td><button onClick={() => handleClavier(4)}>4ghi</button></td>
//                     <td><button onClick={() => handleClavier(5)}>5jkl</button></td>
//                     <td><button onClick={() => handleClavier(6)}>6mno</button></td>
//                 </tr>
//                 <tr>
//                     <td><button onClick={() => handleClavier(7)}>7pqrs</button></td>
//                     <td><button onClick={() => handleClavier(8)}>8tuv</button></td>
//                     <td><button onClick={() => handleClavier(9)}>9wxyz</button></td>
//                 </tr>
//                 <tr>
//                     <td><button onClick={() => handleClavier(10)}>*</button></td>
//                     <td><button onClick={() => handleClavier(0)}>0</button></td>
//                     <td><button onClick={() => handleClavier(11)}>#</button></td>
//                 </tr>
//             </tbody>
//         </table>
//         <br />
//         <div>{mess}</div>
//         </>
//     )
// }
export function ReactChallenge(){
    const [mess, setMess] = useState('')
    const [indexButtonState, setIndexButton] = useState()
    let sameIndex = false
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

    useEffect(()=>{
        if(indexButtonState !== undefined){
            setMess((prevMess) => prevMess + clavier[indexButtonState][0])
        }
    }, [indexButtonState])

    function handleClavier(indexButtonVar){
        setIndexButton((prevIndex)=>{
            if(prevIndex === indexButtonVar)
                sameIndex = true
            else
                sameIndex = false
            return indexButtonVar
        })
    }

    return(
        <>
        <table>
            <tbody>
                <tr>
                    <td><button onClick={() => handleClavier(1)}>1</button></td>
                    <td><button onClick={() => handleClavier(2)}>2abc</button></td>
                    <td><button onClick={() => handleClavier(3)}>3def</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClavier(4)}>4ghi</button></td>
                    <td><button onClick={() => handleClavier(5)}>5jkl</button></td>
                    <td><button onClick={() => handleClavier(6)}>6mno</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClavier(7)}>7pqrs</button></td>
                    <td><button onClick={() => handleClavier(8)}>8tuv</button></td>
                    <td><button onClick={() => handleClavier(9)}>9wxyz</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => handleClavier(10)}>*</button></td>
                    <td><button onClick={() => handleClavier(0)}>0</button></td>
                    <td><button onClick={() => handleClavier(11)}>#</button></td>
                </tr>
            </tbody>
        </table>
        <br />
        <div>{mess}</div>
        </>
    )
}