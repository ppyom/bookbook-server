const key = process.env.API_KEY;
const baseUrl = 'http://www.aladin.co.kr/ttb/api';
const maxResults = 8;

const getItemList = async (type = 'ItemNewAll', page, sort) => {
  const url = createURL('ItemList.aspx', { page, sort });
  console.log(url);
  url.searchParams.append('QueryType', type);
  return fetch(url).then((res) => res.json());
};

const searchItem = async (query, page, sort) => {
  const url = createURL('ItemSearch.aspx', { page, sort });
  url.searchParams.append('Query', query);
  return fetch(url).then((res) => res.json());
};

const getItem = async (itemId, page, sort) => {
  const url = createURL('ItemLookUp.aspx', { page, sort });
  url.searchParams.append('ItemIdType', 'ISBN13');
  url.searchParams.append('ItemId', itemId);
  return fetch(url).then((res) => res.json());
};

const createURL = (endpoint, { page = 1, sort = 'Accuracy' } = {}) => {
  const url = `${baseUrl}/${endpoint}`;
  const defaultSearchParams = new URLSearchParams({
    TTBKey: key,
    Version: '20131101',
    Output: 'js',
    Start: page,
    MaxResults: maxResults,
    SearchTarget: 'Book',
    Sort: sort,
  });
  return new URL(`${url}?${defaultSearchParams.toString()}`);
};

module.exports = { getItemList, getSearch: searchItem, getItem };
