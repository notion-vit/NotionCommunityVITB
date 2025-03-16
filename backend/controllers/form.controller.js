import Form from "../models/form.model.js";

export const formPost = async (req, res) => {
  const { firstname, lastname, vitemail, query } = req.body;
  const form = new Form({
    firstname,
    lastname,
    vitemail,
    query,
  });
  try {
    const createdForm = await form.save();
    res
      .status(201)
      .json({ message: "Query was successfully submitted", suc: true });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to submit query", error: err, suc: false });
  }
};
