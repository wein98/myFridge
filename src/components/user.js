import React from 'react';
import './css/user.css'

import { Grid, Image, Button } from 'semantic-ui-react'

const food = [
	{ name: 'banana', expiryDate: '01/01/01', quantity: 3},
	{ name: 'apple', expiryDate: '01/01/01', quantity: 10},
	{ name: 'milk', expiryDate: '01/01/01', quantity: 3},
	{ name: 'bread', expiryDate: '01/01/01', quantity: 1},
]

const foodLog = [ 
	{ lastin: '01/01/01', lastout: '02/02/02', user: 'Matthew' },
	{ lastin: '01/01/01', lastout: '02/02/02', user: 'Mandy' },
	{ lastin: '01/01/01', lastout: '02/02/02', user: 'Sue'},
]

const GridExampleDividedNumber = props => (
	<div>
		<div className="BackButton">
			<Button onClick={props.addTrip} color='red'>Back</Button>
		</div>

		<Grid columns={5} divided>
			<Grid.Row>
				<Grid.Column>
					<h3 className="UserTitle">
					Food
					</h3>
					{/* <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
				</Grid.Column>
				<Grid.Column>
					<h3 className="UserTitle">Expiry Date</h3>
					{/* <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
				</Grid.Column>
				<Grid.Column>
					<h3 className="UserTitle">Quantity</h3>
					{/* <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
				</Grid.Column>
				<Grid.Column>
					<h3 className="UserTitle">Quantity-type</h3>
					{/* <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
				</Grid.Column>
				<Grid.Column>
					<h3 className="UserTitle">Life-span</h3>
					{/* <Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' /> */}
				</Grid.Column>
			</Grid.Row>

			{food.map(({name, expiryDate, quantity}) => {
				return(
						<Grid.Row>
							<Grid.Column>
								{name}
							</Grid.Column>
							<Grid.Column>
								{expiryDate}
							</Grid.Column>
							<Grid.Column>
								{quantity}
							</Grid.Column>
							<Grid.Column>
								Lorem-ipsum
							</Grid.Column>
							<Grid.Column>
								Lorum-ipsum
							</Grid.Column>
						</Grid.Row>

				)
			})}

		</Grid>
	</div>
)

export default GridExampleDividedNumber