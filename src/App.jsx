
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/BoodMarks/BookMarks'
import Header from './Components/Header/Header'

function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readTime, setReadTime] =useState(0);
  console.log(bookMarks)
  const handleBoomMark = blog => {
    const newBookMark = [...bookMarks, blog];
    setBookMarks(newBookMark)
  }

  const handelAddToRead = (time) => {
    const newTime = readTime + time;
    setReadTime(newTime)
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex max-w-5xl mx-auto mt-6 gap-x-4'>
      <Blogs handleBoomMark={handleBoomMark}
      handelAddToRead={handelAddToRead}
      ></Blogs>
      <BookMarks bookMarks={bookMarks}
      readTime={readTime}
      ></BookMarks>
      </div>
    </>
  )
}

export default App
