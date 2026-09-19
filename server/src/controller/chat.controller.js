import askQwen from "../service/qwenModel.js";

/**
 * @param { import("express").Request } req
 * @param { import("express").Response } res
 * */
export const askController = async (req, res) => {
  try{
    const {
      question 
    } = req.body;  

    const response = await askQwen(question);

    res.status(200).json({
      msg : response
    });

  }catch (err){
    res.status(500).json({
      error : " Error processing queetion"
    })
  }
  
}

