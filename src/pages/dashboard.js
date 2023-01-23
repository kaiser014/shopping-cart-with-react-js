import { Container, Table, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Dashboard = ({ alluser, ClickCart }) => {
    const navigate = useNavigate();
    const handleCartPage = () => {
        navigate('/shopping-cart');
    }
    const handleClickCart = (userData) => {
        ClickCart(userData)
    }
    return (
        <>
            <Container className="py-3">
                <div className="row align-items-center">
                    <div className="col-md-8">
                        <h1 className="pb-2">Item List</h1>
                    </div>
                    <div className="col-md-4">
                        <Button onClick={handleCartPage}>Cart Page</Button>
                    </div>
                </div>
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
                        alluser.map((userData, index) => {
                            return userData !== '' ?
                                <tbody key={index}>
                                    <tr>
                                        <td>{userData.id}</td>
                                        <td>{userData.name}</td>
                                        <td>{userData.username}</td>
                                        <td>{userData.email}</td>
                                        <td>
                                            <Button onClick={() => handleClickCart(userData)} variant="success mx-2">Add to Cart</Button>
                                        </td>
                                    </tr>
                                </tbody>
                                : <h5>Data Not Found</h5>
                        })
                    }
                </Table>
            </Container>
        </>
    )
}
export default Dashboard;