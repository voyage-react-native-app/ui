import { connect } from 'react-redux';

import Loader from '../../components/Loader/Loader/Loader';

const mapStateToProps = state => ({
   loaderDisplayed: state.navigation.loaderDisplayed
});

export default connect(mapStateToProps)(Loader)
