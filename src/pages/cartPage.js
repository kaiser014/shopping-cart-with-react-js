import React from 'react';
import { Container, Table, Button } from "react-bootstrap";
const CartPage = ({ cartUser, CartUserDelete }) => {
    const UserDelete = (id) => {
        CartUserDelete(id)
    }
    return (
        <div>
            <Container className="py-3">
                <h1 className="pb-2">Cart Item List</h1>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>User Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        cartUser.map((cartData, index) => {
                            return cartData !== '' ?
                                <tbody key={index}>
                                    <tr>
                                        <td>{cartData.id}</td>
                                        <td>{cartData.name}</td>
                                        <td>{cartData.username}</td>
                                        <td>{cartData.email}</td>
                                        <td>
                                            <Button onClick={() => UserDelete(cartData.id)} variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                </tbody>
                                : <h5>Data Not Found</h5>
                        })
                    }
                </Table>
            </Container>
        </div>
    )
}

export default CartPage
