// part 1

// 1.
/*
 * الكود في JavaScript نوعين: sync و async.
 * الـ sync بيتنفذ سطر ورا سطر في الـ call stack.
 * أما العمليات اللي بتاخد وقت (زي قراءة ملف أو طلب شبكة) فبتتبعت لـ libuv، وهو اللي بيشغّلها
 * في الخلفية (thread pool أو الـ OS). أول ما تخلص، الـ callback بتاعها بيستنى في الـ queue،
 * والـ event loop بيراقب الـ call stack، ولما تفضى بيدخّل الـ callbacks دي واحدة واحدة.
 */

//===========================

// 2.
/*
 * libuv مكتبة مكتوبة بـ C وجوه Node.js، وهي المسؤولة عن تنفيذ العمليات الـ async
 * اللي بتاخد وقت، سواء في الـ thread pool أو عن طريق الـ OS مباشرة.
 */

//========================

// 3.
/*
 * أي عملية بتاخد وقت بتتسلّم لـ libuv وتشتغل في الـ thread pool أو في الـ OS،
 * وفي نفس الوقت الـ call stack بيكمّل تنفيذ باقي الكود.
 * والـ event loop بيراقب الـ call stack، ولما تفضى بيرجّع نتايج العمليات اللي خلصت.
 * عشان كده الكود الرئيسي مبيتوقفش (non-blocking) وبيفضل شغال وإحنا مستنيين النتيجة.
 */

//==========================

// 4.
/*
 * call stack  => المكان اللي بيتنفذ فيه الكود بتاعي فعليًا (الـ sync بشكل مباشر،
 *                والـ callbacks بتتنفذ فيه لما يجي دورها).
 * event queue => طابور بتستنى فيه الـ callbacks بتاعة العمليات اللي خلصت،
 *                لحد ما الـ call stack يفضى.
 * event loop  => بيتأكد باستمرار إن الـ call stack فاضي، ولو فاضي بياخد
 *                الـ callbacks من الـ queue بالترتيب وبيحطها في الـ call stack.
 */

//============================

// 5.
/*
 * thread pool هو مجموعة threads بتشتغل فيها العمليات التقيلة اللي بيبعتها libuv
 * (زي fs و crypto و zlib و dns.lookup).
 * حجمه الافتراضي 4 threads، وممكن نغيّره بالـ environment variable:
 * UV_THREADPOOL_SIZE=8
 */

//=====================

// 6.
/*
 * blocking code: كود بيوقف الـ call stack لحد ما يخلص (زي readFileSync أو loop طويل)،
 *                فمفيش أي حاجة تانية تتنفذ في الوقت ده، والـ event loop نفسه بيتعطل.
 * non-blocking code: كود بيتبعت لـ libuv يشتغل في الخلفية، والـ call stack يكمّل
 *                    من غير ما يستنى، وأول ما العملية تخلص الـ callback بتاعها بيستنى
 *                    في الـ queue لحد ما يجي دوره.
 */

//=======================
const fs = require('fs/promises');
const express = require('express')
const app = express()

app.use(express.json())

app.post('/user', async (req, res) => {
    let users = await fs.readFile('users.json', 'utf8')
    users = JSON.parse(users)
    let emailExist = users.find((user) => user.email === req.body.email)
    if (emailExist) {
        return res.status(409).json({message: 'email already exists'})
    }
    users.push(req.body)
    await fs.writeFile('users.json', JSON.stringify(users))
    res.json({message: 'user added successfully', success: true})

})

app.put('/user/:id', async (req, res) => {
    const id = Number(req.params.id)
    let users = await fs.readFile('users.json', 'utf8')
    users = JSON.parse(users)
    let userExist = users.find((user) => user.id === id)
    if (!userExist) {
        return res.status(404).json({message: 'user not found'})
    }
    Object.assign(userExist, req.body)
    await fs.writeFile('users.json', JSON.stringify(users))
    res.json({message: 'user updated successfully'})
})

app.delete('/user/:id', async (req, res) => {
    const id = Number(req.params.id)
    let users = await fs.readFile('users.json', 'utf8')
    users = JSON.parse(users)

    let userExist = users.find((user) => user.id === id)
    if (!userExist) {
        return res.status(404).json({message: 'user not found'})
    }
    let deletedUser = users.filter((user) => user.id !== id)
    await fs.writeFile('users.json', JSON.stringify(deletedUser))
    return res.status(200).json({message: 'user deleted successfully'})
})

app.get('/user{/:id}', async (req, res) => {
    try {
        const id = Number(req.params.id)
        const {name, age} = req.query;

        let users = await fs.readFile('users.json', 'utf8');
        users = JSON.parse(users);

        let result = users;

        if(id){
            result = users.filter((user) => user.id === id)

        }

        if (name) {
            result = result.filter(user => user.name === name);
        }

        if (age) {
            result = result.filter(user => user.age === Number(age));
        }

        if (result.length === 0) {
            throw new Error('user not found');
        }

        return res.status(200).json({message: 'success', data: result.length === 1 ? result[0] : result});

    } catch (err) {
        // console.error(err);
        return res.status(500).json({message: err.message || 'internal error server'});
    }
});

app.listen(3000)
