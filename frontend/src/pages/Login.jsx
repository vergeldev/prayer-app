import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";
import { Link } from "react-router-dom";
import Spinner from "../components/Spinner";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    dispatch(login(userData));
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen">
        <div className="bg-gray-200 w-full md:w-1/2 h-full">
          {/* Left container */}
        </div>
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center">
          <section className="py-10 test">
            <div className="max-w-md mx-auto overflow-hidden test">
              <div className="py-4 px-6">
                <h2 className="text-2xl font-bold mb-4 text-center">Log in</h2>
                <form className="space-y-4" onSubmit={onSubmit}>
                  <div>
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="border rounded-lg py-2 px-3 w-full"
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Enter your email"
                      onChange={onChange}
                      value={email}
                      required
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-700 font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className="border rounded-lg py-2 px-3 w-full"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Enter password"
                      onChange={onChange}
                      value={password}
                      required
                    />
                  </div>
                  <div>
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mt-10"
                      type="submit"
                    >
                      Log in
                    </button>
                  </div>
                  <p className="text-gray-500 test">
                    Don't have an account?{" "}
                    <span className="text-black">
                      <Link to="/register">Sign up for free!</Link>
                    </span>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Login;
