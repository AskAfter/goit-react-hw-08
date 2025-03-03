import { Route, Routes } from 'react-router-dom';
import PhoneBook from '../Phonebook/Phonebook';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/phonebook" element={<PhoneBook />} />
      </Routes>
    </div>
  );
};
export default App;
