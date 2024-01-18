import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../../Firebase';
import TweetInput from '../TweetInput/TweetInput';

const MainPost = () => {
  // State tanımlamaları
  const [tweets, setTweets] = useState([]);

  // Veritabanından tweet'leri getiren ve bileşeni monte edildiğinde çağrılan useEffect
  useEffect(() => {
    const fetchTweets = async () => {
      const tweetsCollection = collection(db, "tweets");
      const tweetsSnapshot = await getDocs(tweetsCollection);
      const tweetsData = tweetsSnapshot.docs.map(doc => doc.data());
      setTweets(tweetsData);
    };

    fetchTweets();
  }, []); // Bu etkileşim sadece bir kere çalışır (componentDidMount benzeri)

  // Tweet gönderme işlemini gerçekleştiren fonksiyon
  const handleTweetSubmit = async (tweetData) => {
    // Firestore'a tweet eklemek için
    const newTweet = {
      userName: tweetData.userName,
      userAvatar: tweetData.userAvatar,
      verified: true,
      postText: tweetData.tweetText,
      imageUrl: tweetData.imageUrl,
      timestamp: serverTimestamp()
    };

    // Firestore'a eklenen tweet'in ID'sini alabilirsiniz
    const docRef = await addDoc(collection(db, "tweets"), newTweet);
    console.log("Tweet added with ID: ", docRef.id);

    // Eklenen tweet'i ekranda göstermek için tweet listesini güncelleme
    setTweets((prevTweets) => [newTweet, ...prevTweets]);
  };

  return (
    <div>
      {/* Yalnızca bir kez TweetInput'u ekleyin ve handleTweetSubmit fonksiyonunu prop olarak geçirin */}
      <TweetInput onTweetSubmit={handleTweetSubmit} />

      {/* Gönderilen tweet'leri görüntüleme */}
      {tweets.map((tweet, index) => (
        <div key={index} className="UserTweet">
          {/* Kullanıcı avatarı */}
          <img src="https://iis-akakce.akamaized.net/p.z?%2F%2Fimg%2Epttavm%2Ecom%2Fpimages%2F592%2F316%2F835%2F6391cf35483ff%2Ejpg%3Fv%3D201910111530" alt="Avatar" className="Avatar" />
          {/* Kullanıcı adı */}
          <p className="UserName">{tweet.userName}</p>
          {/* Tweet içeriği */}
          <p>{tweet.postText}</p>
        </div>
      ))}
    </div>
  );
};

export default MainPost;
