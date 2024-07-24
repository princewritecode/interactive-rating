const card = document.querySelector('.rating-card');
const submit = document.querySelector('.button-submit');
const card1 = document.querySelector('.rating-card1');
const init = () =>
{
    card1.classList.add('rating-card-visiblity1');
};
submit.addEventListener('click', () =>
{

    for (let i of card.classList)
    {
        if (i.value !== 'rating-card-visiblity')
        {

            card.classList.add('rating-card-visiblity');
            card1.classList.remove('rating-card-visiblity1');

        }
    };
});

