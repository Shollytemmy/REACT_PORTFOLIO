import PropTyes from 'prop-types'
import { Button } from './Button'
import {BsFillArrowUpRightSquareFill} from 'react-icons/bs'
import {BsFillArrowDownSquareFill} from 'react-icons/bs'

export const Biography = ({bio, name}) => {
  return (
    <div className='biography'>
        <div className='biography__info'>
        <h1>Hi 👋</h1>
        <h1 className='name'>I'm {name}</h1>
        <div className="bio_text">
            {bio}
        </div>

        </div>
        <div className="btn__components">
            <Button 
            label="let's work to gether" 
            icon={
                <BsFillArrowUpRightSquareFill /> 

            }
            color='teal'
             />
            <Button label="see some of my works" icon={
                <BsFillArrowDownSquareFill />

            } />
        </div>

    </div>
  )
}




Biography.propTyes = {
    bio: PropTyes.string,
    name: PropTyes.string

}
