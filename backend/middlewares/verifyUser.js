import jwt from 'jsonwebtoken'

export const verifyUser = async (req, res, next) => {
    try {
        // const token = req.cookies.token || req.body.token || req.header('Authorization')?.replace('Bearer ', '')
        const token = req.cookies.token;
        console.log(token)
        console.log(req.cookies)
        console.log(req.body)
        console.log(req.header)
        if (!token) {
            return res.status(401).json({
                message: 'Unauthorized',
                success: false
            })
        }
        try {

            // eslint-disable-next-line no-undef
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decoded
        } catch (error) {
            return res.status(401).json({
                message: 'Invalid token',
                success: false,
                error: error.message
            })
        }
        next()
    } catch (error) {
        return res.status(500).json({
            message: "Error verifying user",
            error: error.message
        })
    }
}