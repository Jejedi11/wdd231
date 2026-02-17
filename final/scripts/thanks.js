const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<p>Your response:</p>
<p>Name: ${myInfo.get('name')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Question: ${myInfo.get('question')}</p>
<p>You should recieve an email with help for your question.</p>
`
