import { Route, Routes } from 'react-router-dom';
import PhoneBook from '../Somewrap/Phonebook';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/phonebook" element={<PhoneBook />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
export default App;
