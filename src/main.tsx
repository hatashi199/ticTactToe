import React from 'react';
import ReactDOM from 'react-dom/client';
import TicTacToe_App from './TicTacToe_App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { GameConfigProvider } from './contexts/GameConfigContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<GameConfigProvider>
			<BrowserRouter>
				<TicTacToe_App />
			</BrowserRouter>
		</GameConfigProvider>
	</React.StrictMode>
);
