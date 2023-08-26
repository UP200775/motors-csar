import { Header } from './components/Header'
import { Routes, Route } from 'react-router-dom'
import { MainArticle } from './components/MainArticle'
import { NewContainer } from './components/NewContainer'
import { ArticlesContainer } from './components/ArticlesContainer'
import { Cars } from './components/Cars'
import { NewCar } from './components/cars/NewCar'
import { SlideBar } from './components/SlideBar'

function App() {
  return (
    <main className='px-4 pt-6'>
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <div className='md:flex lg:gap-8'>
              <MainArticle />
              <NewContainer />
            </div>
            <ArticlesContainer />
          </>
        } />

        <Route path='Autos' element={
          <>
            <div className='lg:gap-8'>
              <Cars />
              <NewCar />
            </div>
          </>
        } />

        <Route path='Refacciones' element={
          <>
            <div className='md:flex lg:gap-8'>
              <h1>Refacciones para tu auto</h1>
            </div>
          </>
        } />

        <Route path='Artículos' element={
          <>
            <div className='md:flex lg:gap-8'>
              <h1>Artículos</h1>
            </div>
          </>
        } />

        <Route path='Comunícate' element={
          <>
            <div className='md:flex lg:gap-8'>
              <h1>Dejanos un mensaje</h1>
            </div>
          </>
        } />
      </Routes>
    </main>
  )
}

export default App
