import "./SideBarOptions.css";

const SideBarOptions = ({ active, Text, Icon }) => {
    return (
        <>
            {/* Her bir seçeneği temsil eden bileşen */}
            <div className={`SideBarOptions ${active && "SideBarOptionActive"}`}>
                {/* İkon */}
                <Icon />
                
                {/* Seçeneğin metni */}
                <h2>{Text}</h2>
            </div>
        </>
    );
};

export default SideBarOptions;
