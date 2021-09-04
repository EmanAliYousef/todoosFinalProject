export interface TODO {
    _id: string;
    title: string;
    content: string;
    publisher: {
      id: string;
      name: string;
  },
  createdAt: string;
}
  export const todoDefaultValue: TODO = {
    _id: '',
  title: '',
  content: '',
  publisher: {
    id: '',
    name: '',
  },
  createdAt: ''
}

