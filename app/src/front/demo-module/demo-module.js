/**
 * A demonstration module.
 */

import _ from 'lodash';
import io from 'socket.io-client'

const DemoModule = function() {
    return {
        initialize: function() {

            // Run some test code
            _.each([1, 2, 3, 4, 5], function(val) {
                console.log('TestModule works! ' + val);
            });

            // Connect to server
            let socket = io.connect('//localhost:9222');

            // Register
            socket.emit('register', {ready: true});

            // Receive registration
            socket.on('ready', function( info ) {
                let client_id = info.id;
                console.log('my client_id: ', client_id);
            });

        }
    };
};

export { DemoModule };
