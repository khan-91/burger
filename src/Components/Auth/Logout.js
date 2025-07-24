import { Component } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../Redux/authActionCreators'

const mapDisPatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout(),)
    }
}

export class Logout extends Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return (<Navigate to='/' replace />)
    }
}

export default connect(null, mapDisPatchToProps)(Logout)