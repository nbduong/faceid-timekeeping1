import { motion } from "framer-motion";
import { useState } from "react";
import Webcam from "react-webcam";

export default function ManageAccount() {
  const [showCamera, setShowCamera] = useState(false);

  return (
    <div className="bg-[url(/background-white.jpg)] ">
      <motion.div
        className="flex flex-col p-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="opacity-[50%]">Tổng quan</span>
        <p className="text-[30px] font-semibold">Tài khoản cá nhân</p>
        <div className="flex">
          <motion.div
            className="w-[300px] bg-[#E7E8EA] shadow-2xl rounded-lg flex flex-col items-center py-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img
              src="./avatar.png"
              alt="avatar"
              className="w-[100px] h-[100px] rounded-full"
            />
            <p className="text-[30px]">Nguyễn Văn A</p>
            <p>Lập trình viên</p>
            <div className="border-b-2 opacity-5 border-black w-[250px] my-6"></div>
            <button
              className="mt-6 font-bold flex bg-black text-white border-2 border-black px-2 py-2 rounded-lg transition-all duration-300 hover:bg-white hover:text-black"
              onClick={() => setShowCamera(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                />
              </svg>
              Cập Nhật FaceID
            </button>
          </motion.div>

          <motion.div
            className="w-[672px] flex gap-6 p-6 flex-wrap bg-[#E7E8EA] shadow-2xl ml-10 rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            {/* Thông tin cá nhân */}
            <div>
              <p>
                <b>Tên</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                A
              </p>
            </div>
            <div>
              <p>
                <b>Họ</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                Nguyễn Văn
              </p>
            </div>
            <div>
              <p>
                <b>Email</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                nguyenvana@gmail.com
              </p>
            </div>
            <div>
              <p>
                <b>Ngày sinh</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                19/05/2003
              </p>
            </div>
            <div>
              <p>
                <b>Địa chỉ</b>
              </p>
              <p className="w-[624px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                Thanh Xuân, Hà Nội
              </p>
            </div>
            <div>
              <p>
                <b>Phòng ban</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                Quản trị hệ thống
              </p>
            </div>
            <div>
              <p>
                <b>Vị trí</b>
              </p>
              <p className="w-[300px] flex items-center h-10 text-[18px] p-4 border-[1px] rounded-lg border-gray-300">
                Lập trình viên Web
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Hiển thị camera khi bấm vào Cập Nhật FaceID */}
      {showCamera && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <h2 className="text-xl font-semibold mb-4">Cập nhật FaceID</h2>
            <Webcam className="w-[800px] h-[600px] rounded-lg border-2 border-gray-300" />
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={() => setShowCamera(false)}
              >
                Đóng
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                Cập nhật
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
