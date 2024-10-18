import React from 'react'

function AllProductDetail ({ isOpen, onClose,props}) {
    if (!isOpen) return null;
   // const { data } = props
    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "50%",
                height: "50%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    background: "white",
                    height: 150,
                    width: 240,
                    margin: "auto",
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "2px solid black",
                }}
            >
              <img className='AllDataImage' src={props.data.image} alt="noImage" />
                <h6>original price {props.data.price} </h6>
                <p> discount {props.data.discount} %</p>
            </div>
        </div>
    )
}

export default AllProductDetail

