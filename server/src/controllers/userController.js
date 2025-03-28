import {db} from "../config/database.js";
import jwt from "jsonwebtoken";



export const getDetails = async (req, res) => {
    try {
      const { token } = req.cookies;
      console.log(token);
      const decoded = jwt.verify(token, "ijinwincwifjqun");
      const type = decoded.type;
      const id = decoded.id ;
      const id_string = type==='tourist'?"TouristID":"AgencyID";
      const query = `SELECT email,firstname,lastname,phoneno,image_url FROM ${type} WHERE ${id_string} = ? `
      const result = await db.query(query,[id]);
      console.log(result);
      result[0][0]["type"] = type;
      res.status(200).json({
        success: true,
        result:result[0][0],
        message: "Details nahi pata chali kya ? Refresh kar!",
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({
        success: false,
        message: "Internal Server Error!",
      });
    }
  }
  

export const imgUpdate = async (req,res) => {
try {
    const {image_url} = req.body;
    const {token} = req.cookies;
    const decoded = jwt.verify(token,"ijinwincwifjqun");
    const id = decoded.id;
    const type = decoded.type;
    const id_string = type==="tourist"?"TouristID":"AgencyID";
    const query = `UPDATE ${type} SET image_url = ? WHERE ${id_string} = ?`;
    await db.query(query,[image_url,id]);
    res.status(200).json({
        success:true,
        message:"Image Url Updated Successfully !"
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Internal Server Error"
    })
}
}