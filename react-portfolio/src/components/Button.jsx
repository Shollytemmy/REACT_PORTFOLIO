import PropTypes from 'prop-types'

export const Button = ({color, label, icon:Icon}) => {
    const COLORS = {


    }
  return (
    <button className={`btn__default ${color === 'teal' ? 'btn__together': 'btn__workExp'}`}>
        {label} {Icon}

    </button>
  )
}

Button.propTypes = {
    color: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.element
}
