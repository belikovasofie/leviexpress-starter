import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker';

export const Home = () => {
  const [journey, setJourney] = useState(null);
  console.log(journey);

  return (
    <main>
      <JourneyPicker onJourneyChange={(data) => setJourney(data)} />
      {journey && <p>Nalezeno spojení s id {journey.journeyId}</p>}
    </main>
  );
};
