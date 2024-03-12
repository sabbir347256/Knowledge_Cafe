import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/Bookmarks/BookMark'
function App() {
  return (
    <>
      <Header></Header>
      <div className='flex'>
      <Blogs></Blogs>
      <BookMark></BookMark>
      </div>
    </>
  )
}

export default App
