import React, { useContext } from "react";
import { useState } from "react";
import { Context } from "../store/appContext";

export const Signup = () => {
    const {actions} = useContext(Context);

    const [formData, setFormData] =useState({
        email: "",
        password: ""
    });

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(e.target.checkValidity()) {
            console.log("is valid form");
            const response = await actions.userSignup(formData);
            alert("response: "+ JSON.stringify(response));
        }        
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" name="email" placeholder="Enter email" 
                    value={formData.email}
                    onChange={handleInputChange}
                    required />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" name="password" placeholder="Password" 
                    value={formData.password}
                    onChange={handleInputChange}
                    required />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
}