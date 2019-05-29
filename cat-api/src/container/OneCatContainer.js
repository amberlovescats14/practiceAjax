import OneCat from '../components/OneCat'
import { connect } from 'react-redux'
import { getCats } from '../components/redux/Actions'

const mapStateToProps = (state) => ({
  header: state.header,
  catArr: state.catArr
})
 const mapDispatchToProps = (dispatch) => ({
   getCats: (data) => dispatch(getCats(data))
 })

 export default connect(mapStateToProps, mapDispatchToProps)(OneCat)