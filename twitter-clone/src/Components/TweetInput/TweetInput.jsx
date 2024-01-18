import { Avatar, Button } from '@mui/material';
import React, { useState } from 'react';
import './TweetInput.css';

const TweetInput = ({ onTweetSubmit }) => {
  const [tweetText, setTweetText] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleTweetSubmit = async (e) => {
    e.preventDefault();

    // Kullanıcının avatar ve kullanıcı adını sabit bir değer olarak belirleyelim
    const userAvatar = "https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F316%2F835%2F6391cf35483ff%2Ejpg%3Fv%3D201910111530";
    const userName = "Papatya";

    // onTweetSubmit fonksiyonunu çağırarak ana bileşene tweet verilerini gönderin
    onTweetSubmit({ userName, userAvatar, tweetText, imageUrl });

    // Tweet gönderildikten sonra, input'ları temizleme
    setTweetText('');
    setImageUrl('');
  };

  return (
    <div className="TweetBox">
      <form>
        <div className="TweetInputBox">
          <Avatar src="https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F316%2F835%2F6391cf35483ff%2Ejpg%3Fv%3D201910111530" />
          <input
            type="text"
            placeholder="Neler oluyor?"
            value={tweetText}
            onChange={(e) => setTweetText(e.target.value)}
          />
        </div>
        <input
          type="text"
          className="TweetInput_ForImgURL"
          placeholder="Opsiyonel: URL girin"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        {/* Sadece bir adet "Tweet" butonu ekleyin */}
        <Button
          type="submit"
          className="TweetBoxBtn"
          onClick={handleTweetSubmit}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
};

export default TweetInput;
