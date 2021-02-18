async function deleteFormHandler(e) {
	e.preventDefault();

	const post_id = window.location.toString().split('/').reverse()[0];

	const response = await fetch(`/api/posts/${post_id}`, {
		method: 'DELETE',
	});
	console.log(response);

	if (response.ok) document.location.replace('/dashboard');
	else alert(response.status, response.statusText);
}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);
