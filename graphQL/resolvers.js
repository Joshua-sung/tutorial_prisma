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

//Django,RESTAPI 방식으로 개발할때 view.py 와 같이 어떤 요청에 어떤 내용을 실행할지 정함