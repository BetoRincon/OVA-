console.log("listo");


fetch('https://bdadmin.000webhostapp.com/wp-json/wp/v2/posts?order=asc&_embed')
    .then(response => {
        return response.json();
    })
    .then(myJson => {
        console.log(myJson);
        myJson.forEach(element => {
            var list = document.getElementById('list');

            let ilist = document.createElement('div')
            let post = document.createElement('a');
            // let aTag = document.createElement('a');
            post.setAttribute('href', '#' + element.title.rendered.split(" ").join('-'));
            // post.appendChild(aTag);
            post.innerHTML = element.title.rendered;
            ilist.appendChild(post);
            ilist.setAttribute("id", "list-item");
            document.getElementById('list').appendChild(ilist);
            list.appendChild(ilist);

            // dissapera spin
            document.getElementById('spin-list').style.display = 'none';
        });
    })