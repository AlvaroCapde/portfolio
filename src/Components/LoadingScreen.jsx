export const LoadingScreen = () => {
    return(
            <div className="flex flex-col space-y-10 items-center justify-center">
                <div className="relative">
                    <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div
                        className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-slate-500 animate-spin">
                    </div>
                </div>
                <div>
                    <h1 className="text-2xl text-slate-600 animate-bounce font-bold text-center">Loading the <span className='text-gray-200'>best</span> resumes...</h1>
                </div>
            </div>
    )
}