const API_KEY = "cb33154be98fb98b41e487bf15d92dde";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `https://api.themoviedb.org/3/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetch
  }

export default requests;