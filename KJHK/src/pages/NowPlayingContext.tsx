import React from 'react';

const NowPlayingContext = React.createContext<{ song: string, artist: string; }>({ song: "", artist: "" });

export default NowPlayingContext;