import React from 'react'
import PropTypes from 'prop-types'
import { CardContainer, Brand, Model, LinkTo, Year, Color, Plate, BottomCard, CarImage, InfoContainer } from './style'

const Card = ({ brand, model, year, color, item, plate, onPress }) => (
<LinkTo to={{
  pathname: '/edit-vehicle',
  state: {
    item: item
  }
}}>
<CardContainer>
<CarImage src={'https://images-na.ssl-images-amazon.com/images/I/41Y%2B5ZV5TOL._SS600_.jpg'} />
<InfoContainer>
<BottomCard>
<Brand>{brand}</Brand>
<Model>{model}</Model>
</BottomCard>
<Year>Year: {year}</Year>
<Color>Color: {color}</Color>
<Plate>Plate: {plate.toUpperCase()}</Plate>
</InfoContainer>
</CardContainer>
</LinkTo>
)

Card.defaultProps = {
brand: 'Renault', 
model: 'Sandero',
year: 2019,
color: 'red',
plate: 'isx555'
}

Card.propTypes = {
  brand: PropTypes.string,
  model: PropTypes.string,
  year: PropTypes.number,
  color: PropTypes.string,
  plate: PropTypes.string
}

export default Card