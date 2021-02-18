async function editFormHandler(e) {
	e.preventDefault();

	const post_id = window.location.toString().split('/').reverse()[0];
	const post_title = document.querySelector('input[name="post-title"]').value;

	const response = await fetch(`/api/posts/${post_id}`, {
		method: 'PUT',
		body: JSON.stringify({
			title: post_title,
		}),
		headers: {
			'Content-Type': 'application/json',
		},
	});

	if (response.ok) document.location.replace('/dashboard');
	else alert(response.status, response.statusText);
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
