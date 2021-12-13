const _ = (id) =>{const self = {html: document.getElementById(id),text: (text) => { self.html.innerText = text },on: (event, callback) => { document.addEventListener(event, callback) }}return self}
