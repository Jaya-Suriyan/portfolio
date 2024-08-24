"use client"
import { useEffect } from "react";

export default function Signup(props: any) {
    useEffect(() => {
        console.log({ props });
    }, [props])
    console.log({ props });
    return (<h1>Signup! d</h1>);
  }