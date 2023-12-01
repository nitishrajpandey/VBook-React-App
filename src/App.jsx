import { useState } from "react";
import { FooterArea, Navbar, Sidebar } from "./Components";
import CreatePost from "./Components/CreatePost";
import PostContainer from "./Components/PostContainer";
import Postcontainerprovider from "./Store/Post-container-store";

function App() {
  const [selectTab, setSelectTab] = useState("Home");

  return (
    <Postcontainerprovider>
      <div className="w-full">
        <div>
          <Navbar />
        </div>
        <div className=" flex flex-col xs:flex-row">
          <div className="  xs:min-w-[200px] xs:h-[82vh]">
            <Sidebar setSelectTab={setSelectTab} selectTab={selectTab} />
          </div>
          <div className="w-full   h-[82vh] overflow-auto  scroll-smooth px-7 py-10 no-scrollbar">
            {selectTab === "Home" ? <PostContainer /> : <CreatePost />}
          </div>
        </div>
        <div>
          <FooterArea />
        </div>
      </div>
    </Postcontainerprovider>
  );
}

export default App;
