import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex justify-center w-screen">
      <form
        action="#"
        method="post"
        className="w-[560px] h-[600px] bg-[#E7E8EA] shadow-2xl flex items-center flex-col rounded-2xl"
      >
        <div className="flex justify-center mt-12">
          <img
            className="w-[150px] h-[150px] rounded-full"
            src="/logo.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center text-3xl font-bold mt-4">
          <p>Hệ thống quản lý chấm công</p>
        </div>
        <div className="w-[500px] mt-10 border-b-2 border-[#01A01A]">
          <label
            htmlFor="username"
            className="block text-gray-700 text-sm font-bold "
          >
            Tài khoản: <sup className="text-red-500">*</sup>
          </label>
          <input
            placeholder="Nhập tài khoản"
            type="text"
            id="username"
            name="username"
            className="text-xs w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none"
          />
        </div>
        <div className="w-[500px] mt-5 border-b-2 border-[#01A01A] relative">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold"
          >
            Mật khẩu: <sup className="text-red-500">*</sup>
          </label>
          <input
            placeholder="Nhập mật khẩu"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            className="text-xs w-full px-3 py-2 rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none"
          />
          <button
            type="button"
            className="absolute right-2 top-[75%] transform -translate-y-1/2"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="shadow-md shadow-slate-500 w-[200px] h-[50px] bg-indigo-500 text-white font-bold rounded-sm hover:bg-indigo-400 transition duration-300 ease-in-out"
          >
            Đăng nhập
          </button>
        </div>
      </form>
    </div>
  );
};
