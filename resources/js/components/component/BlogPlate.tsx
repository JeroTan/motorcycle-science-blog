export default function BlogPlate({children}:{children?:React.ReactNode}) {
  return <>
    <main className="py-10 sm:px-5 px-2">
      {children}
    </main> 
  </>
}