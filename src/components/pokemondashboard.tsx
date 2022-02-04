import { Component } from "react";
import { Link } from "react-router-dom";
import pokemonservice from "../services/pokemonservice";
import Pokemon from "./pokemon";
import './pokemondashboard.css';
import logo from '../assets/abra.jpg';

type State = {
    pokemons: Pokemon[];
};
type Props = {};
//display data from PokemonService
export default class PokemonDashboard extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pokemons: []
        };
    }
    
    async componentDidMount() {
        const pokemons = await pokemonservice.getAll();
        this.setState({ pokemons });
    }
    
    render() {
        return (
            
        <div>
            <h1>Pokemon Dashboard</h1>
            <ul className="pokemonList" >
            {this.state.pokemons.map(pokemon => (
            <Link className="link" to={`/details/${pokemon.id}`}>{pokemon.name}</Link>
            ))}
            </ul>
        </div>
        );
    }
    }