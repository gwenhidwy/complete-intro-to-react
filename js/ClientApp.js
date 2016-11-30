var div = React.DOM.div
var h1 = React.DOM.h1

var MyTitle = React.createClass({
	render (){
		return (
			div(null,
				h1({style: {color: this.props.color}}, this.props.title)
			)
		)
	}
})

var MyTitleFactory = React.createFactory(MyTitle)
var ce = React.createElement

var MyFirstComponent = (
	div(null,
		React.createElement(MyTitle,{title: 'Props are great!', color: 'rebeccapurple'}),
		MyTitleFactory({title: 'Use props everywhere!', color: 'mediumaquamarine'}),
		ce(MyTitle,{ title: 'Props are the best!', color: 'peru'})
	)
)

ReactDOM.render(MyFirstComponent, document.getElementById('app'))