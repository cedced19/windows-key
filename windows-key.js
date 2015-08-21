#!/usr/bin/env node
'use strict';

if (/^win/.test(process.platform)) {
    require('child_process').spawn('cmd.exe', ['/c', __dirname + '/get.vbs']).on('close', function (code) {
      if (code !== 0) console.log('An error has occured!')
    });
} else {
    console.log('You must have Windows to use this program.');
}
