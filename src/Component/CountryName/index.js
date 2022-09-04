import './index.css'

const CountryName = props => {
  const {countryDetails, onClickVisit} = props
  const {name, id, isVisited} = countryDetails
  console.log(isVisited)

  const visitClicked = () => {
    onClickVisit(id)
  }

  return (
    <li className="country-list">
      <p className="country-name">{name}</p>
      {isVisited ? (
        <p className="vistited-text">Visited</p>
      ) : (
        <button type="button" className="visit-button" onClick={visitClicked}>
          Visit
        </button>
      )}
    </li>
  )
}

export default CountryName
