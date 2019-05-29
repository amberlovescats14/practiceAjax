import CatCarousel from '../components/CatCarousel'
import { connect } from 'react-redux'
import { getThreeCats } from '../components/redux/Actions'
import { handleClick } from '../components/redux/Actions'

const mapStateToProps = (state) => ({
  threeCats: state.threeCats
})
const mapDispatchToProps = (dispatch) => ({
  getThreeCats: (data) => dispatch(getThreeCats(data)),
  
})

export default connect(mapStateToProps, mapDispatchToProps)(CatCarousel)