import { StatusCodes } from "http-status-codes";

export const errorResponce = (error) => {
     console.log(error)
        if(error.status) {
            return res.status(error.status).json({
                message: error.message,
                success: false
            });
        }
        return error.res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: "Internal server error",
            success: false
        })
}

export const sucessResponce = (data, statusCode, message) => {
    return res.status(statusCode.OK).json({
        success: true,
        data,
        message
    })
}