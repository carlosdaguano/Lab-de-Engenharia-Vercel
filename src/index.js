import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Roteamento das Paginas
// React-Router-DOM
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// Rotas
import Home from './routes/Home';
import ErrorPage from './routes/ErrorPage';

import Atividade1 from './routes/Atividade1'
import Atividade2 from './routes/Atividade2';
import Atividade3 from './routes/Atividade3';
import Atividade4 from './routes/Atividade4';
import Atividade5 from './routes/Atividade5';
import Atividade6 from './routes/Atividade6';

import Relogio from './components/atividade1/Relogio';
import Letreiro from './components/atividade1/Letreiro';

import Contador from './components/atividade2/Contador';
import Gallery1 from './components/atividade3/Gallery1';
import TodoList from './components/atividade3/TodoList';
import Toolbar from './components/atividade4/Toolbar';
import Gallery2 from './components/atividade4/Gallery2';
import Counter from './components/atividade4/Counter';
import Form1 from './components/atividade4/Form1';
import MovingDot from './components/atividade4/MovingDot';
import Form2 from './components/atividade4/Form2';
import Form3 from './components/atividade4/Form3';
import List1 from './components/atividade4/List1';
import List2 from './components/atividade4/List2';
import ShapeEditor from './components/atividade4/ShapeEditor';
import List3 from './components/atividade4/List3';
import CounterList from './components/atividade4/CounterList';
import List4 from './components/atividade4/List4';
import BucketList from './components/atividade4/BucketList';
import FormQuiz from './components/atividade5/FormQuiz';
import FormTicket from './components/atividade5/FormTicket';
import Messeger from './components/atividade5/Messeger';
import Accordion from './components/atividade5/Accordion';
import Calculadora from './components/atividade6/Calculadora';
import JogoDaMemoria from './components/atividade6/JogoDaMemoria';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "atividade1",
				element: <Atividade1 />,
				children: [
					{
						path: "relogio",
						element: <Relogio />
					},
					{
						path: "letreiro",
						element: <Letreiro />
					}
				]
			},
			{
				path: "atividade2",
				element: <Atividade2 />,
				children: [
					{
						path: "contador",
						element: <Contador />
					}
				]
			},
			{
				path: "atividade3",
				element: <Atividade3 />,
				children: [
					{
						path: "gallery1",
						element: <Gallery1 />
					},
					{
						path: "todoList",
						element: <TodoList />
					}
				]
			},
			{
				path: "atividade4",
				element: <Atividade4 />,
				children: [
					{
						path: "toolbar",
						element: <Toolbar />
					},
					{
						path: "gallery2",
						element: <Gallery2 />
					},
					{
						path: "counter",
						element: <Counter />
					},
					{
						path: "form1",
						element: <Form1 />
					},
					{
						path: "movingDot",
						element: <MovingDot />
					},
					{
						path: "form2",
						element: <Form2 />,
					},
					{
						path: "form3",
						element: <Form3 />
					},
					{
						path: "list1",
						element: <List1 />
					},
					{
						path: "list2",
						element: <List2 />
					},
					{
						path: "shapeEditor",
						element: <ShapeEditor />
					},
					{
						path: "counterList",
						element: <CounterList />
					},
					{
						path: "list3",
						element: <List3 />
					},
					{
						path: "list4",
						element: <List4 />
					},
					{
						path: "bucketList",
						element: <BucketList />
					}
				]
			},
			{
				path: "atividade5",
				element: <Atividade5 />,
				children: [
					{
						path: "formQuiz",
						element: <FormQuiz />
					},
					{
						path: "formTicket",
						element: <FormTicket />
					},
					{
						path: "accordion",
						element: <Accordion />
					},
					{
						path: "messeger",
						element: <Messeger />
					}
				]
			},
			{
				path: "atividade6",
				element: <Atividade6 />,
				children: [
					{
						path: "calculadora",
						element: <Calculadora />
					},
					{
						path: "jogoDaMemoria",
						element: <JogoDaMemoria />
					}
				]
			}

		]
	}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
