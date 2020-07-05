import React from 'react'

const CharacterItem = ({item}) => {
  return (
    <div className="col-md-4 col-6">
      <div className="card shadow mb-3">
        <img src={item.img} alt={item.nickname} className="card-img" />
        <div className="card-body bg-dark">
          <h1 className="text-warning xs-heading">{item.name}</h1>
          <hr />
          <p className="text-light xs-text">
            <strong className="text-info">Actor Name:</strong> {item.portrayed}
          </p>
          <p className="text-light xs-text">
            <strong className="text-info">Nickname:</strong> {item.nickname}
          </p>
          <p className="text-light xs-text">
            <strong className="text-info">Birthday:</strong> {item.birthday}
          </p>
          <p className="text-light xs-text">
            <strong className="text-info">Status:</strong> {item.status}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
