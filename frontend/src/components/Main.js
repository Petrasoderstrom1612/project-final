import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import thoughts from "reducers/thoughts";
import { API_URL, API_HAPPY_URL } from "utils/utils";
import { useNavigate, Link } from "react-router-dom";
import Umbrella from "../happy/Umbrella"
import Header from "./Header";

const Main = () => {
	const thoughtItems = useSelector((store) => store.thoughts.items);
	const dispatch = useDispatch();
	const accessToken = useSelector((store) => store.user.accessToken);
	const navigate = useNavigate();

	useEffect(() => {
		if (!accessToken) {
			navigate("/login");
		}
	}, []);

	useEffect(() => {
		const options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"Authorization": accessToken
			}
		}
		fetch(API_HAPPY_URL("thoughts"), options)
			.then(res => res.json())
			.then(data => {
				if (data.success) {
					dispatch(thoughts.actions.setItems(data.response));
					dispatch(thoughts.actions.setError(null));
				} else {
					dispatch(thoughts.actions.setItems([]));
					dispatch(thoughts.actions.setError(data.response));
				}
			})
	}, []);

	return (
		<>
			{/* <Link to="/login"> GO TO LOGIN</Link> */}
			<section className="outer-wrapper">
				<section className="inner-wrapper">
					<Header />
					<Umbrella />
				</section>
			</section>
			{/* {thoughtItems.map((item) => {
				return <p key={item._id}>{item.message}</p>
			})} */}
		</>
	)
}

export default Main;