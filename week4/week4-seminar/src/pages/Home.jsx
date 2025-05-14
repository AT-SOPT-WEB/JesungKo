import PokemonCard from '../components/PokemonCard';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100');
                setPokemonList(res.data.results);
            } catch (error) {
                console.error('포켓몬 리스트를 불러오는 데 실패했습니다.', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div>
            <h1>포켓몬 도감</h1>
            <section style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {pokemonList.map((pokemon) => (
                    <PokemonCard name={pokemon.name}></PokemonCard>
                ))}
            </section>
        </div>
    );
};

export default Home;
