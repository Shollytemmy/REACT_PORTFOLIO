import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

export const Stack = ({stacks, name}) => {
    console.log(stacks)
  return (
    <div>
        <p>{name}</p>
        {stacks.map((stack) =><li><MdKeyboardArrowRight />{stack}</li>
        )}
    </div>
  )
}
