import Tasks from './components/tasks'
import Section from './components/context/section'
import { Route, Routes } from 'react-router-dom'
import MoviePage from './components/movies'
import Cards from './components/cards'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
      <Section level={10}>
        </Section>
    </>

  )
}