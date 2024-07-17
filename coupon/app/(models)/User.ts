import mongoose, { Schema } from "mongoose"

mongoose.connect(process.env.MONGODB_URI || "")
mongoose.Promise = global.Promise

const userSchema = new Schema(
    {
        name: String,
        surname: String,
        email: String,
        password: String,
        telephone: String,
        roleFilter: String,
        couponCode: String,
        pointsGained: Number,
    },
    {
        timestamps: true,
    }
)

const User = mongoose.models.User || mongoose.model("User", userSchema)
export default User