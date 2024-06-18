import React from 'react'
import HTMLFlipBook from "react-pageflip";


const index = () => {
  return (
    <div  style={{marginTop:'75px'}}>
      <HTMLFlipBook className='mx-auto' width={700} height={500}>
      <div className="demoPage">Page 1</div>
      <div className="demoPage">Page 2</div>
      <div className="demoPage">Page 3</div>
      <div className="demoPage">Page 4</div>
    </HTMLFlipBook>
    </div>
  )
}

export default index
