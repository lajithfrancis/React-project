import Tasks from './components/tasks'
import Section from './components/context/section'
import { Route, Routes } from 'react-router-dom'
import MoviePage from './components/movies'
import YoutubePage from './components/youtube';

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Tasks />} />
        <Route path='/movies' element={<MoviePage />} />
        <Route path='/youtube' element={<YoutubePage />} />
      </Routes>
      <Section level={10}></Section>
    </>
  );
}