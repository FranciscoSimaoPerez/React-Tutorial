import React, { Fragment } from 'react'

function About() {
    return (
        //Fragment é um componente 'fantasma', não é mostrado no DOM, mas serve para que não seja necessário que o return esteja dentro de um componente
        <Fragment> 
            <h4>About</h4>
            <p>This is the about page and there's nothing to know about!</p>
        </Fragment>
    )
}

export default About