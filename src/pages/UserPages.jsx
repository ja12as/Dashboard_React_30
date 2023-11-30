import { useUser,  } from "../hooks/useUser"


const UserPages = () => {

    const {users} = useUser();
    return (
        <div className='m-1 p-5 bg-primary text-white'>
            <h1 className='text-body text-center'>reqres.in</h1>
            <h2>Jose Armando Avendaño Saucedo</h2>
            <td/>
            <h3 className='text-body text-center'>Reqres is a real API</h3>
            <p className='text-body text-center'>Reqres simulates real application scenarios. If you want to test a user authentication system, Reqres will respond to a successful login/register request with a token for you to identify a sample user, or with a 403 forbidden response to an unsuccessful login/registration attempt.
            </p>
            <table className='table table-striped  rounded'>
                <thead >
                    <tr>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Phone</th>
                        <th>website</th>
                        
                    </tr>
                </thead>
                <tbody >
                    {
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserPages

