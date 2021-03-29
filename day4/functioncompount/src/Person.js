import React, { useState } from 'react'

export default function Person(props) {
    let item = props.item
    let index = props.index
    const [color, setColor] = useState('black')
    const ChangeColor = () => {
        let r = Math.floor((Math.random() * 255) + 1);
        let g = Math.floor((Math.random() * 255) + 1);
        let b = Math.floor((Math.random() * 255) + 1);
        setColor(`rgb(${r},${g},${b})`)
    }
    return (<li key ={index}
    style={{color: color}}
    >Phan tu thu {index + 1}, co ten: {item.name}, tuoi {item.age}
                <button onClick={()=> props.remove(index)}>Remove</button>
                <button onClick={()=>props.Changecolor(index)}>Changecolor</button>

                {/* <button onClick={Edit(index)}>Edit</button> */}
                <input type="checkbox" checked={props.listCheck.includes(index)}  
                onChange={()=>{
                    props.handleCheckBox(index)
                }}
                />
            </li>
    )
}