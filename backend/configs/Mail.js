import dotenv from "dotenv"
dotenv.config()

const sendMail = async (to, otp) => {
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": process.env.BREVO_API_KEY
        },
        body: JSON.stringify({
            sender: { name: "Virtual Courses", email: process.env.EMAIL },
            to: [{ email: to }],
            subject: "Reset Your Password",
            htmlContent: `<p>Your OTP for Password Reset is <b>${otp}</b>. It expires in 5 minutes.</p>`
        })
    })

    if (!response.ok) {
        const errorText = await response.text()
        console.log("Brevo error:", errorText)
        throw new Error("Failed to send email")
    }
}

export default sendMail
