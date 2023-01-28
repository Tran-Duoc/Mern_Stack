import React from "react";
import { BsFacebook } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

const Footer = () => {
   return (
      <div className="flex flex-col bg-[#edf2f4] mt-8 overflow-hidden rounded-2xl text-center md:mt-3">
         <div className="flex items-start justify-between text-left py-5 px-10 sm:flex-col sm:gap-5 md:px-3 ">
            <div>
               <span className="footer_title">Hỗ trợ - dịch vụ</span>
               <ul className="footer_list">
                  <li className=" footer_item">Tra cứu đơn hàng</li>
                  <li className=" footer_item">Chính sách bảo mật</li>
                  <li className=" footer_item">Khiếu nại</li>
                  <li className=" footer_item">Câu hỏi thường gặp</li>
               </ul>
            </div>
            <div>
               <span className="footer_title">Thông tin liên hệ</span>
               <ul className="footer_list">
                  <li className=" footer_item">Chăm sóc khách hàng</li>
                  <li className=" footer_item">Hỗ trơ tư vấn online</li>
               </ul>
            </div>
            <div>
               <span className=" footer_title">Hỗ trợ</span>
               <ul className="footer_list">
                  <li className=" footer_item">
                     Tông đài: <span>123456789</span> (7:30 - 16:30)
                  </li>
               </ul>
            </div>
            <div>
               <div className="text-4xl sm:flex sm:gap-10 ">
                  <BsFacebook className="footer_social text-blue-500" />
                  <AiFillTwitterCircle className="footer_social text-blue-400 " />
                  <AiFillYoutube className="footer_social text-red-600" />
                  <SiZalo className="footer_social bg-blue-400 text-white rounded-xl p-1" />
               </div>
            </div>
         </div>
         <div className="bg-[#e9c46a] mt-3 p-5 text-xs">
            <p className="mb-2">
               © 2020. BẤT ĐỘNG SẢN THÀNH TÂM. MST: 0106713191. (Đăng ký lần
               đầu: Ngày 15 tháng 12 năm 2014, Đăng ký thay đổi ngày 24/11/2022)
               GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021
            </p>
            <span>
               Địa chỉ: 89 Tam Trinh, P. Mai Động, Q. Hoàng Mai, Thành phố Hà
               Nội. Điện thoại: 1900.2091. Chịu trách nhiệm nội dung: Hoàng Ngọc
               Chiến.
            </span>
         </div>
      </div>
   );
};

export default Footer;
