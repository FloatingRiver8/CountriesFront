import React from 'react'
import { Link } from 'react-router-dom'
import s from './styles/landing.module.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

function LandingPage() {
    return (
        <div className={`${s.landing_cardDiv}`}>

            <Link to='/home'><Button colorScheme='teal' variant='outline' className={`${s.landing_button}`}>
                Wellcome!
            </Button></Link>
        </div>


    )
}

export default LandingPage