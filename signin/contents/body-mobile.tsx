import React from "react";
import UrsorFadeIn from "../../ui/UrsorFadeIn";
import { Stack } from "@mui/system";
import { useState } from "react";
import { PALETTE, Typography, UrsorButton, UrsorInputField } from "../../ui";
import { LabeledInputField } from "../../ui/labeled-input-field";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "../../ui/IconButton";

// interface IProviderButtonDetails {
//   name: string;
//   logoUrl: string;
// }

// const PROVIDER_BUTTON_DETAILS: IProviderButtonDetails[] = [
//   {
//     name: "Google",
//     logoUrl: "https://ursorassets.s3.eu-west-1.amazonaws.com/google_icon.png",
//   },
//   {
//     name: "Apple",
//     logoUrl: "https://ursorassets.s3.eu-west-1.amazonaws.com/apple_logo.png",
//   },
// ];

// const LoginButton = (props: IProviderButtonDetails) => (
//   <Stack
//     height="39px"
//     bgcolor={PALETTE.secondary.grey[1]}
//     borderRadius="20px"
//     px="24px"
//     alignItems="center"
//     direction="row"
//     spacing="16px"
//     sx={{
//       cursor: "pointer",
//       "&:hover": { opacity: 0.6 },
//       transition: "0.2s",
//     }}
//   >
//     <img src={props.logoUrl} height="20px" width="20px" alt="provider logo" />
//     <Typography bold>{`Sign in with ${props.name}`}</Typography>
//   </Stack>
// );

// const MobileLoginForkCard = (props: {
//   title: string;
//   subtitle: string;
//   imageUrl: string;
//   button: React.ReactNode;
// }) => (
//   <Stack
//     borderRadius="20px"
//     bgcolor="rgb(255,255,255)"
//     p="20px"
//     boxSizing="border-box"
//   >
//     <Stack spacing="8px" alignItems="center">
//       <Typography variant="h5">{props.title}</Typography>
//       <Stack width="70%">
//         <Typography
//           variant="small"
//           bold
//           sx={{ textAlign: "center" }}
//           color={PALETTE.secondary.grey[4]}
//         >
//           {props.subtitle}
//         </Typography>
//       </Stack>
//     </Stack>
//     <Stack position="relative">
//       <img
//         src={props.imageUrl}
//         width="20px"
//         height="20px"
//         alt="parental controls"
//       />
//       <Stack
//         position="absolute"
//         width="100%"
//         bottom={0}
//         height="70px"
//         sx={{
//           background: "linear-gradient(rgba(255,255,255,0), rgb(255,255,255))",
//         }}
//       />
//     </Stack>
//     <Stack width="100%" alignItems="center" pt="12px">
//       {props.button}
//     </Stack>
//   </Stack>
// );

const MobileActualLoginView = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <Stack height="100vh" justifyContent="center" alignItems="center">
      <Stack direction="column" spacing={12} alignItems="center">
        <Stack direction="row" justifyContent="flex-start" width="100%">
          <IconButton
            startIcon={<ArrowBackIcon width="12px" height="12px" />}
            width={48}
            height={48}
            url="#"
            alt="Back"
            bgcolor={PALETTE.secondary.grey[1]}
          />
        </Stack>

        <Stack
          height="100%"
          justifyContent="center"
          alignItems="center"
          zIndex={2}
        >
          <UrsorFadeIn duration={800}>
            <Stack
              bgcolor="rgb(255,255,255)"
              borderRadius="24px"
              p="28px"
              boxSizing="border-box"
              justifyContent="center"
              width="100%"
              boxShadow="0 0 30px #A594FF"
            >
              <Stack alignItems="center" spacing="12px" width="100%">
                <Stack
                  sx={{
                    background: `linear-gradient(${PALETTE.secondary.purple[2]}, ${PALETTE.secondary.blue[2]})`,
                    "-webkit-text-fill-color": "transparent",
                    backgroundClip: "text",
                    "-webkit-background-clip": "text",
                  }}
                >
                  <Typography variant="h5" color={PALETTE.secondary.purple[2]}>
                    Sign in to Astrosafe
                  </Typography>
                </Stack>
                <Stack pb="20px" width="250px" sx={{ textAlign: "center" }}>
                  <Typography variant="small">
                    Log in to your account and start Creating.
                  </Typography>
                </Stack>
              </Stack>
              {/* <Stack pt="16px" spacing="9px" width="100%">
            {PROVIDER_BUTTON_DETAILS.map((x, i) => (
              <LoginButton key={i} {...x} />
            ))}
          </Stack> */}
              {/* <Stack
            direction="row"
            height="68px"
            alignItems="center"
            spacing="16px"
            pt="3px"
          >
            <Stack
              height="1px"
              bgcolor={PALETTE.secondary.grey[3]}
              width="100%"
            />
            <Typography color={PALETTE.secondary.grey[3]} variant="small">
              OR
            </Typography>
            <Stack
              height="1px"
              bgcolor={PALETTE.secondary.grey[3]}
              width="100%"
            />
          </Stack> */}
              <Stack spacing="12px">
                <LabeledInputField label="Email">
                  <UrsorInputField
                    value={email}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setEmail(event.target.value)
                    }
                    placeholder="Enter your email"
                    width="100%"
                    leftAlign
                  />
                </LabeledInputField>
                <LabeledInputField label="Password">
                  <UrsorInputField
                    value={password}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPassword(event.target.value)
                    }
                    placeholder="Enter your password"
                    width="100%"
                    leftAlign
                  />
                </LabeledInputField>
              </Stack>
              <Stack pt="16px" alignItems="center" spacing="10px">
                <UrsorButton width="100%" onClick={() => null}>
                  Sign in
                </UrsorButton>
                <Stack direction="row" spacing="6px">
                  <Typography>{`Don't have an account?`}</Typography>
                  <Stack
                    sx={{
                      cursor: "pointer",
                      transition: "0.2s",
                      "&:hover": { opacity: 0.6 },
                    }}
                  >
                    <Typography bold color={PALETTE.secondary.purple[2]}>
                      Sign up
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          </UrsorFadeIn>
        </Stack>
      </Stack>
    </Stack>
  );
};

// const MobileForkView = (props: { switchToActualLogin: () => void }) => (
//   <Stack
//     flex={1}
//     justifyContent="center"
//     alignItems="center"
//     spacing="24px"
//     pt="36px"
//   >
//     <Stack justifyContent="center" alignItems="center" spacing="12px">
//       <Typography variant="h5" color="rgba(255,255,255,0.9)">
//         Sign in to Astrosafe
//       </Typography>
//       <Stack width="80%">
//         <Typography
//           variant="small"
//           bold
//           color={PALETTE.secondary.grey[3]}
//           sx={{ textAlign: "center" }}
//         >
//           Please select how you would like to proceed with the product.
//         </Typography>
//       </Stack>
//     </Stack>
//     <Stack spacing="24px">
//       <MobileLoginForkCard
//         title="Set up Your Browser"
//         subtitle="First time using AstroSafe, create a safe browser"
//         button={
//           <UrsorButton
//             dark
//             variant="tertiary"
//             onClick={props.switchToActualLogin}
//           >
//             Set up Parental Controls
//           </UrsorButton>
//         }
//         imageUrl="https://ursorassets.s3.eu-west-1.amazonaws.com/Frame+1171277663.png"
//       />
//       <MobileLoginForkCard
//         title="Pair with Device"
//         subtitle="Scan your QR code to connect to an existing Parent Portal"
//         button={<UrsorButton variant="secondary">Scan QR Code</UrsorButton>}
//         imageUrl="https://ursorassets.s3.eu-west-1.amazonaws.com/Frame+1171277664.png"
//       />
//     </Stack>
//   </Stack>
// );

const SignInPageMobileBody: React.FC = () => {
  // const [view, setView] = useState<"fork" | "login" | "scan">("fork");
  return (
    <Stack overflow="scroll" p="24px" height="100%" zIndex={2}>
      {/* <Stack flex={1} justifyContent="center" alignItems="center">
        {view === "fork" ? (
          <MobileForkView switchToActualLogin={() => setView("login")} />
        ) : view === "login" ? ( */}
      <MobileActualLoginView />
      {/* ) : null}
      </Stack> */}
    </Stack>
  );
};

export default SignInPageMobileBody;
