import Koa from 'koa';
import Router from 'koa-router';
import Suma from './operations/sum'

const app = new Koa();
const router = new Router();

router.get('/add/:a/:b', (ctx, next) => {
    const result = Suma(parseFloat(ctx.params.a), parseFloat(ctx.params.b));
    return ctx.body = { result };
});

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(process.env.PORT || 3000);