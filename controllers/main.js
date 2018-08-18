const Tarea = require('../models/tarea');

const express = require ('express')

exports.home = (req,res) => {
	res.json({message: "se supone que se creo lo mismo que en public de la carpeta routes, pero ahora por modulos mas ordenados"});
}

exports.save = (req,res) => {
	var tarea = new Tarea({
		name: req.body.name
				
	});

	tarea.save((err,doc) => {
		if(err) {
			res.status(500).json({message:err})
		} else {
			//res.status(200).json(response);
			Tarea.find((error,response) => {
				if(error) {
					res.status(500).json({message:error})
				} else {
					res.status(200).json(response);
				}
			})
		}
	})
}

exports.find = (req,res) => {
	Tarea.find((error,response) => {
		if(error) {
			res.status(500).json({message:error})
		} else {
			res.status(200).json(response);
		}
	})
}

exports.findById = (req,res) => {
	var id = req.params.id;
	Tarea.findById({_id: id}, (error, response) =>{
		if(err) {
			res.status(500).json({message:err})
		} else {
			res.status(200).json(response);
		}
	})
}

exports.findOne = (req,res) => {
	Tarea.findOne({name: req.params.name}, (error, response) => {
		if(error) {
			res.status(500).json({message:err})
		} else {
			res.status(200).json(response);
		}
	})
}

exports.remove = (req,res) => {
	Tarea.remove({_id:req.params.id}, (error, response) =>{
		if(error) {
			res.status(500).json({message:error})
		} else {
			res.status(200).json(response);
		}

	})
}