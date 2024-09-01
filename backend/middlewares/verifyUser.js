import jwt from 'jsonwebtoken'

export const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.body.token || req.header('Authorization')?.replace('Bearer ', '')
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
                success: false
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