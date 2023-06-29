const API_KEY = '298087f33100d7cac62528549502a6ae';
const API_BASE = 'https://api.themoviedb.org/3/';

const fetchMovies = async (dados) => {
    const req = await fetch(`${API_BASE}${dados}`);
    const json = await req.json();
    return json;
}

export const tmdb = {
    getAllMovies: async () => {
        return [
            {
                slug: 'originais',
                titulo: 'Originais Netflix',
                itens: await fetchMovies(`discover/tv?api_key=${API_KEY}&with_networks=213&language=pt-BR`)
            },
            {
                slug: 'trending',
                titulo: 'Em alta',
                itens: await fetchMovies(`trending/all/week?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'toprated',
                titulo: 'Aclamados pela crítica',
                itens: await fetchMovies(`movie/top_rated?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'romance',
                titulo: 'Filmes de romance',
                itens: await fetchMovies(`genre/10749/movies?language=pt-BR&api_key=${API_KEY}`)
            },
            {
                slug: 'fantasia',
                titulo: 'Filmes de fantasia',
                itens: await fetchMovies(`genre/14/movies?language=pt-BR&api_key=${API_KEY}`)
            }
        ]
    },
}