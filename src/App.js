import Tasks from './components/tasks'
import Section from './components/context/section'
import { Route, Routes } from 'react-router-dom'
import MoviePage from './components/movies'
import Cards from './components/cards';
import Board from './components/kanban-board';
import SideBarV2 from './components/side-bar-v2';
import KanbanBoardV2 from './components/kanban-board-v2';
import ReRenderScenarios from './components/re-render-scenarios';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Cards />} />
        <Route path='/re-render-scenarios' element={<ReRenderScenarios />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/board' element={<Board />} />
        <Route path='/board-V2' element={<KanbanBoardV2 />} />
        <Route path='/sidebar' element={<SideBarV2 />} />
      </Routes>
      <Section level={10}></Section>
    </>
  );
}