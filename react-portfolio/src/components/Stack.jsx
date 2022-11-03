import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'

export const Stack = ({stacks, name}) => {
    console.log(stacks)
  return (
    <div>
        <p className='stck_name'>{name}</p>
        {stacks.map((stack) =><li className='stck_lst'><MdKeyboardArrowRight />{stack}</li>
        )}
    </div>
  )
}
