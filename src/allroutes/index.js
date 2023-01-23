import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "../pages/cartPage";
import Dashboard from "../pages/dashboard";
import Login from "../appauthentication/Login";
import Signup from "../appauthentication/SignUp";

const Index = () => {
    const [alluser, setAllUser] = useState([])
    const [cartUser, setCartUser] = useState([]);

    const getUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((res) => res.json())
            .then((res) => setAllUser(res))
    }
    useEffect(() => {
        getUser();
    }, [])
    const ClickCart = (userData) => {
        if (userData !== 0)
            return cartUser.push(userData);
    }
    const CartUserDelete = (deleteData) => {
        const arr = cartUser.filter((data) => data.id !== deleteData);
        setCartUser(arr);
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} ></Route>
                <Route path='/dashboard' element={<Dashboard alluser={alluser} ClickCart={ClickCart} />} />
                <Route path='/shopping-cart' element={<CartPage cartUser={cartUser} CartUserDelete={CartUserDelete} />} />
                <Route path="/signup" element={<Signup />} ></Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Index;