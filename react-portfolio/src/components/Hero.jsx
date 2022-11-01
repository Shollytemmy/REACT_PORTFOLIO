import { Biography } from './Biography'
import './styles.css'

const bio = `Passionate di bidang Frontend Dev dan UI/UX Design.
 Suka membangun antarmuka website yang fast
 -performace dan well-design menggunakanteknologi
 -teknologi terbaru.`

export const Hero = () => {
  return (
    <div className='container'>
        <Biography name='Bunyameen Shola' bio={bio}  />
    </div>
  )
}
