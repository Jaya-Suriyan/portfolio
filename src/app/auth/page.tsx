"use client"
import { useEffect } from "react";

export default function Dashboard(props: any) {
    useEffect(() => {
        console.log({ props });
    }, [props])
    console.log({ props });
    return (<h1>Dashboard! d</h1>);
  }