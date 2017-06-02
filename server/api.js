'use strict'
const api = require('express').Router()
const models = require('../db/models');
const Campus = models.Campus;
const Student = models.Student;


function generateError(status, message) {
    let err = new Error(message);
    err.status = status;
    return err;
}

function invalidId(bid) {
    if (isNaN(bid)) throw generateError(500, "done")
}

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

api.get('/', function (req, res, next) {
    Campus.findAll()
        .then(campuses => res.json(campuses))
        .catch(next);
});

api.get('/campus/:campusId', function (req, res, next) {
    Campus.findOne({ where: {id: req.params.campusId } })
        .then(campus => res.json(campus))
        .catch(next);
});

api.get('/students', function (req, res, next) {
    Student.findAll()
        .then(students => res.json(students))
        .catch(next);
});

api.get('/student/:studentId', function (req, res, next) {
//One student - 4 //This one is unnecessary to me, The student in my approach doesn't have a profile
    //since their name and campus are within the list, so I would only need the ID to delete and that I have in the prop
    Student.findOne({ where: {id: req.params.studentId } })
        .then(student => res.json(student))
        .catch(next);


});

api.post('/campus/create', function (req, res, next) {
// create campus - 5
    Campus.create(req.body)
        .then(campus => res.status(201).json(campus))
        .catch(next);
});

api.post('/students/create', function (req, res, next) {
// create student - 6
    Student.create(req.body)
        .then(student => res.status(201).json(student))
        .catch(next);
});


api.put('/student/:studentId/update', function (req, res, next) {
// edit student - 7
    req.student.update(req.body)
        .then(student => res.status(200).json(student))
        .catch(next);
});

api.put('/:campus/:campusId/update', function (req, res, next) {
// edit campus - 8
    req.campus.update(req.body)
        .then(campus => res.status(200).json(campus))
        .catch(next);
});


api.delete('/campus/:campusId/delete', function (req, res, next) {
// delete student - 9
    const bid = Number(req.params.campusId);
    invalidId(bid);

    Campus.destroy({
        where: {
            id: bid
        }
    })
        .then( campus => {
            if (!campus){ next(err) } // if it doesn't exist which shouldn't happen
            res.status(204).send()
        })
        .catch(next);

});


api.delete('/student/:studentId/delete', function (req, res) {
// delete campus - 10
    const bid = Number(req.params.studentId);
    invalidId(bid);

    Student.destroy({
        where: {
            id: bid
        }
    })
        .then( student => {
            if (!student){ next(err) } // if it doesn't exist which shouldn't happen
            res.status(204).send()
        })
        .catch(next);
});


api.use(function(err, req, res, next) {
    res.status(err.status || 404).send(err.message || 'Something\'s missing!');
});



module.exports = api