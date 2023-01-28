import axios from 'axios';

const KEY = '25319761-84ef76f9b3bcf2090a4cd8b86';
const instance = axios.create({
  baseURL: `https://pixabay.com/api/?key=${KEY}`,
  params: {
    per_page: 12,
    orientation: 'horizontal',
    image_type: 'photo',
  },
});

export const searchImg = async (q, page = 1) => {
  const { data } = await instance.get('', {
    params: {
      q,
      page,
    },
  });
  return data;
};
