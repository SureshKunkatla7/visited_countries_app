import './index.css'

const VisitedCountries = props => {
  const {countriesListItem, clickRemove} = props
  const {id, name, imageUrl, isVisited} = countriesListItem

  const onClickRemove = () => {
    clickRemove(id)
  }

  return (
    <>
      {isVisited && (
        <li className="country-card">
          <img src={imageUrl} alt="thumbnail" className="country-img" />
          <div className="countryItem">
            <p className="country-text">{name}</p>
            <button
              type="button"
              className="remove-button"
              onClick={onClickRemove}
            >
              Remove
            </button>
          </div>
        </li>
      )}
    </>
  )
}

export default VisitedCountries
