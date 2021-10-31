import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
  name: 'campaigns',
  initialState: {
    value: {
      '001': {
        about: 'Bacon ipsum dolor amet pork belly ham hock tail filet mignon boudin ham andouille short ribs pork loin sausage flank buffalo frankfurter tongue. Pork chop beef corned beef prosciutto filet mignon. Tongue landjaeger shank, chislic pork ribeye buffalo beef ribs t-bone pancetta. Ball tip beef meatloaf pastrami capicola, cupim tail ground round brisket salami. Picanha ground round beef frankfurter capicola alcatra turkey short ribs meatloaf leberkas ham hock. Beef ribs t-bone pork belly beef flank biltong chicken buffalo pig cupim meatloaf pork chop. Ham hock beef ribs shoulder, kielbasa biltong shankle flank boudin burgdoggen prosciutto salami jerky landjaeger tail bresaola.',
        bannerImage: {
          default: 'img/1060-5598x3732.jpg'
        },
        date: 'TBD',
        description: 'Hello friends! Well it is that time again for our annual coffee night fundraiser! Come join us at The Mocha Cup. Each beverage you purchase will go to our church fund. Can\'t make it? We also accept donations via form below.',
        donate: {
          description: 'Thank you for your generosity, but since this page is just for demo purposes, majority of this form has been disabled intentionally. You can test out some of the available form fields below to see your submission above.'
        },
        donors: [
          {
            'name': 'John Doe',
            'amount': 2000,
            'message': 'I am out of town for another week and will not be able to make it :-( ... But thank you everyone for working hard! Here is my support!'
          }
        ],
        goal: 5000.00,
        id: '001',
        location: 'The Mocha Cup',
        supporters: {
          description: 'Thanks to our supporters! You\'re helping our event tremendously! Remember, 5 randomly picked lucky winners will win a $10 dollar gift card to Chick-fil-A! Yuummm!'
        },
        title: 'Coffee Night with Friends!'
      },
    },
  },
  reducers: {
    getCampaign: (state, action) => {
      state.value.push(action.payload);
    },
    updateFundDonors: (state, action) => {
      state.value[action.payload.id].donors.push(action.payload.donor);
    }
  },
});

export const { getCampaign, updateFundDonors } = slice.actions;

export default slice.reducer;
