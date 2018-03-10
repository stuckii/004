import React, { Component } from "react";
import classNames from "classnames/bind";
import styles from "./LoginPage.scss";
const cx = classNames.bind(styles);

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        };
    }

    render() {
        return (
            <div classNames={cx("login-page")}>
                <h1>Login Page</h1>
                <div classNames={cx("form")}>
                    <div classNames="form-group">
                        <label>이메일</label>
                        <input type="text" name="email" />
                    </div>
                    <div classNames="form-group">
                        <label>비밀번호</label>
                        <input type="password" name="password" />
                    </div>
                    <div classNames="form-group">
                        <button>로그인</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
