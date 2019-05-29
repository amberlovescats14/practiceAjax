export const getCats = (data) => {
  return (dispatch) => {
    fetch('https://api.thecatapi.com/v1/images/search?size=full')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      dispatch({
        type: "SET_CATS",
        value: data
      })
    })
  }
}