const express = require('express');
const router = express.Router();


router.get('/', (req, res, next) => {
    const data = {
        name: 'Home',
        profiles: [
            {name: 'Mike'},
            {name: 'Cindy'},
            {name: 'Joe'}
        ]
    };
    res.render('index', data);
});

router.post('/join', (req, res, next) => {
    const body= req.body;

    res.json({
        data: body
    });
});

router.get('/json', (req, res, next) => {
    var data = {name: "Mia", age: "6"};
    res.json(data);
});
router.get('/html', (req, res, next) => {
    var html = '<h1>TEST!</h1>';
    res.send(html);
});

router.get('/query', (req, res, next) => {
    var query = req.query;
    res.json(query);
});

router.get('/params/:name/:age', (req, res, next) => {
    var params = req.params;
    res.json({
        params: params
    })
});

module.exports = router;