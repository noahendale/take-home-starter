import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'

const UserInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    address: '',
  })



  return (
    <h1>this is the UserInfo page</h1>
  )
}

export default UserInfo
