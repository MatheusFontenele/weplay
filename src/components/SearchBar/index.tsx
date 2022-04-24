import { ReactNode } from 'react'
import { BiSearch } from 'react-icons/bi'

import { Container } from './styles'

interface SearchBarProps {
  children: ReactNode
}

function SearchBar() {
  return (
    <Container>
      <div className="searchContent">
        <button>
          <BiSearch size={30} color="white" />
        </button>
      </div>

      <input
        placeholder="Ex: Lol, piend, grantourn"
        type="text"
        name="search"
        id="search"
      />
    </Container>
  )
}

export default SearchBar
