// Search Engine Functionality
const searchEngineNameEl = document.getElementById('search-engine-name') as HTMLButtonElement;
const searchBtnEl = document.getElementById('search-btn') as HTMLButtonElement;
const searchInputEl = document.getElementById('txt') as HTMLInputElement;
const searchEngineEl = document.querySelector('.search-engine') as HTMLDivElement;
const searchEngineList = document.querySelectorAll('.search-engine-list li');

let searchEngine = {
  name: '谷歌',
  url: 'https://www.google.com/search?q='
};

// Set default search engine
function setSearchEngine(name: string) {
  switch (name) {
    case '百度':
      searchEngine = { name: '百度', url: 'https://www.baidu.com/s?wd=' };
      break;
    case '谷歌':
      searchEngine = { name: '谷歌', url: 'https://www.google.com/search?q=' };
      break;
    case '必应':
      searchEngine = { name: '必应', url: 'https://www.bing.com/search?q=' };
      break;
    case '好搜':
      searchEngine = { name: '好搜', url: 'https://www.so.com/s?q=' };
      break;
    case '搜狗':
      searchEngine = { name: '搜狗', url: 'https://www.sogou.com/web?query=' };
      break;
    case '淘宝':
      searchEngine = { name: '淘宝', url: 'https://s.taobao.com/search?q=' };
      break;
    case '京东':
      searchEngine = { name: '京东', url: 'https://search.jd.com/Search?keyword=' };
      break;
    case '天猫':
      searchEngine = { name: '天猫', url: 'https://list.tmall.com/search_product.htm?q=' };
      break;
    case '1688':
      searchEngine = { name: '1688', url: 'https://s.1688.com/selloffer/offer_search.htm?keywords=' };
      break;
    case '知乎':
      searchEngine = { name: '知乎', url: 'https://www.zhihu.com/search?type=content&q=' };
      break;
    case '微博':
      searchEngine = { name: '微博', url: 'https://s.weibo.com/weibo?q=' };
      break;
    case 'Bilibili':
      searchEngine = { name: 'Bilibili', url: 'https://search.bilibili.com/all?keyword=' };
      break;
    case '豆瓣':
      searchEngine = { name: '豆瓣', url: 'https://www.douban.com/search?q=' };
      break;
    case '优酷':
      searchEngine = { name: '优酷', url: 'https://so.youku.com/search_video/q_' };
      break;
    case 'GitHub':
      searchEngine = { name: 'GitHub', url: 'https://github.com/search?q=' };
      break;
    default:
      searchEngine = { name: '谷歌', url: 'https://www.google.com/search?q=' };
  }
  searchEngineNameEl.innerText = `${searchEngine.name}搜索`;
}

// Toggle search engine selection
searchEngineNameEl.addEventListener('click', () => {
  if (searchEngineEl.style.display === 'block') {
    searchEngineEl.style.display = 'none';
  } else {
    searchEngineEl.style.display = 'block';
  }
});

// Handle search engine selection
for (const item of Array.from(searchEngineList)) {
  item.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    setSearchEngine(target.innerText);
    searchEngineEl.style.display = 'none';
  });
}

// Handle search button click
searchBtnEl.addEventListener('click', () => {
  const searchText = searchInputEl.value.trim();
  if (searchText) {
    window.open(searchEngine.url + searchText, '_blank');
  }
});

// Handle enter key press
searchInputEl.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const searchText = searchInputEl.value.trim();
    if (searchText) {
      window.open(searchEngine.url + searchText, '_blank');
    }
  }
});

// Close search engine dropdown when clicking outside
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  if (!target.closest('.search-box') && !target.closest('.search-engine')) {
    searchEngineEl.style.display = 'none';
  }
});

// Left sidebar toggle functionality
const leftBarEl = document.getElementById('leftBar') as HTMLDivElement;
let isLeftBarOpen = false;

// Double click to toggle sidebar
document.addEventListener('dblclick', () => {
  isLeftBarOpen = !isLeftBarOpen;
  leftBarEl.style.left = isLeftBarOpen ? '0' : '-240px';
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  setSearchEngine('谷歌');
});
