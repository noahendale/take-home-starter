import { useEffect, useState } from "react";
import { pokemonEndpoint } from "../utils/apiEndpoints";
import { Button, TextField, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

interface PokemonInterface {
  name?: string;
  sprites?: {
    front_default: string;
  }
}

const StyledCard = styled(Card)`
  margin: 2rem auto;
  max-width: 30%;
  cursor: pointer;
`

const StyledSpan = styled.span`
  text-transform: capitalize;
`

const Pokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonInterface>({})
  const [searchValue, setSearchValue] = useState(() => {
    const storedSearchValue = localStorage.getItem('pokemonName')

    if (storedSearchValue) return JSON.parse(storedSearchValue)
    return ''
  })

  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      const res = await fetch(`${pokemonEndpoint}/${searchValue.toLowerCase()}`)

      if (!res.ok) throw new Error('Failed to fetch pokemon')

      const data = await res.json()
      return setPokemon(data)
    } catch (error: any) {
      setPokemon({})
      alert('No pokemon found with that name')
      console.error('Error fetching products: ', error.message)
    }
  }

  const handleSelectClick = () => {
    navigate('/review');
  }

  const handleBackClick = () => {
    navigate('/');
  }

  useEffect(() => {
    pokemon.name
    ? localStorage.setItem('pokemonName', JSON.stringify(pokemon.name))
    : localStorage.setItem('pokemonName', '')
  }, [pokemon]);

  return (
    <>
      <TextField
        required
        label="Your fav Pokemon"
        id="pokemon"
        name="pokemon"
        inputProps={{"data-testid": "pokemon"}}
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <CardContent>
        <Button onClick={handleBackClick} data-testid="back">Back</Button>
        <Button onClick={handleSearchClick} data-testid="search">Search</Button>
      </CardContent>
      {Object.keys(pokemon).length > 0
      &&
      <StyledCard>
        <CardContent role="button" onClick={handleSelectClick} data-testid="pokemonResult">
          <Typography variant="h6">Click to select <StyledSpan>{pokemon.name}</StyledSpan></Typography>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </CardContent>
      </StyledCard>}
    </>
  )
}

export default Pokemon
