import PropTyes from 'prop-types'
import { Button } from './Button'
import {FiArrowUpRight} from 'react-icons/fi'
import {FiArrowDown} from 'react-icons/fi'

export const Biography = ({bio, name}) => {
  return (
    <div className='biography'>
        <div className="bg__circle">
             <div className="circle__wrapper">
            <div className="circle"></div>
        <div className='biography__info'>
        <h1 className='hi'>Hi 👋</h1>
        <h1 className='name'>I'm {name}</h1>
        <div className="bio_text">
            {bio}
        </div>

        </div>

        </div>
        <div className="folio__image">
            <img src="/bunyameen.jpg" alt="unsplash"  className='img__port'/>
        </div>

        </div>
       
        
        
        <div className="btn__components">
            <Button 
            label="let's work to gether" 
            icon={
                <FiArrowUpRight color='' className='arr'/> 

            }
            color='teal'
             />
            <Button label="see some of my works" icon={
                <FiArrowDown color=''  className='arr'/>

            } />
        </div>

    </div>
  )
}




Biography.propTyes = {
    bio: PropTyes.string,
    name: PropTyes.string

}
