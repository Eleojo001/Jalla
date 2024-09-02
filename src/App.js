
import React, { useContext,useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import NewsPage from './categories/NewsPage';
import NewPageDetails from './categories/NewPageDetails';
export const DataContext = React.createContext();

function App() {
  const [news, setNews] = useState([
    
    {
      id: 16,
      category: 'News',
      title: `Nigeria Youth League Cup confirmed Mighty Jet 
      international and Plateau Jet SC
       ahead of league that will commence September 2024.`,
      author: `Yakubu Joseph E`,
      content: `The N-Youth League Cup where we bring you the latest and most comprehensive coverage of the competition! Whether you are a die-hard fan or simply have a passion for football, we are here to provide you with engaging content, insightful analysis, and a platform to connect with fellow enthusiasts and Lovers of youth Football from around the Country and the world over.

Who we are: We are a team of passionate football enthusiasts who have come together to create a platform that Congregates all lovers of youth football and football at large to witness the avalanche of raw talents, skills and Energy into a New light here in Nigeria.

At our football website, we understand the power and excitement that football brings to millions of people around the globe.

 Our mission is to capture the essence of this incredible Competition and deliver it to you in the form of captivating and Scintillating articles, news updates, match previews, reviews, Exciting Fixtures, player profiles, and much more.

Our team of dedicated football enthusiasts consists of experienced writers, journalists, and analysts who eat, sleep, and breathe football. With their deep knowledge and love for the game, they ensure that our content is informative, entertaining and thrilling. We strive to cover all aspects of the competition, from the nail-biting action on the pitch to the off-field drama, player reactions, and the latest developments in this beautiful competition of football.

If you are interested in the top-tier leagues such as the Nigerian Premier League, English Premier League, La Liga, Serie A, Bundesliga, or international competitions like the FIFA World Cup, UEFA Champions League, or Copa America, then you will be interested in this Youth Football Tournament because this is where stars are bathed, groomed and Baptized in the football hall of fame.  Follow our every fixture and witness the rise of a new star in the galaxy of football.

 Additionally, we value the opinions and voices of our readers. We encourage you to join our thriving community by participating in discussions, sharing your thoughts, and interacting with fellow football enthusiasts on social media. Our Social media serves as a platform for fans to connect, exchange ideas, and celebrate the sport that unites us all.

So, whether you are looking for breaking news, match reports, tactical breakdowns, or simply want to stay up-to-date with the latest fixtures, analysis,or latest news as it concerns this competition then our website is your ultimate destination. We are committed to delivering high-quality content that caters to the diverse interests of football fans across the Country and beyond.

Thank you for choosing to follow the actions in this Competition.

 We hope you enjoy your time here and join us on this exciting journey as we celebrate Youth talent and the Beautiful round leather game together!`,
      date: '15th August, 2024',
      images: ['/platu2.jpg','/platu.jpg','/platu3.jpg'
        // { pic: '/platu.jpg' },
        // { pic: '/platu.jpg' },
      ],
      image:'platu.jpg'
    },
    {
      id: 17,
      category: 'News',
      title: `Nigeria, officially the Federal Republic of Nigeria,
       is a country in West Africa.`,
      author: `Yakubu Joseph E`,
      content: `Nigeria, an African country on the Gulf of Guinea, has many natural landmarks and wildlife reserves. Protected areas such as Cross River National Park and Yankari National Park have waterfalls, dense rainforest, 
      savanna and rare primate habitats. One of the most recognizable sites is Zuma Rock, a 725m-tall monolith outside the capital of Abuja that’s pictured on the national currency. ― Google`,
      date: '15th August, 2024',
      images: ['/nigeria2.jpg','/Nigeria.jpg','/platu3.jpg'
        // { pic: '/platu.jpg' },
        // { pic: '/platu.jpg' },
      ],
      image:'nigeria2.jpg'
    },
  ]);

  const [programmes, setProgrammes] = useState([
    {
      id: '1',
      category: 'programmes',
      title: 'Sirin Noma',
      content: ``,
      date: '26th December, 2023',
      image: '/sirinNoma.jpeg',
    },
    {
      id: '2',
      category: 'programmes',
      title: 'Ilimin Kasuwanci',
      content: ``,
      date: '26th December, 2023',
      image: '/llimin.jpeg',
    },
  ]);

  return (
    <div className='App'>
      <BrowserRouter>
        <DataContext.Provider value={{ news, programmes }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/news' element={<NewsPage/>} />
            <Route path='/news/:id' element={<NewPageDetails/>} />
          </Routes>
        </DataContext.Provider>
      </BrowserRouter>
      <div className='home-container'></div>
    </div>
  );
}

export default App;






// import './App.css';
// import React, { useContext,useState } from 'react';
// import { Route, BrowserRouter, Routes } from 'react-router-dom';
// import Home from './Home';
// export const DataContext = React.createContext();

// function App() {
//   const [programmes, setProgrammes] = useState([
//     {
//       id: '1',
//       category: 'programmes',
//       title: 'Sirin Noma',
//       content: ``,
//       date: '26th December, 2023',
//       image: '/sirinNoma.jpeg',
//     },
//     {
//       id: '2',
//       category: 'programmes',
//       title: 'Ilimin Kasuwanci',
//       content: ``,
//       date: '26th December, 2023',
//       image: '/llimin.jpeg',
//     },
    
//   ]);
//   return (
//     <div className="App">
      
//     </div>
//   );
// }

// export default App;
