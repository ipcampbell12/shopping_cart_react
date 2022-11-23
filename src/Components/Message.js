import React from 'react';
import Alert from "react-bootstrap/Alert";


function Message({ type }) {
    return (
        <div>
            <Alert variant="success" style={{ width: "42rem" }}>
                <Alert.Heading>
                    This is a success alert which has green background
                </Alert.Heading>
            </Alert>
        </div>
    );
}

export default Message;