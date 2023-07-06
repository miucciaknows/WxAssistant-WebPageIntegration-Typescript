import './globals.css'
import { Inter } from 'next/font/google'
import WatsonAssistantChat from './Components/WatsonAssistantChat'
import HomePage from './Components/Header'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Medicine Assistant'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>
            {children}
            <WatsonAssistantChat/>
            <HomePage/>
      
      
      </body>

 
    </html>
  )
}
