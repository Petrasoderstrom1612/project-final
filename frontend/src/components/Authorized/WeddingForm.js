import React, { useEffect } from "react";
import Footer from "components/Footer";
import Header from "../Header";
import { StyledDiv } from "../Unauthorized/PageIntro";

const WeddingForm = () => {
/* 	const thoughtItems = useSelector((store) => store.thoughts.items);
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
	}, []); */

	return (
	<>
	<Header />
	<StyledDiv><div>hej</div></StyledDiv>
	<Footer /></>
	)
}

export default WeddingForm;