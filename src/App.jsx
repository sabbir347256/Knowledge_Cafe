import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import BookMark from './components/Bookmarks/BookMark'
import { useState } from 'react'
function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const handleBookmark = blog =>{
    const newBookmark = [...bookmarks,blog];
    setBookmarks(newBookmark);
  }
  return (
    <>
      <Header></Header>
      <div className='flex max-w-6xl mx-auto'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <BookMark bookmarks={bookmarks}></BookMark>
      </div>
    </>
  )
}

export default App
