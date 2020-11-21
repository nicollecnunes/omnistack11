import React, {useState} from 'react';
import './styles.css'
import {Link, useHistory} from 'react-router-dom';

import heroes from '../../assets/heroes.png'
import logo from '../../assets/logo.svg'

import api from '../../services/api';



function Logon(){
	const [id, setId] = useState('');
	const history = useHistory();
	

	async function handleLogin(e){
		e.preventDefault();

		try{
			const response = await api.post('sessions', {id});
			localStorage.setItem('ongId', id);
			localStorage.setItem('ongNome', response.data.nome);
			history.push('/profile');

		}catch(err){
			alert('Falhou');
		}
	}

	return(
		<div className="logon-container">
			<section className="form">
				<img src={logo} alt=""/>

				<form onSubmit={handleLogin}>
					<h1>Faça seu Logon</h1>
					<input
						placeholder="Sua ID"
						value={id}
						onChange={e => setId(e.target.value)}
					/>
					<button className="button" type="submit">Entrar</button>
					<Link className="back-link" to="/register">
						Não tenho cadastro
					</Link>
				</form>
			</section>
			<img src={heroes} alt=""/>
		</div>
	);
}

export default Logon;