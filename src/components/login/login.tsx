import React, { useEffect, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { addDoc, auth, collection, db, getDocs, googleProvider, query, where } from "../../firebase";
import { Backdrop, CircularProgress } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import "./login.css"
// Import your logo here.
// import logo from "path/to/your/logo.png";

const LOGIN = () => {
    const [loader, setLoader] = useState(false);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            setLoader(false);
            navigate("/dashboard");
        }
    }, [user, navigate])

    const handleSignInWithGoogle = async (e: React.MouseEvent<HTMLButtonElement>) => {
        setLoader(true);
        e.preventDefault();
            try {
              const res = await signInWithPopup(auth, googleProvider);
              navigate("/dashboard")
              const user = res.user;
              const q = query(collection(db, "users"), where("uid", "==", user.uid));
              const docs = await getDocs(q);
              if (docs.docs.length === 0) {
                await addDoc(collection(db, "users"), {
                  uid: user.uid,
                  name: user.displayName,
                  email: user.email,
                  authProvider: "Google",
                });
              }
            } catch (err) {
              console.error(err);
              alert(err.message);
            }
    };

    return (
        <>
        <div className="flex flex-col gap-10 login ">
          <div className="flex flex-col gap-2">
            {/* <img src={logo} className="rounded-full w-16 mx-auto mb-4" alt="" /> */}
  
            <h1 className="text-3xl font-titleFont font-extrabold text-sky-950 dark:text-sky-100 text-center">
              Welcome to ProfitWise
            </h1>
            <h1 className="text-2xl font-titleFont font-extrabold text-sky-900 dark:text-sky-100 text-center">
              Sign in to your dashboard
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <button
              onClick={handleSignInWithGoogle}
              className="login-with-google "
            >
              <span>
                <FcGoogle className="text-2xl" />
              </span>
              Sign In with Google
            </button>
          </div>
        </div>
        {loader && (
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loader}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
      </>
    );
};

export default LOGIN;
