import React from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";
import styled from "@emotion/styled";

const StyledCard = styled(Card)`
  margin: 2rem auto;
  max-width: 60%;
`

const StyledSpan = styled.span`
  text-transform: capitalize;
`


const Review = () => {
  const userInfoJSON = localStorage.getItem('userInfo')
  const pokemonNameJSON = localStorage.getItem('pokemonName')
  let userInfo, pokemonName
  
  if (userInfoJSON) userInfo = JSON.parse(userInfoJSON)
  if (pokemonNameJSON) pokemonName = JSON.parse(pokemonNameJSON)

  const handleSubmit = () => {
    alert('Your info has been successfully submitted :)')
  }
  return (
    <StyledCard>
      <Typography variant="h4">Review Page</Typography>
      {userInfo && pokemonName
      ?
        <CardContent>
          <Typography>Name: {userInfo.firstName} {userInfo.lastName}</Typography>
          <Typography>Phone Number: {userInfo.phoneNumber}</Typography>
          <Typography>Address: {userInfo.address}</Typography>
          <Typography>Favourite Pokemon: <StyledSpan>{pokemonName}</StyledSpan></Typography>
          <Button onClick={handleSubmit}>Submit</Button>
        </CardContent>
      : <p>Please go back and fill in all fields</p>
      }
    </StyledCard>
  )
}

export default Review
