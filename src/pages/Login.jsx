import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import ErrorMessage from "../components/ErrorMessage";

const Login = () => {
    const userNameRef = useRef("");
    const passwordRef = useRef("");
    const URL = import.meta.env.VITE_BASE_URL;
    const navigate = useNavigate();
    const [errors, setErrors] = useState([]);
    const loginUser = async (e) => {
        e.preventDefault();
        if (userNameRef.current.value && passwordRef.current.value) {
            const toastID = toast.loading("Logging-In");
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username: userNameRef.current.value, password: passwordRef.current.value })
            };
            fetch(`${URL}/login`, requestOptions)
                .then(response => response.json())
                .then((res) => {
                    console.log(res);
                    toast.dismiss(toastID);
                    if (res.errors) {
                        setErrors(res.errors)
                    }
                    if (res.message) {
                        setErrors([res]);
                    }
                    if (res.isAdmin === true) {

                        navigate("/blog")
                    }
                    if (res.isAdmin === false) {
                        setErrors([{message: "Sorry! only admin can access this page!"}])
                        console.log(errors);
                    }
                })
                .catch((err) => { setErrors("Error occurred during login"); console.error(err); toast.dismiss(toastID); })
        }
        else {
            toast.error("Please fill all the fields", { duration: 3000 });
        }
    }
    return (
        <section className='min-h-screen flex lg:px-64 flex-col gap-2 items-center justify-center py-24 bg-black'>
            <div className='flex flex-col gap-4'>
                <div className='self-center flex items-center gap-2'><h1 className="text-white font-bold text-2xl">Admin Login</h1></div>
                <form className='flex flex-col gap-3' action={`${URL}/login`} method="POST">
                    <input ref={userNameRef} type="text" name="username" autoComplete="username" placeholder='Username' className='px-3 py-2 border-2 border-slate-300 text-white bg-black rounded-md outline-none focus:border-green-500' />
                    {errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("username") || err.message.toLowerCase().includes("user")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })}
                    <input ref={passwordRef} type="password" autoComplete="current-password" name="password" placeholder='Password' className='px-3 py-2 border-2 border-slate-300 text-white bg-black rounded-md outline-none focus:border-green-500' />
                    {errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("password")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })}
                    <button className='px-3 py-1 bg-white text-black self-center rounded-md hover:bg-slate-300 ease-in-out duration-150' onClick={(e) => loginUser(e)}>Log In</button>
                </form>
                    {errors && errors.map((err) => {
                        if (err.message.toLowerCase().includes("admin")) {
                            return <ErrorMessage message={err.message} key={err.message} />
                        }
                    })}
            </div>
            <Toaster toastOptions={{ duration: 3000 }} />
        </section>
    );
}

export default Login;