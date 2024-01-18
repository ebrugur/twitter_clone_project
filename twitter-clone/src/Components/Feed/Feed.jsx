import React from 'react';
import MainPost from '../MainPost/MainPost';
import TweetInput from '../TweetInput/TweetInput';
import "./Feed.css";

const Feed = () => {
  return (
    <>
      {/* Feed bileşeni, ana sayfa içeriğini ve tweet giriş bileşenini içerir */}
      <div className="Feed">
        {/* Feed başlığı */}
        <div className="FeedHeader">
          <h3>Anasayfa</h3>
        </div>

        {/* Tweet giriş bileşeni */}
        <TweetInput />

        {/* Ana post bileşeni, gönderilen tweet'leri görüntüler */}
        <MainPost />
      </div>
    </>
  );
};

export default Feed;
