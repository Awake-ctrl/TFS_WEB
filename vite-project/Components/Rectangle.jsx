import React from "react";

const Rectangle = () => {
    return (
        <div style={{ 
            width: '618.4px', 
            height: '618.4px', 
            backgroundColor: 'red', 
            overflow: 'hidden', 
            position: 'relative' 
        }}>
            <img 
                src="https://www.t5eiitm.org/wp-content/uploads/2024/08/Signature-look-of-superiority.png?w=1080&ssl=1" // Replace with your image URL
                alt="Rectangle Image"
                style={{ 
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', 
                    position: 'absolute', 
                    top: 0, 
                    left: 0 
                }}
            />
        </div>
    );
}

export default Rectangle;
