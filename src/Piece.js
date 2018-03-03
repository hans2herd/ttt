import React from 'react'
import Glam from 'glamorous'

const PieceTitle = Glam.div({
    fontSize: '240px'
    }
)


export default (props) => (
    <PieceTitle>
        {props.type}
    </PieceTitle>
)

