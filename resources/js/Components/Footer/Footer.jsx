import React from 'react'

const Footer = () => {
    return (
        <footer className="flex w-full flex-col">
            <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-6 py-12 lg:px-8">
                <div className="flex items-center justify-center">
                    <svg fill="none" height="44" viewBox="0 0 32 32" width="44"><path clip-rule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fill-rule="evenodd"></path></svg>
                    <span className="text-medium font-medium">KlikBayar</span>
                </div>
                <span aria-hidden="true" className="w-px h-px block" style={{ marginLeft: "0.25rem", marginTop: "1rem" }}></span>
                <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500" href="#" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">Beranda</a>
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500" href="#" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">Cek Transaksi</a>
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500" href="#" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">Kebijakan Privasi</a>
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-small no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-500" href="#" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">Tentang Kami</a>
                </div>
                <span aria-hidden="true" className="w-px h-px block" style={{ marginLeft: "0.25rem", marginTop: "1.5rem" }}></span>
                <div className="flex justify-center gap-x-4">
                    <a className="relative inline-flex items-center tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity text-default-400" href="#" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">
                        <span className="sr-only">Instagram</span>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="w-5 iconify iconify--fontisto" width="1em" height="1em" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M16 12a4 4 0 1 0-1.172 2.829A3.84 3.84 0 0 0 16 12.06l-.001-.063zm2.16 0a6.135 6.135 0 1 1-1.797-4.359a5.92 5.92 0 0 1 1.798 4.256l-.001.109zm1.687-6.406v.002a1.44 1.44 0 1 1-.422-1.018c.256.251.415.601.415.988v.029v-.001zm-7.84-3.44l-1.195-.008q-1.086-.008-1.649 0t-1.508.047c-.585.02-1.14.078-1.683.17l.073-.01c-.425.07-.802.17-1.163.303l.043-.014a4.12 4.12 0 0 0-2.272 2.254l-.01.027a6 6 0 0 0-.284 1.083l-.005.037a12 12 0 0 0-.159 1.589l-.001.021q-.039.946-.047 1.508t0 1.649t.008 1.195t-.008 1.195t0 1.649t.047 1.508c.02.585.078 1.14.17 1.683l-.01-.073c.07.425.17.802.303 1.163l-.014-.043a4.12 4.12 0 0 0 2.254 2.272l.027.01c.318.119.695.219 1.083.284l.037.005c.469.082 1.024.14 1.588.159l.021.001q.946.039 1.508.047t1.649 0l1.188-.024l1.195.008q1.086.008 1.649 0t1.508-.047c.585-.02 1.14-.078 1.683-.17l-.073.01c.425-.07.802-.17 1.163-.303l-.043.014a4.12 4.12 0 0 0 2.272-2.254l.01-.027c.119-.318.219-.695.284-1.083l.005-.037c.082-.469.14-1.024.159-1.588l.001-.021q.039-.946.047-1.508t0-1.649t-.008-1.195t.008-1.195t0-1.649t-.047-1.508c-.02-.585-.078-1.14-.17-1.683l.01.073a6.3 6.3 0 0 0-.303-1.163l.014.043a4.12 4.12 0 0 0-2.254-2.272l-.027-.01a6 6 0 0 0-1.083-.284l-.037-.005a12 12 0 0 0-1.588-.159l-.021-.001q-.946-.039-1.508-.047t-1.649 0zM24 12q0 3.578-.08 4.953a6.64 6.64 0 0 1-6.985 6.968l.016.001q-1.375.08-4.953.08t-4.953-.08a6.64 6.64 0 0 1-6.968-6.985l-.001.016q-.08-1.375-.08-4.953t.08-4.953A6.64 6.64 0 0 1 7.061.079L7.045.078q1.375-.08 4.953-.08t4.953.08a6.64 6.64 0 0 1 6.968 6.985l.001-.016Q24 8.421 24 12"></path></svg></a>
                </div>
                <span aria-hidden="true" className="w-px h-px block" style={{ marginLeft: "0.25rem", marginTop: "1rem" }}></span>
                <p className="mt-1 text-center text-small text-default-400">© {new Date().getFullYear()} KlikBayar Inc. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
