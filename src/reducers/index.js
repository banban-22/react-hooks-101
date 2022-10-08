// action = {
//   type: 'CREATE_EVENT',
//   title: '2020 Tokyo Olympics',
//   body: 'Here is the notice of Tokyo Olympics 2020',
// };

// #before (When there is no events)
// state = [];
// #after
// state = [
//   {
//     id: 1,
//     title: '2020 Tokyo Olympics',
//     body: 'Here is the notice of Tokyo Olympics 2020',
//   },
// ]

// #before (When there are some events already)
// state = [
//   {
//     id: 1,
//     title: 'title1',
//     body: 'body1',
//   },
//   {
//     id: 2,
//     title: 'title2',
//     body: 'body2',
//   },
//   {
//     id: 3,
//     title: 'title3',
//     body: 'body3',
//   },
// ];
// #after
// state = [
// {
//     id: 1,
//     title: 'title1',
//     body: 'body1',
//   },
//   {
//     id: 2,
//     title: 'title2',
//     body: 'body2',
//   },
//   {
//     id: 3,
//     title: 'title3',
//     body: 'body3',
//   },
//   {
//     id: 4,
//     title: '2020 Tokyo Olympics',
//     body: 'Here is the notice of Tokyo Olympics 2020',
//   },
// ]

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      const event = { title: action.title, content: action.content };
      const length = state.length;
      const id = length === 0 ? 1 : state[length - 1].id + 1;
      return [...state, { id, ...event }];
    // case 'DELETE_EVENT':
    //   return state;
    // case 'DELETE_ALL_EVENTS':
    //   return [];
    default:
      return state;
  }
};

export default events;
