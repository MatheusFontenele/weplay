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
          <BiSearch size={20} color="white" />
        </button>
      </div>

      <input
        placeholder="Ex: Lol, piend, grantourn"
        type="search"
        name=""
        id=""
      />
    </Container>
  )
}

export default SearchBar
