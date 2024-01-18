import BookmarkIcon from '@mui/icons-material/Bookmark';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Person2Icon from '@mui/icons-material/Person2';
import SearchIcon from '@mui/icons-material/Search';
import TwitterIcon from "@mui/icons-material/Twitter";
import SideBarOptions from "../SideBarOptions/SideBarOption";
import "./SideBar.css";

const SideBar = () => {
    return (
        <>
            {/* Sol taraf (Sidebar) */}
            <div className="SideBar">
                {/* Twitter logosu */}
                <TwitterIcon className="TwitterIcon_SideBar"/>
                
                {/* Her bir seçeneği temsil eden bileşenler */}
                <SideBarOptions Icon={HomeIcon} Text="Anasayfa"/>
                <SideBarOptions Icon={SearchIcon} Text="Keşfet"/>
                <SideBarOptions Icon={NotificationsIcon} Text="Bildirimler"/>
                <SideBarOptions Icon={EmailIcon} Text="Mesajlar"/>
                <SideBarOptions Icon={BookmarkIcon} Text="Listeler"/>
                <SideBarOptions Icon={Person2Icon} Text="Profil"/>
                <SideBarOptions Icon={MoreHorizIcon} Text="Daha"/>
            </div>
        </>
    );
};

export default SideBar;
