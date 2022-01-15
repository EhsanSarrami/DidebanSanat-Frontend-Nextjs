/* ----------------- contact mutation ----------------- */
export const CREATE_CONTACT = `
mutation CreateContact($fullName:String, $email:String, $phoneNumber:String, $subject:String, $discription:String) {
  createTicket(input: {fullName:$fullName, email:$email, phoneNumber:$phoneNumber, subject:$subject, discription:$discription}) {
    ticket {
      fullName
    }
  }
}
`;
