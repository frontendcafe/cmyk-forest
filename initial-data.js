const crypto = require("crypto");
const randomString = () => crypto.randomBytes(6).hexSlice();

module.exports = async (keystone) => {
  // Count existing stuff users
  const {
    data: {
      _allStuffsMeta: { count = 0 },
    },
  } = await keystone.executeGraphQL({
    query: `query {
      _allStuffsMeta {
        count
      }
    }`,
  });

  if (count === 0) {
    const password = randomString();
    const email = "admin@example.com";

    const { errors } = await keystone.executeGraphQL({
      query: `mutation initialStuff($password: String, $email: String) {
            createStuff(data: {username: "Admin", email: $email, password: $password}) {
              id
            }
          }`,
      variables: { password, email },
    });

    if (errors) {
      console.log("failed to create initial stuff:");
      console.log(errors);
    } else {
      console.log(`

      Stuff created:
        email: ${email}
        password: ${password}
      Please change these details after initial login.
      `);
    }
  }
};
