import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({isLoading, items}) => {
  return isLoading ? (<Spinner />) : (
    <div className="row" id="characterGrid">
      {items.map(item => (
        <CharacterItem item={item} key={item.char_id} />
      ))}
    </div>
  )
}

export default CharacterGrid 