const API_KEY = "cb33154be98fb98b41e487bf15d92dde";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchLatest: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
    fetchAiringToday: `/tv/airing_today?api_key=${API_KEY}&language=en-US&page=1`,
    fetchGenre: `/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  }

export default requests;