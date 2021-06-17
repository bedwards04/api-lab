

const getResBtn = document.querySelector('#btn');

function clickBtn() {
    axios
    .get('https://swapi.dev/api/planets/2/?search=alderaan')
    .then((res) => {
        let planet = 'https://swapi.dev/api/planets/2/?search=alderaan'
        for (let i = 0; i < planet.length; i++) {
            console.log(res.data)
            // axios
            // .get()
            // .then()
        }
    })
};

getResBtn.addEventListener('click', clickBtn);
