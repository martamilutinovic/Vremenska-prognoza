document.getElementById('cityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const city = document.getElementById('citySelect').value;
    const iframe = document.getElementById('weatherIframe');
    const touristInfo = document.getElementById('touristInfo');

    switch (city) {
        case 'Beograd':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/beograd';
            touristInfo.innerHTML = '<p>Beograd je glavni grad Srbije, poznat po svojoj bogatoj istoriji i kulturi. Najpoznatije turističke atrakcije su Kalemegdan, Knez Mihailova ulica i Ada Ciganlija.</p>';
            break;
        case 'Novi Sad':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/novi-sad';
            touristInfo.innerHTML = '<p>Novi Sad je poznat po Petrovaradinskoj tvrđavi, Dunavskom parku i Exit festivalu.</p>';
            break;
        case 'Niš':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/nis';
            touristInfo.innerHTML = '<p>Niš je poznat po Niškoj tvrđavi, Ćele kuli i Niškoj Banji.</p>';
            break;
        case 'Kragujevac':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/kragujevac';
            touristInfo.innerHTML = '<p>Kragujevac je poznat po Šumaricama, muzeju 21. oktobar i akvarijumu.</p>';
            break;
        case 'Subotica':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/subotica';
            touristInfo.innerHTML = '<p>Subotica je poznata po Paliću, gradskoj kući i sinagogi.</p>';
            break;
        case 'Zrenjanin':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/zrenjanin';
            touristInfo.innerHTML = '<p>Zrenjanin je poznat po Begeju, gradskom muzeju i dvorcu Ečka.</p>';
            break;
        case 'Pančevo':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/pancevo';
            touristInfo.innerHTML = '<p>Pančevo je poznato po Narodnom muzeju, Tamišu i crkvi Svetog Petra i Pavla.</p>';
            break;
        case 'Vršac':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/vrsac';
            touristInfo.innerHTML = '<p>Vršac je poznat po svojim vinogradima i Vršackoj kuli....</p>';
            break;
        case 'Kraljevo':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/kraljevo';
            touristInfo.innerHTML = '<p>Kraljevo je poznato po manastiru Žiča, parku i muzeju.</p>';
            break;
        case 'Smederevo':
            iframe.src = 'http://www.naslovi.net/vremenska-prognoza/smederevo';
            touristInfo.innerHTML = '<p>Smederevo je poznato po Smederevskoj tvrđavi, muzeju i vinarijama.</p>';
            break;
        default:
            touristInfo.innerHTML = '';
            break;
    }
});

