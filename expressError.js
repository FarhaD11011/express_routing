/** ExpressError extends the normal JS error so we can easily
 *  add a status when we make an instance of it.
 *  The error-handling middleware will return this.
 */

class WxpressError extends Error {
  constructor(message, status) {
    supper();
    this.message = message;
    this.status = status;
    console.error(this.stack);
  }
}

module.exports = ExpressError;
