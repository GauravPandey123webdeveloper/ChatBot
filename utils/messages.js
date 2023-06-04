const moment = require('moment');
//returning message
function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format('h:mm a')
  };
}
//exporting modules

module.exports = formatMessage;
