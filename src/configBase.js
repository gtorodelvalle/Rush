//Copyright 2012 Telefonica Investigación y Desarrollo, S.A.U
//
//This file is part of RUSH.
//
//  RUSH is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.
//  RUSH is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.
//
//  You should have received a copy of the GNU Affero General Public License along with RUSH
//  . If not, seehttp://www.gnu.org/licenses/.
//
//For those usages not covered by the GNU Affero General Public License please contact with::dtc_support@tid.es

var dir_prefix = process.env.RUSH_DIR_PREFIX || './';


// redis host
exports.queue = {};
exports.queue.redisHost = 'localhost';

exports.dbrelayer = {};
exports.dbrelayer.keyPrefix = 'wrH:';
exports.dbrelayer.redisHost = 'localhost';
exports.expireTime = 60 * 60;

exports.consumer_id = 'consumerA:';

//exports.evLsnr = {};
//exports.evLsnr.mongoHost = 'localhost';
//exports.evLsnr.mongoPort = 27017;
//exports.evLsnr.mongoDB = 'rush';
//exports.evLsnr.collectionState = 'RushState';
//exports.evLsnr.collectionError = 'RushError';

exports.listener = {};
exports.listener.port = 3001;

exports.consumer = {};
exports.consumer.maxPoppers = 30;
// agent: undefined -> globalAgent | false -> no agent
exports.consumer.agent = undefined;
exports.consumer.maxSockets = 100;

//exports.consumer.proxy =  "http://proxy:port";

/**
 * Level for logger
 * debug
 * warning
 * error
 *
 * @type {String}
 */

exports.consumer.logger = {};
exports.consumer.logger.logLevel = 'debug';
exports.consumer.logger.inspectDepth = 1;
exports.consumer.logger.Console = {
  level: 'debug', timestamp: true
};

exports.consumer.logger.File = {
  level: 'debug', filename: dir_prefix + '/consumer.log',
  timestamp: true, json: false,
  maxsize: 1024 * 1024, maxFiles: 3
};


exports.listener.logger = {};
exports.listener.logger.logLevel = 'debug';
exports.listener.logger.inspectDepth = 1;
exports.listener.logger.Console = {
  level: 'debug', timestamp: true
};
exports.listener.logger.File = {
  level: 'debug', filename: dir_prefix + '/listener.log',
  timestamp: true, json: false,
  maxsize: 1024 * 1024,
  maxFiles: 3
};


/* generic event listener */
var gevlsnr_mongo = 'localhost';
if (process.env.RUSH_GEN_MONGO) {
    gevlsnr_mongo = process.env.RUSH_GEN_MONGO;
}

//var gevLsnr = {};
//gevLsnr.name = 'gevLsnr';
//gevLsnr.mongoHost = gevlsnr_mongo;
//gevLsnr.mongoPort = 27017;
//gevLsnr.mongoDB = 'rush';
//gevLsnr.collection = 'RushGeneric';
//gevLsnr.filter = { state: 'error'};
//gevLsnr.take = {id: 'id', topic: 'topic', body: 'task.body',
//  statusCode: 'result.statusCode'};

exports.consumer.evModules = [
    {module: './evCallback'}
    ,{module: './evPersistence'}
//    ,{module: './gevLsnr', config: gevLsnr}
];

exports.listener.evModules = [];

