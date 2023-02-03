import React, { useSelector } from "react";
import ReactLoading from "react-loading";

const Loading = () => {

    const isLoading = useSelector((store) => store.rsvps.isLoading)
    /* 
        useEffect(() => {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, []) */

    return (
        <div>
            {isLoading
                &&
                <ReactLoading
                    type="spinningBubbles"
                    color="#555"
                    height={100}
                    width={80}
                />
            }
        </div>
    );
}

export default Loading