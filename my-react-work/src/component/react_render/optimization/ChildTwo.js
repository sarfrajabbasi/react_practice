import React from 'react'

const ChildTwo = () => {
    console.log('Child Render');
  return (
    <div>childTwo omponent</div>
  )
}
export const MemoizedChildTwo = React.memo(ChildTwo)
export default MemoizedChildTwo