import React, {useEffect,useState} from 'react'
import { useHistory } from "react-router-dom";
import Person from './Person';
export default function Main() {

    let history = useHistory();
    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [listUser,setListUser] = useState([])
    // const [isEdit, setIsEdit] = useState([false])
    // const [indexEdit, setIndexEdit] = useState(null)
    const [listCheck, setListCheck] = useState([])
    const renderItem = (item, index) => {

        return <Person
            item = {item}
            index = {index}
            remove={remove}
            listCheck = {listCheck}
            handleCheckBox ={handleCheckBox}
        />

    }

    const handleCheckBox = (index) => {
        if(listCheck.indexOf(index) == -1) {
            setListCheck([...listCheck,index])//tao mang moi va them vao mang cu (index)
        } else {
            setListCheck([...listCheck.filter(item => item != index)])
        }
    }

    const deleteAll = () => {
        setListUser([...listUser.filter((item, index) => !listCheck.includes(index))])
        setListCheck([])
    }

    const submit = () => {
        let obj = {
            name,
            age,
           
        }
        setName('')
        setAge(0)
        let newList = listUser
        newList.push(obj);
        setListUser([...newList])
    }

    const remove = (index) => {
        listUser.splice(index,1);
        setListUser([...listUser])

    }

 

    // const Edit = (index) => {
    //     setName(listUser[index].name)
    //     setAge(listUser[index].age)
    //     setIsEdit(true)
    //     setIndexEdit(index)
    // }

    // const save = () => {
    //     let newArr = listUser
    //     newArr[indexEdit].age = age
    //     newArr[indexEdit].name = name
    //     setListUser([...newArr])
    // }


    const changeName = (event) => setName(event.target.value)
    const addAge = () => setAge(age+1)
    const minuAge = () => setAge(age-1)

    return (
        <div>
            hello {name},
            Age {age}<br/>
            <input type="text" value ={name} onChange={changeName}/>
            <button onClick={addAge}>Add</button>
            <button onClick={minuAge}>Minus</button>
            {/* <button onClick ={goAbout}>about</button> */}
            {/* <button onClick={isEdit ? save :  submit}>{isEdit ? "Edit" : "Submit"}</button> */}
            <button onClick={submit}> submit</button>
            <button onClick={deleteAll}>delete</button>
            <ul>
                {listUser.map(renderItem)}
            </ul>
        </div>
    )
}
//thêm 1 nut edit vào từng thẻ li
//khi bấm edit thì hiện tuổi  lên trên ô nhập
//nut submit thành nút edit , xuất hiện thêm nút cancel
//bấm cancle thì nút edit lại trở thành nút submit, nút cancel mấtđi
//bấm edit thì edit data , giữ nguyên thứ tụw


