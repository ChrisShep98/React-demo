import React from 'react'
import Button from './Button';
// import PropTypes from 'prop-types'

const onClick = () => {
    console.log('click')
}

const Header = ({title}) => {
    return (
      <header className='header'>
          <h1>{title}</h1>
          <Button color='green' text='Add' onClick={onClick} />
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