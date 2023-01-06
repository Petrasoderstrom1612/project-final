// ! Is this component being used? Or just a duplicate of Login.js?

/* import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, batch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { API_URL } from "utils/utils";
import user from "reducers/user";
import styled from 'styled-components/macro';
import { OuterWrapper, InnerWrapper, StyledButton } from "styles/GlobalStyles"
import Swal from 'sweetalert2';

const Login = () => {
	const [firstperson, setFirstPerson] = useState("");
	const [secondperson, setSecondPerson] = useState("");
	const [email, setEmail] = useState("");
	const [mode, setMode] = useState("login");
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const accessToken = useSelector((store) => store.user.accessToken);

	useEffect(() => {
		if (accessToken) {
			navigate("/"); //the unique ID
		}
	}, [accessToken])

	const onFormSubmit = (event) => {
		event.preventDefault();
		const options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({ firstperson: firstperson, secondperson: secondperson, email: email })
		}
		fetch(API_URL(mode), options)
			.then(response => response.json())
			.then(data => {
				if (data.success) {
					batch(() => {
						dispatch(user.actions.setFirstPerson(data.response.username));
						dispatch(user.actions.setSecondPerson(data.response.username));
						dispatch(user.actions.setEmail(data.response.username));
						dispatch(user.actions.setUserId(data.response.id));
						dispatch(user.actions.setAccessToken(data.response.accessToken));
						dispatch(user.actions.setError(null));
					});
				} else {
					batch(() => {
						dispatch(user.actions.setFirstPerson(null));
						dispatch(user.actions.setSecondPerson(data.response.username));
						dispatch(user.actions.setEmail(data.response.username));
						dispatch(user.actions.setUserId(null));
						dispatch(user.actions.setAccessToken(null));
						dispatch(user.actions.setError(data.response));
						Swal.fire(data.response)
					});
				}
			})
	}
	return (
		<InnerWrapper>
			<RegLog>
				<input type="radio" id="register" checked={mode === "register"} onChange={() => setMode("register")} />
				<label htmlFor="register">Register</label>
				<input type="radio" id="login" checked={mode === "login"} onChange={() => setMode("login")} />
				<label htmlFor="login">Login</label>
			</RegLog>
			<form onSubmit={onFormSubmit}>
				<PersonalDetails>
					<label htmlFor="username">Username</label>
					<input
						type="text"
						id="username"
						value={username}
						onChange={e => setUsername(e.target.value)} />
					<label htmlFor="password">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={e => setPassword(e.target.value)} />
				</PersonalDetails>
				<StyledButton type="submit">Submit</StyledButton>
			</form>
		</InnerWrapper>
	);
}

export default Login;

const RegLog = styled.div`
	display: flex;
	column-gap: 3px;
`

const PersonalDetails = styled.section`
	display: flex;
	flex-direction: column;
	line-height: 30px;
`

const Section = styled.section`
	display: flex;
  flex-direction: column;
  padding: 10px;
  border: 2px solid black;
  box-shadow: 5px 5px;
  row-gap: 10px;
`
 */