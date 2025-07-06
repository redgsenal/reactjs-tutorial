import React from 'react'
import './myStyleSheet.css';

function StyleSheet(props) {
    let classNamePrimary = props.isPrimary && 'primary';
    let classNameSecondary = !props.isPrimary && 'secondary';
    return (
        <>
            <div className={`${classNamePrimary} font-xl`}>StyleSheets</div>
            <div className={`${classNameSecondary} font-xl`}> StyleSheets</div >
        </>
    )
}

export default StyleSheet