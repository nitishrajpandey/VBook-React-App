/* eslint-disable react/prop-types */
import { SidebarData } from "../ConstantData";
import { FaHome } from "react-icons/fa";
import { MdCreate } from "react-icons/md";

function Sidebar({ setSelectTab, selectTab }) {
  const handelOnclick = (item) => {
    let newTab = item.title;
    setSelectTab(newTab);
  };
  return (
    <>
      <aside className="  w-full h-full  bg-[#62a799] ">
        <div className="px-3">
          <ul className=" flex flex-col py-5 ">
            {SidebarData.map((item, index) => (
              <li
                key={index}
                className={`py-3 flex justify-center items-center gap-2 text-white font-semibold text-xl cursor-pointer 
                ${
                  item.title === selectTab &&
                  "bg-[#46474b] rounded-lg duration-300 ease-in-out"
                }
                `}
                onClick={() => handelOnclick(item)}
              >
                {item.title === "Home" && <FaHome />}
                {item.title === "Create post" && <MdCreate />}
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
