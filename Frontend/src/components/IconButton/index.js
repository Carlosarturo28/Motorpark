import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer, Brand, Model, Year, Color, Plate, BottomCard, CarImage, InfoContainer } from './style'

const Card = ({ brand, model, year, color, plate, onPress }) => (
<CardContainer onClick={() => onPress}>
</CardContainer>
)

Card.defaultProps = {
brand: 'Renault', 
model: 'Sandero',
year: '2019',
color: 'red',
plate: 'isx555'
}

Card.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.string,
  color: PropTypes.string,
  plate: PropTypes.string
}

export default Card