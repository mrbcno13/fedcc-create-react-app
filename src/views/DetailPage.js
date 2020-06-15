import React, {useEffect} from 'react'

function DetailPage(props) {
  useEffect(() => {
    console.log(props);
    return () => {
      // cleanup
    }
  }, [props])
  return (
    <div></div>
  )
}

export default DetailPage
