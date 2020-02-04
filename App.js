import axios from 'axios';
const { useEffect, useState } = React;
const [guests, setGuests] = useState([]);

export default function App() {
  useEffect(() => {
    const getGuests = async () => {
      await axios.get('./api/guests').then(response => setGuests(response));
    };
  }, []);
}
