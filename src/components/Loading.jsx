const Loading = () => {
  return (
    <>
     <div className="flex items-center h-screen w-screen justify-center font-plusjkt bg-[url('/img/bg-primary.webp')] bg-cover bg-center bg-no-repeat">
      <div className="h-[1.5rem] w-[1.5rem] animate-spin rounded-full border-4 border-white border-solid border-t-transparent"></div>
      <p className="ml-2 text-white text-[1rem] font-laleza">Loading...</p>
    </div>
    </>
  )
}

export default Loading