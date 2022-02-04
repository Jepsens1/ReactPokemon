
import { Component, ChangeEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import pokemonservice from "../services/pokemonservice";
import Pokemon from "./pokemon";
import React from 'react';
import './pokemondetails.css';
type State = {
    pokemon: Pokemon;
}
type Props = {};

export default class PokemonDetails extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            pokemon: {
                id: 0,
                name: "",
                base_Level: 0,
                poketype: "",
        }};
    }
    async componentDidMount() {
        
        const url = window.location.pathname;
        const id = url.substring(9, url.lastIndexOf("/") + 4);
        console.log(id);
        const pokemon = await pokemonservice.getById(parseInt(id));
        this.setState({ pokemon });
    }
    render() {
        return (
       <div className="detail">
              <h1>Pokemon Details</h1>
              
                <img src={`${this.state.pokemon.name}.jpg`} alt="pokemon" />
                <h3>Name: {this.state.pokemon.name}</h3>
                <h3>Base Level: {this.state.pokemon.base_Level}</h3>
                <h3>Type: {this.state.pokemon.poketype}</h3>
                <button className="detailsbutton" ><Link className="linkbutton" to="/">Back to list</Link></button>
       </div>
        )};
    
}