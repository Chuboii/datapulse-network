import nodemailer from 'nodemailer'

export const forgottenPin = async (req, res, next) => {
    try {
        const { email, name } = req.body
        
        const transporter = nodemailer.createTransport({
            service:'gmail',
            auth: {
              user: process.env.GMAIL,
              pass: process.env.GMAIL_SECRET,
            },
        });
        
        const mailInfo = {
                    from: "SME Datashare favoronyechere@gmail.com", // sender address
                    to: email, // list of receivers
                    subject: "Reset your PIN", // Subject line
            html: `
            <div style="background-color: #f8f8f8; padding: 40px; text-align: center;">
            <h1 style="color: #333; padding:1rem;">SME Datashare</h1>
</div>
<div style="padding:20px">
<p> Hi! ${name} </p>
            <p> We received a request to reset your account authorization PIN. To proceed with the pin reset, please click on the following link: </p>  
            <a href="https://datapulsenetwork.netlify.app/auth/resetpasscode">  Reset Pin </a>
            <p>Still have questions? Please contact
            <br/>
            <br/>
            <a href="datapulsenetwork.netlify.app/support">SME Datashare Support</a> </p>
            <p>
            Thanks,
            <br/>
            Team SME Datashare
             </p>
          </div>
            `, // html body
        }
        
        transporter.sendMail(mailInfo, (error, info) => {
            if (error) return next(error)
            
            res.status(200).json(info)
        })
            }
    catch (err) {
        next(err)
    }
}