import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const header = ({title,showAdd,showAddTask}) => {
    // const onClick = (e) => console.log('click')
    return (
        <header className = "header">
            <h1 style={showAdd ? headerStyle1 :headerStyle2}>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'close' : 'Add'} onClick = {showAddTask}/>
            
        </header>
    )
}

// default 
header.defaultProps = {
    title : 'Task Tracker',
}

header.propTypes = {
    title : PropTypes.string.isRequired
}

const headerStyle1 = {
    color : 'white',
    backgroundColor : 'black',
    padding : '10px',
    
}
const headerStyle2 = {
    color : 'blue',
    backgroundColor : 'white',
    padding : '10px',
    
}
export default header
