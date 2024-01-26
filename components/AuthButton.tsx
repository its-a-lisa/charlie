import * as React from "react";
import {
  PlasmicAuthButton,
  DefaultAuthButtonProps
} from "./plasmic/copy_of_supabase_auth/PlasmicAuthButton";
import { HTMLElementRefOf } from "@plasmicapp/react-web";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";


export interface AuthButtonProps extends DefaultAuthButtonProps {}

function AuthButton_(props: AuthButtonProps, ref: HTMLElementRefOf<"div">) {
  
  return (
  <PlasmicAuthButton 
  root={{ ref }}
  {...props}
  logoutBtn={{
    onClick: async () => {
      await supabaseClient.auth.signOut();
      router.reload();
    },
  }}
/>
);
}

const AuthButton = React.forwardRef(AuthButton_);
export default AuthButton;
