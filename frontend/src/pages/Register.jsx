import { useState, useEffect } from "react";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  /* const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  }; */

  //to-do: add onSubmit={onSubmit} to the form

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="max-w-md mx-auto bg-white rounded-lg overflow-hidden shadow-md">
          <div className="py-4 px-6">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Registration Form
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="text"
                  name="name"
                  id="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onChange}
                  required
                />
              </div>
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
                <label
                  className="block text-gray-700 font-bold mb-2"
                  htmlFor="password"
                >
                  Confirm Password
                </label>
                <input
                  className="border rounded-lg py-2 px-3 w-full"
                  type="password2"
                  name="password2"
                  id="password2"
                  placeholder="Confirm password"
                  onChange={onChange}
                  value={password2}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
