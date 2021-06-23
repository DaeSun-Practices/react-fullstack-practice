// import constants
import { __prod__ } from './constants';

//import entities
import { Post } from './entities/Post'

export default {
    entities: [Post],
    dbName: 'songreddit',
    type: 'postgresql',
    debug: !__prod__,
};