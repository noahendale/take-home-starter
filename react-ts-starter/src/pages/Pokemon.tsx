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
    const storedSearchValue = localStorage.getItem('pokemonSearchValue')

    if (storedSearchValue !== null) return JSON.parse(storedSearchValue)

    return ''
  })

  const navigate = useNavigate();

  const handleSearchClick = async () => {
    try {
      const res = await fetch(`${pokemonEndpoint}/${searchValue}`)

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
    localStorage.setItem('pokemonSearchValue', JSON.stringify(searchValue))
  }, [searchValue]);

  return (
    <>
      <TextField
        required
        label="Your fav Pokemon"
        onChange={e => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <CardContent>
        <Button onClick={handleBackClick}>Back</Button>
        <Button onClick={handleSearchClick}>Search</Button>
      </CardContent>
      {Object.keys(pokemon).length > 0
      &&
      <StyledCard>
        <CardContent role="button" onClick={handleSelectClick}>
          <Typography variant="h6">Click to select <StyledSpan>{pokemon.name}</StyledSpan></Typography>
          <img src={pokemon.sprites?.front_default} alt={pokemon.name} />
        </CardContent>
      </StyledCard>}
    </>
  )
}

export default Pokemon
