import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from 'styled-components/macro';
import { API_URL } from "utils/utils";
import user from "reducers/user";
import Swal from "sweetalert2";
import { InnerWrapper, StyledButton } from "styles/GlobalStyles"

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [mode, setMode] = useState("login");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const accessToken = useSelector((store) => store.user.accessToken);

	useEffect(() => {
		if (accessToken) {
			navigate("/weddingform");
		}
	}, [accessToken])

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ username: username, password: password })
		}
		fetch(API_URL(mode), options)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(user.actions.setUsername(data.response.username));
						dispatch(user.actions.setUserId(data.response.id));
						dispatch(user.actions.setAccessToken(data.response.accessToken));
						dispatch(user.actions.setError(null));
					});
				} else {
					batch(() => {
						dispatch(user.actions.setUsername(null));
						dispatch(user.actions.setUserId(null));
						dispatch(user.actions.setAccessToken(null));
						dispatch(user.actions.setError(data.response));
						Swal.fire(data.response)
					});
				}
			})
	}
	return (
		<RegLogContainer>
			<RegLog>
				<StyledRadioButton type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
				<label htmlFor="register">Register</label>
				<StyledRadioButton type="radio" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
				<label htmlFor="login">Log in</label>
			</RegLog>
			<form onSubmit={onFormSubmit}>
				<UserDetails>
					<label htmlFor="username">Username</label>
					<StyledInputField
						type="text"
						id="username"
						value={username}
						onChange={e => setUsername(e.target.value)} />
					<label htmlFor="password">Password</label>
					<StyledInputField
						type="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)} />
				</UserDetails>
				<StyledButton type="submit">Submit</StyledButton>
			</form>
		</RegLogContainer>
	);
}

export default Login;

const RegLogContainer = styled.section`
background-color: var(--color-beige);
padding: 1em;
min-height: 20vh;
margin-bottom: 2em;
`

const RegLog = styled.div`
	display: flex;
	column-gap: 5px;
	justify-content: center;
`

const StyledRadioButton = styled.input`
filter: grayscale(1);
`

const UserDetails = styled.div`
	display: flex;
	flex-direction: column;
	line-height: 2.5em;
`
const StyledInputField = styled.input`
/* font-size: 1em; */
line-height: 2em;
padding-left: .3vw;
color: var(--color-softBlack);
`