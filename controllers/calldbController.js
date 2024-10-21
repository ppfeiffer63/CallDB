const res = require("express/lib/response");

const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM callbook', (err, calls) => {
            if (err) {
                res.json(err);
            }

            res.render('calldb', {
                data: calls,  title: 'CallDatabase', 
            });
        });
    });
};


module.exports = controller;