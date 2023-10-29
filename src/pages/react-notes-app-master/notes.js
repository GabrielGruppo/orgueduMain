import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';

const App = () => {
	const [notes, setNotes] = useState([]);

	const [searchText, setSearchText] = useState('');

	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {

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

	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [notes]);

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			text: text,
			id_user: localStorage.getItem("id_user"),
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
	};

	

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
