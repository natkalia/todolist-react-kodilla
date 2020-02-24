export const settings = {
  listCreatorText: 'Add new list',
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  header: {
    icon: 'smile',
  },
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultListImage: 'https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?cs=srgb&dl=clouds-cold-frost-frosty-540518.jpg&fm=jpg',
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const infoContents = {
  titleInfo: 'Information',
  imageInfo: 'https://images.pexels.com/photos/241544/pexels-photo-241544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  contentInfo: 'A task list (also called a to-do list or things-to-do) is a list of tasks to be completed such as chores or steps toward completing a project. It is an inventory tool which serves as an alternative or supplement to memory',
};

export const faqContents = {
  titleFaq: 'Frequently Asked Questions',
  imageFaq: 'https://images.pexels.com/photos/220210/pexels-photo-220210.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  contentFaq: 'A FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Answered Questions).',
};

const lists = [
  {
    id: 'list-1',
    title: 'General tasks',
    description: 'Some random tasks',
    image: 'https://images.pexels.com/photos/669996/pexels-photo-669996.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 'list-2',
    title: 'For work!',
    description: 'My tasks for next week at work',
    image: 'https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    id: 'list-3',
    title: 'Gifts for Christmas to find',
    description: 'List of gifts for family and friends',
    image: 'https://images.pexels.com/photos/3303614/pexels-photo-3303614.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },

];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Strange column',
    icon: 'question',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Skyrim',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
