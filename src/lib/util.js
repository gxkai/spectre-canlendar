const generate = require('nanoid/generate');
export function initKey(data) {
  data.uuid = generate('1234567890abcdef', 10);
}
