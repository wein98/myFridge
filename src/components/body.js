import React from 'react';
import Cards from './card';
import User from './user';
import { Card, Button, Image } from 'semantic-ui-react'


class card2 extends React.Component {
	constructor(props) {
		super(props);
		this.state = { isEmptyState: true };
	}

	renderCard() {
		return(
<Card.Group items={this.props.users} centered='true'>
		{this.props.users.map(({name, healthylevel, image, food}) => {
			return(
				<Card className="card">
					<Card.Content>
						<Image 
							floated='right'
							size='mini'
							src={image}
						/>
						<Card.Header textAlign='left'>{name}</Card.Header>
						<Card.Meta textAlign='left'>Healthy level: {healthylevel}</Card.Meta>
						<Card.Description>Food count: {food}</Card.Description>
					</Card.Content>
					<Card.Content extra>
        		<div className='ui two buttons'>
          		<Button onClick={this.triggerAddTripState} color='olive'>
            	View Food
          		</Button>
    
        		</div>
      		</Card.Content>
				</Card>

			)
		})
		}
  </Card.Group>		)
	}

	triggerAddTripState = () => {
		this.state.isEmptyState ? this.setState({isEmptyState: false, isAddTripState: true}) : this.setState({isEmptyState: true, isAddTripState: false})
  }

	render() {
		return(
			<div>
      {this.state.isEmptyState && <Cards users={this.props.users} addTrip={this.triggerAddTripState}/>}

      {this.state.isAddTripState && <User addTrip={this.triggerAddTripState}/>}
    </div>
		)
		// <Button onClick={this.state.a=false}>Press</Button>
	}
}

export default card2;