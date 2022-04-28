import React from "react";
import { Link } from "react-router-dom";

const MenuMore = () => {
  return (
    <div>
      <ul className="list_menu">
        <li className="list_menu_item">
          <Link to="/" className="list_menu_item-action">
            <p>Trang chủ</p>
          </Link>
        </li>
        <li alt="" href="" className="list_menu_item menu">
          <Link to="/" alt="" href="" className="list_menu_item-action">
            <p>Tủ sách nhện </p>
          </Link>
          <ul className="menu_hove">
            <li>
              <Link to="/" alt="" href="" className="list_menu_item-action">
                <p> sách a </p>
              </Link>
            </li>
          </ul>
        </li>
        <li className="list_menu_item">
          <Link to="/" alt="" href="" className="list_menu_item-action">
            <p>Chuyện nhà nhện</p>
          </Link>
        </li>
        <li className="list_menu_item">
          <Link to="/" className="list_menu_item-action">
            <p>Dự án mới</p>
          </Link>
        </li>
        <li className="list_menu_item">
          <Link to="/" className="list_menu_item-action">
            <p>Liện hệ</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default MenuMore;
