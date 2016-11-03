import React, { PropTypes } from 'react'
import { Authenticate } from 'components'
import auth from 'helpers/auth'
import { connect } from 'react-redux'

// brings in all exported action creators (not the export default reducer in index.js)
import * as userActionCreators from 'redux/modules/users'

const AuthenticateContainer = React.createClass({
  propTypes: {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
  },
  handleAuth () {
    this.props.dispatch(userActionCreators.fetchingUser())
    auth().then((user) => {
      this.props.dispatch(userActionCreators.fetchingUserSuccess(user.uid, user, Date.now()))
      this.props.dispatch(userActionCreators.authUser(user.uid))
    })
    .catch(() => this.props.dispatch(userActionCreators.fetchingUserFailure(error)))
  },
  render () {
    console.log('is fetching', this.props.isFetching)
    return (
      <Authenticate
        isFetching={this.props.isFetching}
        error={this.props.error}
        onAuth={this.handleAuth} />
    )
  },
})

function mapStateToProps (state) {
  // this is SICK!!!
  console.log('state', state)
  return {
    isFetching: state.isFetching,
    error: state.error,
  }
}

export default connect(mapStateToProps)(AuthenticateContainer)
