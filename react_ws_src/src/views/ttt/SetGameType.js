import React, {Component} from 'react'

export default class SetGameType extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<div id='SetGameType'>

				<h1>Choose game type</h1>

				<button type='submit' onClick={this.selTypeLive.bind(this)} className='button long'><span>Live against another player <span className='fa fa-caret-right'></span></span></button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button type='submit' onClick={this.selTypeHost.bind(this)} className='button long'><span>Host game<span className='fa fa-caret-right'></span></span></button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button type='submit' onClick={this.selTypeJoin.bind(this)} className='button long'><span>Join game<span className='fa fa-caret-right'></span></span></button>
				
				&nbsp;&nbsp;&nbsp;&nbsp;

				<button type='submit' onClick={this.selTypeComp.bind(this)} className='button long'><span>Against a computer <span className='fa fa-caret-right'></span></span></button>

			</div>
		)
	}

//	------------------------	------------------------	------------------------

	selTypeLive (e) {
		// const { name } = this.refs
		// const { onSetType } = this.props
		// onSetType(name.value.trim())

		this.props.onSetType('live')
	}

//	------------------------	------------------------	------------------------

	selTypeHost (e) {
		this.props.onSetType('host')
	}

//	------------------------	------------------------	------------------------

	selTypeJoin (e) {
		this.props.onSetType('join')
	}

//	------------------------	------------------------	------------------------

	selTypeComp (e) {
		// const { name } = this.refs
		// const { onSetType } = this.props
		// onSetType(name.value.trim())

		this.props.onSetType('comp')
	}

}
