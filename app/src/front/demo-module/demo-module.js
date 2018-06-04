/**
 * A demonstration module.
 */

import _ from 'lodash';

const DemoModule = function() {
    return {
        initialize: function() {

            // Run some test code
            _.each([1, 2, 3, 4, 5], function(val) {
                console.log('TestModule works! ' + val);
            });
        }
    };
};

export { DemoModule };
