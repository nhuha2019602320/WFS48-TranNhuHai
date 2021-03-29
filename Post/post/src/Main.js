import React, { useState } from 'react'
import App from './App.css'
export default function Post() {

    // const [name, setName] = useState('')

    // changeName = (e) =>  setName(e.target.value)
    return (
        <div id="container">
            <h3>Đăng Bài Mới</h3>
            <input type="text"   placeholder="Người Đăng Bài"/><br/>           
            <input type="text" placeholder="Link ảnh"/><br/>
            <input type="text" id="content" placeholder="Nội dung"/><br/>
            <select name="Chọn nghề Nghiệp">
                    <option>Bác sĩ</option>    
                    <option>Y tá</option>    
                    <option>Giáo viên</option>                            
            </select><br/>           
            <button>Đăng Bài</button>
            <button>Trở về</button>
                    
        </div>
    )
}
