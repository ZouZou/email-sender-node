class Email {
    constructor(from, to, cc, bcc, subject, body) {
        this.from = from;
        this.to = to;
        this.cc = cc;
        this.bcc = bcc;
        this.subject = subject;
        this.body = body;
    }
}

module.exports = Email;