import React from 'react'
import TextInput from '../../components/TextInput/TextInput'

const TextInputField = () => {
  return (
    <>
      <TextInput 
         className="border w-[20rem]"
         name="depositAccountNumber"
         label="Account Number"
         id="depositAccountNumber"
         placeholder="Account Number"
      />
    </>
  )
}

export default TextInputField