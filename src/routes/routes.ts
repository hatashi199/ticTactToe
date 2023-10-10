import { RouteInterface } from './RouteInterface';
import Home from '../pages/Home';
import Game from '../pages/Game';

export const routes: RouteInterface[] = [
	{
		path: '/',
		page: Home,
		label: 'Home'
	},
	{
		path: '/game',
		page: Game,
		label: 'Game'
	}
];
