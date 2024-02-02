import User from "../models/User";
import { connectToDB } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  try {
    await connectToDB();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePhoto: image_url,
          email: email_addresses[0].email_address,
          userName: username,
        },
      },
      { upsert: true, new: true } //upsert: if a user doesn't exist, creates one
    );
    await user.save();
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const deleteUser = async (id) => {
  try {
    await connectToDB();
    const user = await User.findOneAndDelete({ clerkId: id });
    return user;
  } catch (err) {
    console.log(err);
  }
};
