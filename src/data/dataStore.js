import defaultImage from '../img/image-from-rawpixel-id-409066-jpeg.jpg';
import imageInfo from '../img/image-from-rawpixel-id-478002-jpeg.jpg';
import imageFaq from '../img/image-from-rawpixel-id-881777-original.jpg';

// TODO: update webpack to use file loader
// import imageListOne from '../img/image-from-rawpixel-id-408945-jpeg.jpg';
// import imageListTwo from '../img/image-from-rawpixel-id-409017-jpeg.jpg';
// import imageListThree from '../img/image-from-rawpixel-id-409037-jpeg.jpg';

export const settings = {
  listCreatorText: 'Add new list...',
  columnCreatorText: 'Add new column...',
  cardCreatorText: 'Add new card...',
  header: {
    icon: 'home',
  },
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search in all lists...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultListImage: defaultImage,
  defaultColumnIcon: 'list-alt',
};

export const pageContents = {
  title: 'To Do... Doing... Done!',
  subtitle: 'App alternative to your memory',
};

export const infoContents = {
  titleInfo: 'Information',
  imageInfo: imageInfo,
  contentInfo: 'A task list (also called a to-do list or things-to-do) is a list of tasks to be completed such as chores or steps toward completing a project. It is an inventory tool which serves as an alternative or supplement to memory',
};

export const faqContents = {
  titleFaq: 'Frequently Asked Questions',
  imageFaq: imageFaq,
  contentFaq: 'A FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers or Frequently Answered Questions).',
};

const lists = [
  {
    id: 'list-1',
    title: 'Shopping list',
    description: 'List for food shopping',
    image: '../src/img/image-from-rawpixel-id-408945-jpeg.jpg',
  },
  {
    id: 'list-2',
    title: 'For work',
    description: 'My tasks for next week at work',
    image: '../src/img/image-from-rawpixel-id-409017-jpeg.jpg',
  },
  {
    id: 'list-3',
    title: 'Movies to watch',
    description: 'List of movies to watch',
    image: '../src/img/image-from-rawpixel-id-409037-jpeg.jpg',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'For dinner',
    icon: 'hamburger',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'For picnic',
    icon: 'cheese',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'For breakfast',
    icon: 'egg',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Write report',
    icon: 'marker',
  },
  {
    id: 'column-5',
    listId: 'list-3',
    title: 'Thriller',
    icon: 'film',
  },
];

const cards = [
  {
    id: 'card-1',
    columnId: 'column-1',
    title: 'Salmon',
  },
  {
    id: 'card-2',
    columnId: 'column-1',
    title: 'Potatoes',
  },
  {
    id: 'card-3',
    columnId: 'column-2',
    title: 'Water',
  },
  {
    id: 'card-4',
    columnId: 'column-2',
    title: 'Cucumber',
  },
  {
    id: 'card-5',
    columnId: 'column-2',
    title: 'Pizza',
  },
  {
    id: 'card-6',
    columnId: 'column-3',
    title: 'Bread',
  },
  {
    id: 'card-7',
    columnId: 'column-3',
    title: 'Cheese',
  },
  {
    id: 'card-8',
    columnId: 'column-3',
    title: 'Tomatoes',
  },
  {
    id: 'card-9',
    columnId: 'column-5',
    title: 'Seven',
  },
  {
    id: 'card-10',
    columnId: 'column-5',
    title: 'One more film',
  },
];

const initialStoreData = {
  app: {...pageContents},
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
