/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

Patrick Feeney => P.F

*/

const abbrevName = (name) => {
let initials = '';
for(let i = 0; i < name.length; i++) {
    if(i === 0) {
        initials += name[i].toUpperCase();
        initials += '.';
    }
    if(name[i-1] === ' ') {
        initials += name[i].toUpperCase();
        break;
    }
}

return initials;
}