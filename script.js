var bu = {
    0 :
        {   "Nom" : "BU Alimentation",
            "Entreprise" : "Additi",
            "Nb d'employés" : 10},
    1 :
        {   "Nom" : "BU Habitat",
            "Entreprise" : "Additi",
            "Nb d'employés" : 10},
    2 :
        {   "Nom" : "BU Obsèques",
            "Entreprise" : "Additi",
            "Nb d'employés" : 10},
}


function displayOffAll(){
    var result = document.querySelector('.result').childNodes;
    for(var i=0; i<result.length; i++) {
        if (result[i].nodeName.toLowerCase() === 'div') {
            result[i].style.display = "none";
        }
    }
}
displayOffAll();
document.querySelectorAll('.buttons>div').forEach(button => {
    button.addEventListener('click', event => {
        let id = event.target.getAttribute("data-id");
        displayOffAll();
        document.querySelector('.'+id).style.display = "block";
        switch (id) {
            case 'classic':
                result.getElementsByTagName("div");
                console.log('Je suis un log !');
                console.info('Je suis une info !');
                console.warn('Je suis un warning !');
                console.error('Je suis une erreur !');
                break;
            case 'string':
                console.log('Je suis une %s !', 'STRING');
                console.log('Je suis un entier %d !', 2);
                console.log('Je suis un objet %O !', bu);
                console.log('Je suis un élément HTML %o !', document.querySelectorAll('.buttons>div:first-child'));
                break;
            case 'groups':
                console.group('Je suis un groupe !');
                console.info('Et moi un sous groupe !');
                console.info('Et moi un sous groupe !');
                console.info('Et moi un sous groupe !');
                console.info('Et moi un sous groupe !');
                console.groupEnd();
                console.error('Et moi un non :/ ');
                break;
            case 'time':
                console.time('Durée');
                for (i=0; i < 1e5; i++){
                    //Code...
                }
                console.timeEnd('Durée');
                break;
            case 'count':
                for (i=0; i < 10; i++){
                    console.count('Nb de boucles :');
                }
                break;
            case 'trace':  
                console.trace('Je genère une slacktrace :');
                console.error('Un peu comme moi finalement !');
                break;
            case 'table':
                console.table(bu);
                break;
            case 'table-filter':
                console.table(bu, ['Nom']);
                break;
        }

    })
})