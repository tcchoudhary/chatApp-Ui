import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [genaratePassword, setGenaratePassword] = useState(false)
    const navigate = useNavigate()

    const notifyError = (msg) => toast.error(msg, {
        position: "bottom-center",
        autoClose: 2000, // Automatically close after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
    const notifySuccess = (msg) => toast.success(msg, {
        position: "bottom-center",
        autoClose: 2000, // Automatically close after 2 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
    });
    const Loginhendeler = async () => {
        if (!password) {
            notifyError("Please Fill the Feild")
            return
        }
        notifySuccess("Login Successfully")
        navigate('/dashboard')
    }
    const EmailCheckhendler = async () => {
        if (!email) {
            notifyError("Please Fill the Feilds")
            return;
        }
        else {
            // try {
            //   const config = {
            //     headers: {
            //       "Content-type": "application/json",
            //     },
            //   };
            //   const { data } = await axios.post(
            //     "http://localhost:7000/login",
            //     { email },
            //     config
            //   );
            //   toast({
            //     title: "User Match",
            //     status: "success",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            //   });
            //   setUser(data);
            //   setGenaratePassword(!genaratePassword)
            //   setLoading(false)
            // } catch (error) {
            //   toast({
            //     title: "Error Occured!",
            //     description: error.response.data.message,
            //     status: "error",
            //     duration: 5000,
            //     isClosable: true,
            //     position: "bottom",
            //   });
            //   setLoading(false);
            // }
            setGenaratePassword(!genaratePassword)
            notifySuccess("User Match Success")
        }
    };
    return (
        <>

            <div className="box">
                <h1>Chat Grid</h1>
                <div className='form'>
                    <div class="row">
                        <label for="email">Emp Code/ Email</label>
                        <input type="email" name="email" placeholder="email@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {
                        genaratePassword ? (
                            <div class="row">
                                <label for="password">Password</label>
                                <input type="password" name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        ) : (null)
                    }
                    {
                        genaratePassword ? (
                            <button type="submit"
                                onClick={Loginhendeler}

                            >
                                Login</button>
                        ) : (
                            <button type="submit"
                                onClick={EmailCheckhendler}
                            >
                                Chek Email
                            </button>
                        )
                    }
                </div>
            </div >
            <ToastContainer />
        </>
    )
}

export default Login