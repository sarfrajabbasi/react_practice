import React from 'react'

const Child4 = ({name}) => {
    const date = new Date();
    console.log('Child4 Render');
  return (
    <div>
        Hello {name}. It is currently {date.getHours()}: {date.getMinutes()} :{date.getSeconds()}
    </div>
  )
}
export const MemoizedChild4 = React.memo(Child4);