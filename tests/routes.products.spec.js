/*jshint esversion: 6*/

const request = require('supertest');
const express = require('express');
const chai = require("chai");
const expect = chai.expect;
const products = require("../routes/products.js");

const app = require('../server');
const server = request(app);

describe('products routes', function(){

  it(`it should have a /products index page`, (done)=>{
    server.get('/products')
    .expect('Content-Type', 'text/html')
    .expect(200)
    .end(function(err, res){
      done();
    });
  });

  it(`POST /products should create a new product`,(done)=>{
    server.post('/products')
    .type('form')
    .send({name: 'string',
          price: 'number',
          inventory: 'number'
    })
    .expect(200)
    .end(function(err, res){
     //expect(res.text).to.equal('Successfully hit the end of POST /products route!');
      //console.log(Object.keys(res));
      done();
    });
  });

  it(`PUT /products/:id should create a new product`, (done)=>{
    server.post('/products')
    .type('form')
    .send({name: 'string',
          price: 'number',
          inventory: 'number'
    })
    .expect(200)
      .end(function(err, res){
          server.put('/user/1')
          .end((err, res) => {
            done();
      });
    });
  });

  it(`DELETE /products/:id should delete a product`, (done)=>{
    server.post('/products')
    .type('form')
    .send({name: 'string',
          price: 'number',
          inventory: 'number'
    })
    .expect(200)
    .end(function(err, yes){
      server.delete('/user/1')
        .end((err, res) => {
          done();
    });
  });
});
});