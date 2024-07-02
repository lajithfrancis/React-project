import Tasks from './components/tasks'
import Section from './components/context/section'
import { Route, Routes } from 'react-router-dom'
import MoviePage from './components/movies'
import Cards from './components/cards';
import Board from './components/kanban-board';
import SideBarV2 from './components/side-bar-v2';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/board' element={<Board />} />
        <Route path='/sidebar' element={<SideBarV2 />} />
      </Routes>
      <Section level={10}></Section>
    </>
  );
}