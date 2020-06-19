import React, { Component } from 'react';
import AuthForm from '../components/AuthForm';
import Logo from '../assets/images/logo.jpg';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Home extends Component {
	state = {
		signMode: 'menu',
		phrases: [
			{
				extra: "William Shakespeare - All's Well That Ends Well",
				quote: 'What is a friend?\nA single soul dwelling in two bodies.',
			},
			{
				extra: 'Aristotle',
				quote: 'Love all, trust a few, do wrong to none.',
			},
			{
				extra: 'Marcus Aurelius - Meditations',
				quote: 'The soul becomes dyed\nwith the colour of its thoughts.',
			},
			{
				extra: 'Marcus Aurelius - Meditations',
				quote:
					'The happiness of your life depends\nupon the quality of your thoughts.',
			},
			{
				extra: 'Marcus Aurelius - Meditations',
				quote: 'The best revenge is to be\nunlike him who performed the injury',
			},
		],
		selectedPhrase: {},
	};

	render() {
		return (
			<div className='home'>
				<div className='row h-100'>
					<div className='col-8 d-none d-md-flex flex-column justify-content-end pl-5 home__left'>
						<h1 className='display-7 text-light home__left__text'>
							{this.state.selectedPhrase.quote}
						</h1>
						{!!this.state.selectedPhrase.extra && (
							<p className='text-light lead home__left__text'>
								{this.state.selectedPhrase.extra}
							</p>
						)}
					</div>
					<div className='col-12 col-md-4 bg-white home__right d-flex flex-column justify-content-center'>
						<div className='row justify-content-center'>
							<div className='col-6'>
								<img src={Logo} className='mx-auto d-block img-fluid' />
							</div>
						</div>
						<div className='row pr-md-3'>
							<div className='col-12 px-4'>
								<div className='card border-0 rounded-0'>
									<div className='card-body'>
										{this.state.signMode == 'menu' && (
											<div>
												<button
													className='btn btn-outline-brand btn-block rounded-pill'
													onClick={this.setSignupMode}>
													Sign Up
												</button>
												<button
													className='btn btn-brand btn-block text-light rounded-pill'
													onClick={this.setLoginMode}>
													Log In
												</button>
												<hr />
												<Link
													to='/explore'
													className='btn btn-brand-secondary btn-block text-white rounded-pill'>
													I'd like to explore first 🧭
												</Link>
											</div>
										)}
										{this.state.signMode != 'menu' && (
											<>{this.getAuthComponent()}</>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const stateToProps = (state) => ({
	isLogged: state.app.logged.isLogged,
	user: state.app.logged.username,
});

const dispatchToProps = (dispatch) => ({});

export default connect(stateToProps, dispatchToProps)(Home);
