import React from 'react'

const WhiteBannerConsole = ({image,custom}) => {

  const LoadImage =  ()=> {
    console.log(custom)
    if(custom !== undefined){
      return( <>
      <img width="500" src={`http://127.0.0.1:8000/media/tmp/done/customProduct${custom}_b.png`} />
      <img width="500" src={`http://127.0.0.1:8000/media/tmp/done/customProduct${custom}_k.png`} />
      </>)
    }else {
      if(image === -1){
        return ( <>
            <img width="500" src="http://127.0.0.1:8000/media/lap-back.png" />
            <img width="500" src="http://127.0.0.1:8000/media/lap-keyboard.png" />
        </>)
      }else {
        return (
          <>
              <img width="500" src={`http://127.0.0.1:8000/media/products/done/product${image}_b.png`} />
              <img width="500" src={`http://127.0.0.1:8000/media/products/done/product${image}_k.png`} />
          </>
        )
      }
    }
  }
  return (
    <div className='bg-white flex justify-between'>
      <LoadImage/>
    </div>
  )
}

export default WhiteBannerConsole