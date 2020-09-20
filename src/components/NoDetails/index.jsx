import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

export const NoDetails = () => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="h2">
					No film
				</Typography>
			</CardContent>
			<CardActions>
				<Button>
					<Link to={{ pathname: '/' }}>
						Back to home
					</Link>
				</Button>
			</CardActions>
		</Card>
	)
}