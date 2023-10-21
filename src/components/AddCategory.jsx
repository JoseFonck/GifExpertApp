import { useState } from "react"
export const AddCategory = ({ onNewCategory }) => {
    
    const [inputValue, setInputValue] = useState('')
  
    const onInputChange = ({target}) =>{
        // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const newInput = inputValue.trim()
        // console.log(categories)
        // let categoriesAdded = [...categories, inputValue]
        // console.log(categoriesAdded)
        // setCategories(categoriesAdded)
        if ( newInput.length <= 1 )  return;
        setInputValue('');
        onNewCategory(newInput)
        // setCategories(categories => [inputValue, ...categories])
    }
    return (
        <form action="" onSubmit={onSubmit}>
            <input
                type="text"    
                placeholder="Buscar gifs"
                onChange={onInputChange}
            />
        </form>
    )
}
