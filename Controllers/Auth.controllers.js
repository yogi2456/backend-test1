import UserModal from "../Modals/User.modal.js";

export const Create = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password ) return res.status(401).json({success: false, message: "All fields are mandatory"})

        const user = UserModal({
            name,
            email,
            password
        })

        await user.save();

        return res.status(200).json({success: true, message: "Created successfully"})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}


export const DeleteUser = async (req, res) => {
    try {
        const {id} = req.body;
        if(!id) return res.status(401).json({success: false, message: error})

        const user = UserModal.findById(id)
        
    

        return res.status(200).json({success: true, message: "deleted successfully", user: _id})
    } catch (error) {
        return res.status(500).json({success: false, message: error})
    }
}