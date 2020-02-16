import React from 'react';
import './css/user.css'

import { Grid, Image, Button } from 'semantic-ui-react'

const GridExampleDividedNumber = props => (
	<div>
		<div className="BackButton">
			<Button onClick={props.addTrip} color='red'>Back</Button>

		</div>

		<Grid columns={3} divided>
			<Grid.Row>
				<Grid.Column>
					Food
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
				<Grid.Column>
					Expiry Date
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
				<Grid.Column>
					Life-span
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
			</Grid.Row>

			<Grid.Row>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
				<Grid.Column>
					<Image src='https://react.semantic-ui.com/images/wireframe/media-paragraph.png' />
				</Grid.Column>
			</Grid.Row>
		</Grid>

	</div>
)

export default GridExampleDividedNumber