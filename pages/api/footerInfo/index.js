import { footerObject } from "../../../Data/footerObjects";

  export default function handler(req, res) {
    // Set the response status code to 200 (OK)
    res.status(200).json(footerObject);
  }