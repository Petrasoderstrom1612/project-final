import React, { useState, useEffect } from "react";
import ReactLoading from "react-loading";

const Loading = () => {

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, [])

    return (
        <div>
            <ReactLoading
                type="spinningBubbles"
                color="#555"
                height={100}
                width={80}
            />
        </div>
    );
}

export default Loading