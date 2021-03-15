import React, { Component } from 'react'
export default class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            pass:'',
            passconfirm:'',
            checked:'',
            email: '',
            showerro1: '',
            showerro2: '',
            showerro3: '',
            showerro4: ''
            
        }
    }
    render() {
        return (
            <div>
                <div class="login_btn">
                    <div>
                        <input type="text" onChange = {(event) => {
                            this.setState({
                                name: event.target.value
                            })
                        }} placeholder="Your Name" class="btn_text" />  
                    </div>
                    <div>
                        <input type="email" placeholder="Your Email"  onChange = {(event) => {
                            this.setState({
                                email: event.target.value
                            })
                        }}/>
                    </div>
                    <div>
                        <input type="password" onChange = {(event) => {
                            this.setState( {
                                pass: event.target.value
                            })
                        }} placeholder="Nhập mk" class="btn_pass"/>

                        <button id="btn" onClick = {() => {
                                if(document.querySelector('.btn_pass').type == 'text') {
                                        document.querySelector('.btn_pass').type = 'password';
                                    }else {
                                        document.querySelector('.btn_pass').type = 'text';         
                                }
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>   
                        </button>
                    </div>
                    <div>
                        <input type="password" class="inpass" placeholder="Repeat passworld" onChange ={(event) => {
                            this.setState({
                                passconfirm: event.target.value
                            })
                        }}/>
                        
                        <button onClick = {() => {
                            function check() {
                                    if(document.querySelector('.inpass').type == 'text') {
                                        document.querySelector('.inpass').type = 'password';
                                    }else {
                                        document.querySelector('.inpass').type = 'text';         
                                }
                            }
                            check();
                        }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                        </button>
                        
                    </div>
                    <div>
                        Rememmber me
                        <input type="checkbox" onChange ={(event) => {
                            this.setState({
                                check: event.target.checked
                            })
                            console.log(event.target.checked);
                        }}/>
                    </div>
                    <p id="show1">
                        {this.state.showerro1}  
                    </p>
                    <p id="show2">
                        {this.state.showerro2}  
                    </p>
                    <p id="show3">
                        {this.state.showerro3}  
                    </p>
                    <p id="show4">
                        {this.state.showerro4}  
                    </p>
                    
                    <div>
                        <button onClick = {(event) => {
                            if(this.state.name == '' || this.state.email == '' || this.state.pass == '' || this.state.passconfirm == '') {
                                alert("Bạn đã điển thiếu thông tin");
                            } else {
                                var Name = this.state.name.length;
                                var Email = this.state.email.length;
                                var Pass = this.state.pass.length;
                                var Passconfirm = this.state.passconfirm.length;
                                var ShowErro1 = document.getElementById('show1');
                                var ShowErro2 = document.getElementById('show2');
                                var ShowErro3 = document.getElementById('show3');
                                var ShowErro4 = document.getElementById('show4');
                                var reg =  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    
                                if(Name < 3 || Name >15) {
                                    ShowErro1.textContent = "Bạn đặt sai tên rồi ";                                
                                }
                                console.log(!reg.test(this.state.email) );
                                if(!reg.test(this.state.email)) {
                                    ShowErro2.textContent = "Sai email";
                                    console.log(this.state.email);
                                }
                                if(Pass <6 || Passconfirm <6) {
                                    ShowErro3.textContent = "độ dài mk không đúng"
                                }
                                if(this.state.pass != this.state.passconfirm) {
                                    ShowErro4.textContent = "mk không trùng khớp"
                                }
                            }
                            if(Name >= 3 || Name <=15 && reg.test(this.state.email)&& this.state.email <=50 && Pass >=6 && Passconfirm >=6 && this.state.pass == this.state.Passconfirm) {
                                alert("đăng kí thành công");
                            }
                        }}>Sign up</button>
                    </div>
                </div>
            </div>
        )
    }
}
