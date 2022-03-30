import SearchBar from "../searchBar";
import {useState} from "react";
import fetchPokemon from "../../api/fetchPokemon";
import {Col, Row} from "react-bootstrap";

export default function Pokedex() {

    const [pokemonName, setPokemonName] = useState("")
    const [pokemon, setPokemon] = useState()

    const handleOnChange = (event) => {
        setPokemonName(event.target.value)
    }

    const handleEnter = async (event) => {
        if (event.key === "Enter") {
            let response = await fetchPokemon(pokemonName.toLocaleLowerCase())
            setPokemon(response)
        }
    }
    
    return <>
        <h1 className="text-center">Pokedex</h1>
        <Row className="text-center">
            <Col lg={{offset: 3, span: 6}}>
                <SearchBar handleOnChange={handleOnChange} handleEnter={handleEnter}/>
                {!pokemon ? <span>Please search for a Pokemon</span> : <img src={pokemon.sprites.back_default} alt="Pokemon Img"/>}
            </Col>
        </Row>
 
    </>
    
}