
import React, { useContext,useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
export const DataContext = React.createContext();

function App() {
  const [news, setNews] = useState([
    
    {
      id: '16',
      category: 'News',
      title: `TIC Chairman, Hon. Hamisu Anani Mohammed Expresses Gratitude to Stakeholders for Success of WASE ROCK Broadcasting Network's Success
 `,
      author: ``,
      content: `The Chairman, Transition Implementation Committee, Wase Local Government Council,
       Hon. Alh. Hamisu Anani Mohammed, has expressed his heartfelt appreciation for the invaluable
        contributions and motivation provided by the Commissioner for Local Government and Chieftaincy
         Affairs in Plateau State, Chief Ephraim Usman. In a press release issued to the WASE ROCK FM News Desk,
          Hon. Hamisu Anani acknowledged Chief Ephraim's instrumental role in the successful establishment of the
           WASE ROCK Broadcasting Network.
Additionally, Hon. Hamisu Anani extended his gratitude to Hon. Yakubu Jang, a renowned stakeholder in Plateau State and a steadfast supporter of the WASE ROCK Broadcasting Network project, for his goodwill and unwavering commitment to the initiative."`,
      date: '15th August, 2024',
      images: [
        { pic: '/aug15img2.jpg' },
        { pic: '/aug15img.jpg' },
      ],
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
