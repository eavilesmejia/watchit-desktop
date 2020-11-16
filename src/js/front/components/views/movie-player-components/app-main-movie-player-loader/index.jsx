import React from 'react'
import PropTypes from 'prop-types'
import AppLoaderVideos from 'js/front/components/views/movie-player-components/app-main-movie-player-loader-videos/'
import AppLoaderBar from 'js/front/components/views/movie-player-components/app-main-movie-player-loader-bar/'

export default class AppMoviesPlayerLoader extends React.PureComponent {
	static get propTypes() {
		return {
			stateText: PropTypes.string.isRequired,
			statePercent: PropTypes.number.isRequired
		}
	}
	
	render() {
		return (
			<div className="output-process valign-wrapper full-width full-height">
				<div className="app_loader">
					<AppLoaderVideos/>
					<AppLoaderBar
						stateText={this.props.stateText}
						statePercent={this.props.statePercent}
					/>
				</div>
			</div>
		)
	}
}
