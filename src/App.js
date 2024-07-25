import logo from './logo.svg';
import './App.css';
import Events from './components/Events';
import RowOfCards from './components/RowOfCards';
import HoriRule from './components/HoriRule';
import NewsCard from './components/NewsCard';
import Upcoming from './components/Upcoming';
import Add from './components/Add';
import imageSrc from './Adds.jpg';

function App() {
  const cardsData = [
    { title: "Title 1", description: "Description 1" },
    { title: "Title 2", description: "Description 2" },
    { title: "Title 3", description: "Description 3" },
    { title: "Title 4", description: "Description 4" },
    { title: "Title 5", description: "Description 5" },
    { title: "Title 6", description: "Description 6" }
  ];
  return (
    <>
      <Events></Events>
      <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000000' }}>
        <RowOfCards />
        <RowOfCards />
        <RowOfCards />
      </div>
      <HoriRule text="Upcoming Events" />
      <div>
        <Upcoming 
            title="OPR SUMMIT 2023"
            description="FNEKHFKHEKHF EFKHKEWHFK EKHWEHFIHIW EIHFIWEHF EWHDIWE DGUWEG IGDIW"
            buttonText="Join now"
        />
      </div>
      <HoriRule text="Event News" />
      <div>
        {/* Map through the cardsData array and render CardComponent for each item */}
        {[0, 1].map((rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginBottom: '20px' }}>
            {cardsData.slice(rowIndex * 3, rowIndex * 3 + 3).map((card, index, array) => (
              <NewsCard
                key={index}
                title={card.title}
                description={card.description}
                style={{ marginRight: index !== array.length - 1 ? '10px' : '0' }} // Add marginRight except for the last card
              />
            ))}
          </div>
        ))}
      </div>
      <HoriRule text="Editorial" />
      <Add imageUrl={imageSrc} />
    </>
  );
}

export default App;
