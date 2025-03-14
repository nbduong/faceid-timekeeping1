import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Webcam from "react-webcam";
import { div } from "framer-motion/client";

export default function ManageTimeKeeping() {
  const [showCamera, setShowCamera] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // Ngày được chọn để hiển thị modal
  const [isModalOpen, setIsModalOpen] = useState(false); // Trạng thái modal

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startDay = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Xử lý khi bấm vào ngày trong lịch
  const handleDayClick = (day) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
    setIsModalOpen(true);
  };

  return (
    <div className="w-screen border-2 bg-[url(/background-white.jpg)] bg-cover">
      <div className="flex w-max m-16 ">
        <div className="mx-auto w-max bg-gray-100 p-4 rounded-lg shadow-xl ">
          {/* Header */}
          <div className="flex justify-between items-center pt-5 px-4 bg-gray-200 rounded-t-lg">
            <button onClick={prevMonth}>
              <ChevronLeft className="w-6 h-6" />
            </button>
            <h2 className="text-lg font-bold">
              <span>Bảng chấm công </span>
              {currentDate.toLocaleString("vi-VN", {
                month: "long",
                year: "numeric",
              })}
            </h2>
            <button onClick={nextMonth}>
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Ngày trong tuần */}
          <div className="grid grid-cols-7 text-center font-bold bg-gray-200 py-2">
            {[
              "Thứ Hai",
              "Thứ Ba",
              "Thứ Tư",
              "Thứ Năm",
              "Thứ Sáu",
              "Thứ Bảy",
              "Chủ Nhật",
            ].map((day, index) => (
              <div key={index} className="p-2 text-green-700">
                {day}
              </div>
            ))}
          </div>

          {/* Ngày trong tháng */}
          <div className="grid grid-cols-7 mt-2">
            {[...Array(startDay)].map((_, index) => (
              <div key={index} className="p-8"></div>
            ))}
            {[...Array(daysInMonth)].map((_, index) => (
              <div
                key={index}
                className="p-8 px-10 border text-center font-semibold border-gray-500 cursor-pointer hover:bg-gray-300"
                onClick={() => handleDayClick(index + 1)}
              >
                {index + 1}
              </div>
            ))}
          </div>
        </div>

        <div></div>

        {/* Modal */}
        {isModalOpen && selectedDate && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
              <div className="flex justify-between items-center border-b pb-2">
                <h3 className="text-lg font-bold">Chi tiết chấm công</h3>
                <button onClick={() => setIsModalOpen(false)}>
                  <X className="w-6 h-6" />
                </button>
              </div>
              <p className="mt-4">
                Ngày:{" "}
                <span className="font-bold">
                  {selectedDate.toLocaleDateString("vi-VN")}
                </span>
              </p>
              <p className="mt-2">
                Trạng thái chấm công:{" "}
                <span className="font-bold">Chưa chấm công</span>
              </p>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                  onClick={() => setShowCamera(true)}
                >
                  Check-in
                </button>
              </div>
            </div>
          </div>
        )}
        {showCamera && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <h2 className="text-xl font-semibold mb-4">Chi tiết chấm công</h2>
              <Webcam className="w-[800px] h-[600px] rounded-lg border-2 border-gray-300" />
              <div className="flex justify-between mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-800"
                  onClick={() => setShowCamera(false)}
                >
                  Đóng
                </button>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-800">
                  Check-in
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
