import React from 'react'
import {useLocation} from 'react-router-dom'
import Button from './Button';
// import PropTypes from 'prop-types'

const Header = ({title, onAdd, showAdd}) => {
  const location = useLocation()
    return (
      <header className='header'>
          <h1>{title}</h1>
          {location.pathname === '/' && <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add' } onClick={onAdd} />}
      </header>
    )
  }

// const Header = (props) => {
//   return (
//     <header>
//         <h1>{props.title}</h1>
//     </header>
//   )
// }

// Header.propTypes = {
//     title: PropTypes.string,
     
// }

// Header.defaultProps = {
//     title: 'Task Tracker'
// }

export default Header