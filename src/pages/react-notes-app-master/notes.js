import { useState, useEffect } from 'react';
import NotesList from './components/NotesList';
import Search from './components/Search';
import { useNavigate } from 'react-router-dom';
const App = () => {
	const [notes, setNotes] = useState([]);
	const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {

		if(localStorage.getItem('login') != 'true'){
			navigate('/');
			window.location.reload();
		  }else{
		
		//quando usuario abrir a pagina, vai executar essa função que vai buscar todas as notas salvas pelo usuario

		const acao = {acao:'busca',user_id: localStorage.getItem("user_id")};

			fetch('http://localhost:84/orgueduMain/nota_repositorio.php', { //envia para o php nota_repositorio
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
					setNotes(savedNotes)}; // inserir novas notas na const notes
			})

		  }

	}, []);


	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			
			JSON.stringify(notes)
		) ;
	}, [notes]);

	//funcao para criar nova nota e enviar para api
	
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