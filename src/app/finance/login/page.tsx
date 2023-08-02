"use client";
import { BasicForm } from "@/form/input";
import { Typography,Divider,Box } from "@mui/material";


const auth = {
  email: "user",
  password: "user",
};
const handleLogin = (data: {
  email: string;
  password: string;
  [x: string]: any;
}) => {
  if (!data.email || !data.password) {
    //invalid data
  }
  if (data.email !== auth.email || data.password !== auth.password) {
    //invalid credentials
  }
};
export default function Login() {
  const data = [
    {
      name: "email",
      type: "email",
      label: "email address",
    },{
      name: "password",
      type: "password",
      label: "password",
    },
  ];
  return (
    <section className="container">
      {/* <Shapes/> */}
      <Box
        sx={{
          my: 8,
          mx: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography>
          
        </Typography>
        <Box sx={{ maxWidth: "700px", p: 2 }}>
          <BasicForm
            data={data}
            title="Login"
            validateType="login"
            submit={handleLogin}
          />
          <Box sx={{ my: 4 }}>
            <Divider />
          </Box>
        </Box>
      </Box>
    </section>
  );
}

// export const getServerSideProps = secureRouteSsr(
//   async function getServerSideProps({ req }) {
//     const user = req.session.user ?? false;
//     if (user) {
//       return {
//         redirect: {
//           destination: "/dashboard",
//           permanent: false,
//         },
//       };
//     }
//     return { props: { session: null } };
//   }
// );
