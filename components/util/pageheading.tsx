interface PageheadProps {
    title: string;
  }
  
  const Pagehead: React.FC<PageheadProps> = ({ title }) => {
    return (
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1 items-center">
          <h2 className="text-4xl font-bold text-center leading-7 text-white-900 sm:truncate sm:text-6xl sm:tracking-tight">
            Team of {title}
          </h2>
          <div className="mt-1 dots justify-center flex items-center flex-row space-x-3 sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-3">
            <div className="mt-2 flex items-center text-sm text-white-500">
              Home
            </div>
            <div className="mt-2 flex items-center justify-center text-sm text-white-500">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24">
                <path d="M10.477 0h-8.977l12.024 12-12.024 12h8.977l12.023-12z" />
              </svg>
            </div>
            <div className="mt-2 flex items-center text-sm text-white-500">
              Team
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Pagehead;