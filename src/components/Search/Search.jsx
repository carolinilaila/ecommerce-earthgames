import { useState } from 'react'
import './Search.css'

import data from '../../routes/products.json'
import { useNavigate } from 'react-router-dom'

function Search() {
  const [value, setValue] = useState('')

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const onSearch = (searchTerm) => {
    setValue(searchTerm)
    // api to fetch the search result
    console.log('search', searchTerm)
  }

  const navigate = useNavigate()
  const onSubmit = (e) => {
    navigate.push(`?search=${value}`)
    e.preventDefault()
  }

  return (
    <form action="/" method="get" autoComplete="off" onSubmit={onSubmit}>
      <div className="b-search__content">
        <input
          placeholder="search for game"
          type="text"
          value={value}
          onChange={onChange}
          name="search"
        ></input>
        <button type="submit" onClick={() => onSearch(value)}>
          Search
        </button>
      </div>
      <div className="b-search__dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLowerCase()
            const productName = item.name.toLowerCase()

            return (
              searchTerm &&
              productName.startsWith(searchTerm) &&
              productName !== searchTerm
            )
          })
          .slice(0, 10)
          .map((item) => (
            <div
              onClick={() => onSearch(item.name)}
              className="b-search__dropdown-row"
              key={item.id}
            >
              {item.name}
            </div>
          ))}
      </div>
    </form>
  )
}

export default Search
