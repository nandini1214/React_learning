import React from "react";
function Card({username = "chai aur react", btnText = "Click me i m default",imgUrl = "https://i.pinimg.com/474x/d8/71/f9/d871f9406857cba5b27d585085401e22.jpg"}) {
    return (
    

        <div className="flex flex-col items-center justify-center w-64 h-96 bg-white shadow-lg rounded-lg">
            <img
                src={imgUrl}
                alt=""
                className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
                <p className="text-2xl font-semibold text-gray-800">{username}</p>
                <p className="text-sm font-light text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, quaerat?</p>
            </div>
            <button className="py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:shadow-lg transition duration-300">{btnText}</button>
        </div>
    
    )
}
export default Card;