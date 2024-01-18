import "./App.css";

// Feed, SideBar ve Widgets bileşenlerini içe aktar
import Feed from "./Components/Feed/Feed";
import SideBar from "./Components/SideBar/SideBar";
import Widgets from "./Components/WidGets/Widgets";

const App = () => {
  return (
    <>
      {/* Ana uygulama bileşeni */}
      <div className="MainApp">
        {/* Yan taraftaki menü */}
        <SideBar />
        
        {/* Tweetlerin gösterildiği ana içerik alanı */}
        <Feed />
        
        {/* Sağ tarafta yer alan Widgets */}
        <Widgets />
      </div>
    </>
  );
};

// Uygulama bileşenini dışa aktar
export default App;
