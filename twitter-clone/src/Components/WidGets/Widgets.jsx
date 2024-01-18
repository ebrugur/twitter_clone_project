// Widgets.jsx

import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";

const Widgets = () => {
  return (
    <div className="Widgets">
      {/* Arama girişi */}
      <div className="WidgetsInput">
        <SearchIcon className="WidgetsSearchIcon" />
        <input type="text" placeholder="Arama yapın" className="" />
      </div>

      {/* Ana Widget Konteyner */}
      <div className="WidgetsMainContainer">
        <h3>Neler oluyor?</h3>

        {/* Twitter Tweet Gömme */}
        <TwitterTweetEmbed tweetId="1743676890378801541" />

        {/* Twitter Zaman Çizelgesi Gömme */}
        <TwitterTimelineEmbed
          screenName="beyzamontanaa"
          sourceType="profile"
          options={{ height: 450 }}
        />
      </div>
    </div>
  );
};

export default Widgets;
