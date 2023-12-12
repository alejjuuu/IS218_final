import Head from 'components/Head'
import {NextUIProvider} from "@nextui-org/react";
export default function RootLayout({ children }) {
  return (
      <html lang="en">
      <Head Title="Home"/>
      <body>{children}</body>
      </html>
  )
}
