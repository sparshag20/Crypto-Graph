export const NewsList=()=>"https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=031b25f54284453eb3dd2720396a4b43"
export const Trending=()=>"https://api.coingecko.com/api/v3/search/trending"
export const coinsList=()=>"https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false"
export const SingleCoin=(id)=>`https://api.coingecko.com/api/v3/coins/${id}`
export const Charts=(id, days = 365)=>`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}`