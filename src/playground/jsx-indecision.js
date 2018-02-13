console.log("appp js is runing!!");




const app = {
	title: "Indecision App",
	subtitle: "This is some infoooo",
	options: []
};
// JSX - JavaScript XML 

const onFormSubmit = (e) => {
	e.preventDefault();
	
	const option = e.target.elements.option.value;

	if (option) {
		app.options.push(option);
		e.target.elements.option.value = '';
		render();
	}

};


const remove = () => {
	app.options.length = 0;
	render();

}

const onMakeDecision = () => {
	const randomNum = Math.floor(Math.random() * app.options.length);
	const option = app.options[randomNum];
	alert(option);
};

const appRoot = document.getElementById('app');

// const numbers = [55, 101, 1000];


const render = () => {
	const template = (
<div>
	<h1>{app.title}</h1> 
	{app.subtitle &&<p> {app.subtitle} </p>}
	<p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
	<button disabled={app.options.length == 0 } onClick={onMakeDecision}>What should i do?</button>
	<button onClick={remove}> Remove All </button>
	{
		// numbers.map((number) =>  {
		// 	return <p key={number}>Number: {number}</p>
		// }) 
	}
	<ol>
	{
		app.options.map((option)=> {
			return <li key={option}>Option: {option}</li>
		})
	}
	</ol>
	<form onSubmit={onFormSubmit}>
		<input type="text" name="option" />
		<button> Add Option </button>
	</form>
</div>
);
ReactDOM.render(template, appRoot);
};

render();