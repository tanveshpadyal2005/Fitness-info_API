// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
// 		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=neck', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

const fitness = document.getElementById("info");


const getworkout = (e) => {

	e.preventDefault();

	const check = document.forms["info"]['type'].value;

	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '52246edbe5msh6f23044db940a9cp17fe36jsn1d4d88c832d3',
			'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
		}
	};

	fetch(`https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${check}`, options)
		.then(response => response.json())
		.then(response => {

			if (check == "") {
				alert("invalid data")
			}

			else {



				response.map((cval) => {

					document.getElementById('net').innerHTML += `
					<div class="align">
						<div class="all">
						<img src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80" alt="">
			            <h1>Name of Exersice: ${cval.name}</h1>
			            <h3>Exersice type: ${cval.type}</h3>
			             <h3>Muscle: ${cval.muscle}</h3>
			             <h3>Equipment: ${cval.equipment}</h3>
			             <h4>level of Exersice: ${cval.difficulty}</h4>
			             <p>instruction: ${cval.instructions}</p>
			             </div>
			</div>
					`

				})


			}
		}
		)
		.catch(err => console.error(err));


}


fitness.addEventListener('submit', getworkout);




