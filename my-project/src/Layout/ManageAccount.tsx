export default function ManageAccount() {
  return (
    <div>
      <div className="flex flex-col p-20">
        <span className="opacity-[50%]">Tổng quan</span>
        <p className="text-[40px] p- font-semibold">Tài khoản cá nhân</p>
        <div className="w-[370px] bg-[#E7E8EA] shadow-2xl rounded-lg flex flex-col items-center py-10">
          <img
            src="./avatar.png"
            alt="avatar"
            className="w-[160px] h-[160px] rounded-full"
          />
          <p className="text-[32px]">Nguyễn Văn A</p>
          <p>Lập trình viên</p>
          <div className="border-b-2 opacity-5 border-black w-[333px] my-6"></div>
        </div>
      </div>
    </div>
  );
}
