export default function validate(name, email, nachricht, bday) {
    if (name === '') {
        return 'Name ist erforderlich';
    }
    if (email === '') {
        return 'Email ist erforderlich';
    }
    if (email !== '' && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        return 'Ungültige E-Mail Adresse';
    }
    if (bday === '') {
        return 'Sternzeichen ist erforderlich';
    }
    if (nachricht === '') {
        return 'Nachricht ist erforderlich';
    }
    if (nachricht.length < 10) {
        return 'Nachricht muss mindesten 10 Buchstaben haben';
    }
    if (nachricht.length > 500) {
        return 'Nachricht muss kürzer als 500 Buchstaben sein';
    }
    return '';
}
