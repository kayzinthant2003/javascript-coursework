let hobby = 2;
switch (hobby) {
    case 1:
        alert('Your hobby is swimming.');
        break;
    case 2:
        alert('Your hobby is signing .');
        break;
    case 3:
        alert('Your hobby is reading.');
        break;
    case 4:
        alert('Your hobby is travelling.');
        break;
    default:
        alert('What is your hobby?');
};

let hobby = prompt('Write a number');
if (hobby == 1) {
    alert('Your hobby is swimming.');
} else {
    if (hobby == 2) {
        alert('Your hobby is signing .');
    } else if (hobby == 3) {
        alert('Your hobby is reading.');
    } else if (hobby == 4) {
        alert('Your hobby is travelling.');
    } else {
        alert('What is your hobby?');
    }
};
