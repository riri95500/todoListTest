class EmailService {
    sendEmail(user, content) {
        console.log("Email sent to " + user.email + " with content : " + content)
    }
}

module.exports = EmailService;
