import { useState } from "react"

export const useTextarea = (initialState) => {
    const [textareaForm, setTextareaForm] = useState({content: initialState})

    const onChangeTextarea = (event) => {
        const value = event.target.value
        setTextareaForm({content: value})
    }

    const clearInputs = () => {
        setTextareaForm({content: initialState})
    }

    return [ textareaForm, onChangeTextarea, clearInputs ]
}
