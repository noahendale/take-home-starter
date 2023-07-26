import React, { useEffect, useState } from 'react';
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { phoneNumberValidation } from '../utils/validations';


interface FieldValuesInterface {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  address: string;
}

const defaultFieldValues: FieldValuesInterface = {
  firstName: '',
  lastName: '',
  phoneNumber: '', //local storage is saving this as a string
  address: '',
}

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState(() => {
    const storedUserInfo = localStorage.getItem('userInfo')

    if (storedUserInfo !== null) return JSON.parse(storedUserInfo)

    return defaultFieldValues
  })

  const navigate = useNavigate();

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setUserInfo((prevFormData: FieldValuesInterface) => ({
      ...prevFormData,
      [name]: value
    }))
  }

  useEffect(() => {
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
}, [userInfo]);

  const handleNext = () => {
    if (
      !userInfo.firstName ||
      !userInfo.lastName ||
      !userInfo.phoneNumber ||
      !userInfo.address // validate address??
    ) {
      alert('Please fill in all fields before proceeding.');
    } else if (!userInfo.phoneNumber.match(phoneNumberValidation)) {
      alert(`
        Please use one of the following phone number formats:
        (123) 456-7890
        (123)456-7890
        123-456-7890
        1234567890
      `)
    }else {
      navigate('/pokemon');
    }
  }
  return (
    <>
      <TextField required label="First Name" id="firstName" name="firstName" onChange={handleChange} value={userInfo?.firstName}/>
      <TextField required label="Last Name" id="lastName" name="lastName" onChange={handleChange} value={userInfo?.lastName}/>
      <TextField required label="Phone Number" id="phoneNumber" name="phoneNumber" onChange={handleChange} value={userInfo?.phoneNumber}/>
      <TextField required label="Address" multiline rows={4} id="address" name="address" onChange={handleChange} value={userInfo?.address}/>

      <Button onClick={handleNext}>Next</Button>
    </>
  )
}

export default UserInfo
