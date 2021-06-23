// import mikroORM packages
import { MikroORM } from "@mikro-orm/core";

// import mikroORM config
import microConfig from './mikro-orm.config';

//import entities
import { Post } from './entities/Post'

const main  = async () => {
    //init orm
    const orm = await MikroORM.init(microConfig);

    const post = orm.em.create(Post, {title: 'my first post'});
    await orm.em.persistAndFlush(post);

    // 위 두 라인과 await orm.em.nativeInsert(Post, {title: 'my first post'})는 동일하다.
    console.log('-----------sql2------------')
    await orm.em.nativeInsert(Post, {title: 'my sencond post'});
};

main().catch(error => {
    console.error(error);
});