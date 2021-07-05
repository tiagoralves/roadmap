import { NextApiRequest, NextApiResponse } from "next";
import data from "../../utils/timeline_data";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    return res.json(data);
  }
};
