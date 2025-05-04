import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const PokemonDetail = () => {
    const params = useParams();
    const name = params.name;
    const [pokemonInfo, setPokemonInfo] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                setPokemonInfo(res.data);
            } catch (error) {
                console.error('포켓몬 정보를 불러오는 데 실패했습니다.', error);
            }
        };

        fetchData();
    }, [name]);

    return (
        <div>
            <Link to={'/'}>목록으로</Link>
            <h1>{pokemonInfo?.name}</h1>
            {pokemonInfo?.sprites?.front_default && (
                <img src={pokemonInfo.sprites.front_default} alt={pokemonInfo.name} />
            )}
            {pokemonInfo?.types && pokemonInfo.types.length > 0 && (
                <section style={{ display: 'flex', gap: '10px' }}>
                    {pokemonInfo.types.map((type, index) => (
                        <span style={{ backgroundColor: 'lightgray' }} key={index}>
                            {type.type.name}
                        </span>
                    ))}
                </section>
            )}
        </div>
    );
};

export default PokemonDetail;
