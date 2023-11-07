import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {

<<<<<<< HEAD
		const acao = {acao:'busca',id_user: localStorage.getItem("id_user")};
		
		fetch('http://localhost:84/orgueduMain/nota_repositorio.php', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(acao),
		  })
		  .then((response) => response.json())
		  .then((response) => {
			const savedNotes =  response;
  			if(savedNotes){
				setNotes(savedNotes)};
		  })

=======
		const acao = {acao:'busca',user_id: localStorage.getItem("user_id")};

			fetch('http://localhost:84/orgueduMain/nota_repositorio.php', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(acao),
			})
			.then((response) => response.json())
			.then((response) => {
				const savedNotes =  response;
				if(savedNotes){
					setNotes(savedNotes)};
			})
			.catch(
				console.log('usuario nao logado')
			);
			
>>>>>>> fdb0f3314c07c19929d98146493af0addea2514c
	}, []);


	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const newNote = {
			text: text,
			user_id: localStorage.getItem("user_id"),
			acao: 'insert'
		};

		const newNotes = [...notes, newNote];
		setNotes(newNotes);
		
		fetch('http://localhost:84/orgueduMain/nota_repositorio.php', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(newNote),
		  })
		  .catch(function (error) {
			console.log(
			  "Erro: " + error.message,
			);
		  });

}

	

	const deleteNote = (id) => {
		
		const acao = {acao:'delete',id:id};

		fetch('http://localhost:84/orgueduMain/nota_repositorio.php', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify(acao),
		  })
		  


		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	};

	return (
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Search handleSearchNote={setSearchText} />
				<NotesList
					notes={notes.filter((note) =>
						note.text.toLowerCase().includes(searchText)
					)}
					handleAddNote={addNote}
					handleDeleteNote={deleteNote}
				/>
			</div>
		</div>
	);
};

export default App;
