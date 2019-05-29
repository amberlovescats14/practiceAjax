export const getCats = (data) => {
  return (dispatch) => {
    fetch('https://api.thecatapi.com/v1/images/search?size=small')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "SET_CATS",
        value: data
      })
    })
  }
}

export const getThreeCats = (data) => {
  return (dispatch) => {
    fetch('https://api.thecatapi.com/v1/images/search?limit=5&page=10&order=Desc')
    .then(res=> res.json())
    .then(data=> {
      console.log("catCarouseL:" + data)
      dispatch({
        type: "THREE_CATS",
        value: data
      })
    })
  }
}

