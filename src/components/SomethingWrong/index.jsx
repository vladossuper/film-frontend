import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export const SomethingWrong = () => {
	const history = useHistory();
	const reloadPage = () => {
		history.go(0);
	};

	const backHome = () => {
		history.push('/');
	};

	return (
		<Card>
			<CardContent>
				<Typography variant="h5" component="h2">
					Oops, something went wront. Reload page please.
				</Typography>
			</CardContent>
			<CardActions>
				<Button onClick={reloadPage}>
					Reload
				</Button>
				<Button onClick={backHome}>
					Back to Home
				</Button>
			</CardActions>
		</Card>
	)
}