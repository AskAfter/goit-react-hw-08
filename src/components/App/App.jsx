import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/Home/Home';
import Registration from '../../pages/Registration/Registration';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Layout from '../Layout';
import Contacts from '../../pages/Contacts/Contacts';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contacts" element={<Contacts />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
