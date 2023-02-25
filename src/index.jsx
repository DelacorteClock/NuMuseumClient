import {createRoot} from 'react-dom/client';
import './index.scss';

const NuMuseumApp = function () {
    return (
            <div className='numuseum'>
            <div className='numuseumhighlight'>
                <code>GOOD MORNING</code>
            </div>
                <div>I buy my rubber skirt gladly. I like my rubber skirt truly. The leathers are not tacky suits. This is a very enjoyable day. Is it not? I purchase my space shirt xtremely. The rubbers are nice shirts. I purchase my cotton free suit gladly. The space explorers are xtreme skyscrapers. This is a very pleasant day. Is it not? I admire my plastic clothing in real life. I admire my plastic pumpkin in real life. The plastics are admirable pants. I enjoy my cotton free pumpkin in actuality. I like my rubber pants truly. I like my leather dress truly. I celebrate my space shirt sincerely. I appreciate my cotton free shirt connected to pants sincerely. This is a very pleasant day. Is it not? I celebrate my leather suit excessively. I admire my space dress enthusiastically. I appreciate my plastic pants in real life. The plastics are admirable shirts. I appreciate my plastic suit excessively. I like my rubber dress in real life. I admire my rubber suit gladly. This is a very enjoyable day. Is it not? I buy my rubber dress xtremely. I buy my leather skirt extremely. I like my plastic shirt in actuality. I like my rubber clothing gladly. I celebrate my space shirt connected to pants excessively. I buy my rubber clothing gladly. I enjoy my space explorer skirt enthusiastically. This is a very pleasant day. Is it not? I enjoy my plastic shirt sincerely. I enjoy my space suit truly. I purchase my leather pumpkin truly. I enjoy my leather skirt in real life. The plastics are amazing clothing pieces. I admire my plastic shirt sincerely.</div>
            </div>
            );
};

//Get app root
const container = document.querySelector("#root");
const root = createRoot(container);

root.render(<NuMuseumApp />)