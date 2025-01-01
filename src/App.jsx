import { useState } from 'react'
import {ReactChallenge} from './reactChallenge'

function App() {
  return(
    <>
    <ReactChallenge></ReactChallenge>
    </>
  )
}

export default App


// ===============

//index.jsx // redo tp :import { useState, useEffect } from "react"


// export function Temp(){
//   const [temp, setTemp] = useState(0)
//   const [ok, setOk] = useState(false)
  
//   function handleTemp(e){
//       setTemp(e.target.value)
//   }
  
//   function handleOk(e){
//       setOk(e.target.checked)
//   }
  
//       return(
//           <>
//               Temperatue: <input type="text"  value={temp} onChange={handleTemp}/>
//               <input type="checkbox" value={ok} onChange={handleOk} /> raining
//               {/* <h2>{${temp} C ${ok && 'avec Pluie'}}</h2> */}
//               <h2>{${temp} C {ok ? 'avec Pluie' : ""}}</h2>
//           </>
//       )
//   }
  
//   // ================  
  
//   export function Loisir(){
//       const loisir = ['sport', 'kickBox', 'mma']
//       const [loisirState, setLoisir] = useState([])
  
//       function handleLoisir(item, checked){
//           setLoisir((prevState) =>{
//               if(checked)
//                   return [...prevState, item]
//               else
//                   return loisirState.filter(loisir => loisir !== item)
//           })
  
//       }
  
//       return(
//           <>
//               <h1>Loisir</h1>
//               {
//                   loisir.map((item, index) =>{
//                       return(
//                           <>
//                           {item}
//                               <input type="checkbox" checked={loisirState.includes(item)} onChange={(e) => handleLoisir(item, e.target.checked)} />
//                           </>
//                       )
//                   })
//               }
//               {console.log(loisirState)}
//               <h3>vos loisir : {loisirState.join(',')}</h3>
  
//           </>
//       )
//   }
  
//   // export function Poids(){
//   //     const
//   //     return(
//   //         <>
//   //             Taille : <input type="text" value={}/>
  
//   //         </>
//   //     )
//   // }
  
//   export function Select(){
//       const [select, setSelect] = useState('')
//       const listMod = [
//           { id: 1, name: 'react' },
//           { id: 2, name: 'agile' },
//           { id: 3, name: 'php' }
//       ];
//       return(
//           <>
//               Filliere : 
//               <select value={select} onChange={(e)=> setSelect(e.target.value)}>
//                   {listMod.map((item, index)=>{
//                       return(
//                           <option value={item.name}>{item.name}</option>
//                       )
//                   })}
//               </select>
//               {/* {console.log(select)} */}
//               <h2>u selected {select}</h2>
  
//           </>
//       )
//   }
  
//   export function GestModule(){
//       const [data, setData] = useState({id: '', module: 'r', regio: ''})
//       const [arrTable, setTable] = useState([])
//       const module = ['r', 'a']
  
//       function handleInput(e, prop){
//           setData(prevState =>{
//               return {...prevState, [prop]: e.target.value}
//           })
//       }
//       function handleAdd(){
//           setTable((prevState) =>([...prevState, data]))
//       }
//       return(
//           <>
//               id: <input type="text" value={data.id} onChange={(e)=> handleInput(e, 'id')}  />
//               Module: <select value={data.module} onChange={(e)=> handleInput(e, 'module')}>
//                   {module.map((item)=>{
//                       return(
//                           <option value={item}>{item}</option>
//                       )
//                   })}
//               </select>
//               Regio: <input type="radio" value={'Y'} checked={data.regio == 'Y'} onChange={(e)=> handleInput(e, 'regio')}/>
//               <input type="radio" value={'N'} checked={data.regio == 'N'} onChange={(e)=> handleInput(e, 'regio')} />
//               <button onClick={handleAdd}>add</button>
//               {console.log(arrTable)}
//               {arrTable.length >=1 && <table>
//                   <thead>
//                   <tr>
//                       <th>id</th>
//                       <th>module</th>
//                       <th>ragionale</th>
//                   </tr>
//                   </thead>
//                   {arrTable.map((row)=>{
//                       { return(
//                           <tbody>
//                           <tr>
//                               <td>{row.id}</td>
//                               <td>{row.module}</td>
//                               <td>{row.regio}</td>
//                           </tr>
//                           </tbody>
//                       )}
//                   })}
//               </table>}
//           </>
//       )
//   }
  
//   export function ChronoUseEffect(){
//       const [count, setCount] = useState(0)
//       useEffect(() =>{
//           console.log('gg')
//          let id = setInterval(()=> {setCount(count + 1)}, 1000)
//          return(() =>{
//              clearInterval(id)
//          }
//          )
//       }, [count])
//       return(
//           <>
//               <h1>chrono</h1>
//               <h2>{count}</h2>
//           </>
//       )   
//   }