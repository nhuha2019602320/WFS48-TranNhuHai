import React, { useState } from 'react';
import { useHistory } from 'react-router';

export default function Main() {
  let history = useHistory();

  const [age, setAge] = useState(0);
  const [name, setName] = useState('');
  const [ListUsers, setListUsers] = useState([]);
  const [indexUser, setIndexUser] = useState(null);
  const [hideBtn, setHideBtn] = useState(false);

  const changeName = (e) => setName(e.target.value);
  const addAge = () => setAge(age + 1);
  const minusAge = () => setAge(age - 1);
  const goAbout = () => {
    history.push('/about');
  };

  const submit = () => {
    let obj = {
      name,
      age,
    };
    console.log([...ListUsers, obj]);
    setListUsers([...ListUsers, obj]);
  };

  const handleRemove = (index) => {
    ListUsers.splice(index, 1);
    setListUsers([...ListUsers]);
  };

  const handleChange = (index) => {
    let newList = ListUsers;
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    newList[index].rgb = `rgb(${r},${g},${b})`;
    setListUsers([...newList]);
  };

  const handleEditUser = (index) => {
    const userEdit = ListUsers[index];
    setName(userEdit.name);
    setAge(userEdit.age);
    setHideBtn(true);
    setIndexUser(index);
  };

  const handleEdit = () => {
    let obj = {
      name,
      age,
    };
    ListUsers[indexUser] = obj;
    setIndexUser(ListUsers);
    handleCancel();
    console.log(ListUsers);
  };

  const handleCancel = () => {
    setHideBtn(false);
    setName('');
    setAge(0);
  };

  const renderItem = (i, index) => {
    return (
      <li style={{ color: i.rgb }} key={index}>
        Người thứ {index + 1}, Tên là {i.name}, Tuổi: {i.age}
        <button onClick={() => handleRemove(index)}>Remove</button>
        <button onClick={() => handleChange(index)}>ChangeColor</button>
        <button onClick={() => handleEditUser(index)}>Edit</button>
      </li>
    );
  };

  return (
    <div>
      <h3>
        Tên tôi là {name} và tuổi {age}
      </h3>
      <input type="text" value={name} onChange={changeName} />
      <button onClick={addAge}>Add</button>
      <button onClick={minusAge}>Minus</button>
      {!hideBtn && <button onClick={submit}>Submit</button>}
      {hideBtn && <button onClick={handleEdit}>Edit</button>}
      {hideBtn && <button onClick={handleCancel}>Cancel</button>}
      <button onClick={goAbout}>Go About</button>
      <ul>{ListUsers.map(renderItem)}</ul>
    </div>
  );
}
