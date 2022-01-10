import {addMovie, getById, getMovies, deleteMovie,getTitles} from "./db";
 
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (root,{id})=> getById(id),
        titles: (root,{limit,rating})=> getTitles(limit,rating)
    },
    Mutation: {
        addMovie: (root, {name,score}) => addMovie(name,score),
        deleteMovie: (root,{id}) => deleteMovie(id),
    }
};

export default resolvers;