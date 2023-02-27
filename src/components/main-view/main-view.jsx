import {useState} from 'react';
const MainView = function () {
    const [items, setItems] = useState([{"_id":"63f1a2dd0f6f179c878ec1cf","itemId":"1440001","title":"Architectural Photography Collection One","artist":{"_id":"63f199a40f6f179c878ec1a6","artistName":"ClassicalFilm","artistBiography":"ClassicalFilm started making films about architecture in a large urban area over a decade ago. ClassicalFilm works integrate photography and/or videos with music to create exciting virtual journeys to marvellous destinations.","artistStart":"2012","artistMedium":["Film"]},"exhibit":"Photography Films","primaryImage":"https://correcthorsebatterystaple.onrender.com/1440001.jpg","links":[],"objectName":"Photography Film","objectDate":"2022","medium":"Film","dimensions":[],"description":"This film includes views of architecture and architectural details at a large university.","department":{"_id":"63f19d040f6f179c878ec1be","deptTitle":"Film","deptDescription":"NuMuseum's Film Department (FD) maintains a digital collection of recorded, photographical and animated films from the 21st century. All films in the collection are the property of NuMuseum.","deptId":"4"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a7900f6f179c878ec1e6","itemId":"1250011","title":"Museum No 238","artist":{"_id":"63f199eb0f6f179c878ec1aa","artistName":"Solid Architecture","artistBiography":"Solid Architecture began designing monumental structures including museums and shops in early 2022. The first significant work by Solid Architecture was a design for a natural history museum made in February of 2022: Museum No 238.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"Monumental Structures","primaryImage":"https://correcthorsebatterystaple.onrender.com/1250011.png","links":[],"objectName":"Building Model","objectDate":"2022","medium":"Digital","dimensions":[],"description":"This is a plan for the exterior of a museum building. The architectural style is inspired by classical architecture but modernised to create a more striking effect. A monumental dome in the middle of the museum is covered internally with a painting.","department":{"_id":"63f19d070f6f179c878ec1bf","deptTitle":"Architecture","deptDescription":"NuMuseum's Architecture Department (AD) maintains a digital collection of architectural concepts and models. The items in the collection are stored mainly in the 3mf file format which allows them to be visited and photographed virtually at any time by museum officials.","deptId":"5"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a4160f6f179c878ec1d4","itemId":"1440011","title":"Architectural Photography Collection Two","artist":{"_id":"63f199a40f6f179c878ec1a6","artistName":"ClassicalFilm","artistBiography":"ClassicalFilm started making films about architecture in a large urban area over a decade ago. ClassicalFilm works integrate photography and/or videos with music to create exciting virtual journeys to marvellous destinations.","artistStart":"2012","artistMedium":["Film"]},"exhibit":"Photography Films","primaryImage":"https://correcthorsebatterystaple.onrender.com/1440011.jpg","links":[],"objectName":"Photography Film","objectDate":"2022","medium":"Film","dimensions":[],"description":"This film includes views of architecture and architectural details at a small university.","department":{"_id":"63f19d040f6f179c878ec1be","deptTitle":"Film","deptDescription":"NuMuseum's Film Department (FD) maintains a digital collection of recorded, photographical and animated films from the 21st century. All films in the collection are the property of NuMuseum.","deptId":"4"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a1450f6f179c878ec1ca","itemId":"1340001","title":"PVC Doric Column Factory","artist":{"_id":"63f199b80f6f179c878ec1a8","artistName":"PVC Doric Duck","artistBiography":"The PVC Doric Duck is a professional animator who admires Doric columns and decided to make a factory dedicated to the manufacture of PVC Doric Columns. The animations of PVC Doric Duck are defined by their use of bright colours, music and simple geometrical shapes like ellipses and rectangles.","artistStart":"2021","artistMedium":["Film"]},"exhibit":"Simpl Animation","primaryImage":"https://correcthorsebatterystaple.onrender.com/1340001.jpg","links":[],"objectName":"Animated Film","objectDate":"2022","medium":"Film","dimensions":[],"description":"A factory makes PVC doric columns which are then used to construct a house in a short animated film.","department":{"_id":"63f19d040f6f179c878ec1be","deptTitle":"Film","deptDescription":"NuMuseum's Film Department (FD) maintains a digital collection of recorded, photographical and animated films from the 21st century. All films in the collection are the property of NuMuseum.","deptId":"4"},"isPublicDomain":false,"isFeatured":true},{"_id":"63f1a8170f6f179c878ec1e8","itemId":"1250021","title":"Flute No 1618","artist":{"_id":"63f199eb0f6f179c878ec1aa","artistName":"Solid Architecture","artistBiography":"Solid Architecture began designing monumental structures including museums and shops in early 2022. The first significant work by Solid Architecture was a design for a natural history museum made in February of 2022: Museum No 238.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"Monumental Structures","primaryImage":"https://correcthorsebatterystaple.onrender.com/1250021.png","links":[],"objectName":"Building Model","objectDate":"2022","medium":"Digital","dimensions":[],"description":"This building's design features triangular forms and pyramid-shaped entrance structures. Its red roof was inspired by pointed gothic arches.","department":{"_id":"63f19d070f6f179c878ec1bf","deptTitle":"Architecture","deptDescription":"NuMuseum's Architecture Department (AD) maintains a digital collection of architectural concepts and models. The items in the collection are stored mainly in the 3mf file format which allows them to be visited and photographed virtually at any time by museum officials.","deptId":"5"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a8670f6f179c878ec1ea","itemId":"1250031","title":"Lute No 2414","artist":{"_id":"63f199eb0f6f179c878ec1aa","artistName":"Solid Architecture","artistBiography":"Solid Architecture began designing monumental structures including museums and shops in early 2022. The first significant work by Solid Architecture was a design for a natural history museum made in February of 2022: Museum No 238.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"Monumental Structures","primaryImage":"https://correcthorsebatterystaple.onrender.com/1250031.png","links":[],"objectName":"Building Model","objectDate":"2022","medium":"Digital","dimensions":[],"description":"Lute is inspired by the geometrical characteristics of octagons, rectangles and circles. It features miniature residential towers on the setback and a sculptural roof resembling a pomegranate.","department":{"_id":"63f19d070f6f179c878ec1bf","deptTitle":"Architecture","deptDescription":"NuMuseum's Architecture Department (AD) maintains a digital collection of architectural concepts and models. The items in the collection are stored mainly in the 3mf file format which allows them to be visited and photographed virtually at any time by museum officials.","deptId":"5"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a9960f6f179c878ec1f3","itemId":"1160011","title":"The Complement","artist":{"_id":"63f199dd0f6f179c878ec1a9","artistName":"Quik the Artist","artistBiography":"Quik the Artist is a duck who thinks and draws in a two dimensional way. Quik the Artist resides in the dome of a tall and historical hotel building.","artistStart":"2020","artistMedium":["Painting","Digital"]},"exhibit":"Simpl Forms","primaryImage":"https://correcthorsebatterystaple.onrender.com/1160011.png","links":[],"objectName":"Virtual Painting (B&W)","objectDate":"2021","medium":"Digital","dimensions":[],"description":"Two artistic forms complement and connect to each other in this black and white virtual painting.","department":{"_id":"63f19d0d0f6f179c878ec1c0","deptTitle":"Virtual Painting","deptDescription":"NuMuseum's Virtual Painting Department (VPD) is responsible for the digital collection and storage of digital two-dimensional artworks. Many of the the most significant works in the VPD are stored in the SVG format. Each of the virtual paintings is available in PNG and/or JPEG image format. Additions to the collection are made based on their quality and impact. All virtual paintings are the property of NuMuseum.","deptId":"6"},"isPublicDomain":false,"isFeatured":true},{"_id":"63f1a9310f6f179c878ec1ef","itemId":"1160001","title":"North + East Waves","artist":{"_id":"63f199dd0f6f179c878ec1a9","artistName":"Quik the Artist","artistBiography":"Quik the Artist is a duck who thinks and draws in a two dimensional way. Quik the Artist resides in the dome of a tall and historical hotel building.","artistStart":"2020","artistMedium":["Painting","Digital"]},"exhibit":"Simpl Forms","primaryImage":"https://correcthorsebatterystaple.onrender.com/1160001.png","links":[],"objectName":"Virtual Painting (B&W)","objectDate":"2021","medium":"Digital","dimensions":[],"description":"This black and white wave-inspired virtual painting is intended to make a strong visual impact.","department":{"_id":"63f19d0d0f6f179c878ec1c0","deptTitle":"Virtual Painting","deptDescription":"NuMuseum's Virtual Painting Department (VPD) is responsible for the digital collection and storage of digital two-dimensional artworks. Many of the the most significant works in the VPD are stored in the SVG format. Each of the virtual paintings is available in PNG and/or JPEG image format. Additions to the collection are made based on their quality and impact. All virtual paintings are the property of NuMuseum.","deptId":"6"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a9f10f6f179c878ec1f5","itemId":"1160021","title":"CycleMap","artist":{"_id":"63f199dd0f6f179c878ec1a9","artistName":"Quik the Artist","artistBiography":"Quik the Artist is a duck who thinks and draws in a two dimensional way. Quik the Artist resides in the dome of a tall and historical hotel building.","artistStart":"2020","artistMedium":["Painting","Digital"]},"exhibit":"Simpl Forms","primaryImage":"https://correcthorsebatterystaple.onrender.com/1160021.png","links":[],"objectName":"Virtual Painting (B&W)","objectDate":"2021","medium":"Digital","dimensions":[],"description":"Black lines inspired by public transport maps travel across the plain white background of this virtual painting.","department":{"_id":"63f19d0d0f6f179c878ec1c0","deptTitle":"Virtual Painting","deptDescription":"NuMuseum's Virtual Painting Department (VPD) is responsible for the digital collection and storage of digital two-dimensional artworks. Many of the the most significant works in the VPD are stored in the SVG format. Each of the virtual paintings is available in PNG and/or JPEG image format. Additions to the collection are made based on their quality and impact. All virtual paintings are the property of NuMuseum.","deptId":"6"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a1990f6f179c878ec1cb","itemId":"1340011","title":"Duck's Trip to School","artist":{"_id":"63f199b80f6f179c878ec1a8","artistName":"PVC Doric Duck","artistBiography":"The PVC Doric Duck is a professional animator who admires Doric columns and decided to make a factory dedicated to the manufacture of PVC Doric Columns. The animations of PVC Doric Duck are defined by their use of bright colours, music and simple geometrical shapes like ellipses and rectangles.","artistStart":"2021","artistMedium":["Film"]},"exhibit":"Simpl Animation","primaryImage":"https://correcthorsebatterystaple.onrender.com/1340011.jpg","links":[],"objectName":"Animated Film","objectDate":"2021","medium":"Film","dimensions":[],"description":"A duck takes a trip to school and makes several funny mistakes on the way in this short animated film.","department":{"_id":"63f19d040f6f179c878ec1be","deptTitle":"Film","deptDescription":"NuMuseum's Film Department (FD) maintains a digital collection of recorded, photographical and animated films from the 21st century. All films in the collection are the property of NuMuseum.","deptId":"4"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a6c60f6f179c878ec1e0","itemId":"1250001","title":"Vibration No 450","artist":{"_id":"63f199eb0f6f179c878ec1aa","artistName":"Solid Architecture","artistBiography":"Solid Architecture began designing monumental structures including museums and shops in early 2022. The first significant work by Solid Architecture was a design for a natural history museum made in February of 2022: Museum No 238.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"Monumental Structures","primaryImage":"https://correcthorsebatterystaple.onrender.com/1250001.png","links":[],"objectName":"Building Model","objectDate":"2022","medium":"Digital","dimensions":[],"description":"This virtual building is a monument to celebrate the concept of vibration. The juxtaposition of limestone and glass captures the monument's essence: a modern interpretation of the ancient dome. Repetitive art deco-inspired details represent the crests of waves in vibrations.","department":{"_id":"63f19d070f6f179c878ec1bf","deptTitle":"Architecture","deptDescription":"NuMuseum's Architecture Department (AD) maintains a digital collection of architectural concepts and models. The items in the collection are stored mainly in the 3mf file format which allows them to be visited and photographed virtually at any time by museum officials.","deptId":"5"},"isPublicDomain":false,"isFeatured":true},{"_id":"63f1aac00f6f179c878ec1fa","itemId":"1270001","title":"Bird in Flight","artist":{"_id":"63f199fd0f6f179c878ec1ab","artistName":"Standard PVC","artistBiography":"Standard PVC makes virtual abstact sculptures inspired by architectural forms. They are designed to look like they are made from different materials (eg PVC and bronze). There are plans to manufacture the works of Standard PVC based on their computer designs.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"NuuPVC++","primaryImage":"https://correcthorsebatterystaple.onrender.com/1270001.png","links":[],"objectName":"Virtual Sculpture (PVC)","objectDate":"2022","medium":"Digital","dimensions":[],"description":"This virtual PVC sculpture is inspired by the anatomy of a column. It consists of an undulating shaft which decreases in diameter at the top to form a cone-like capital.","department":{"_id":"63f19d110f6f179c878ec1c1","deptTitle":"Virtual Sculpture","deptDescription":"NuMuseum's Virtual Sculpture Department (VSD) is responsible for the digital collection and storage of digital three-dimensional artworks. All works in the VPD are stored in the 3MF format. Each of the virtual sculptures is depicted in PNG and/or JPEG image format. Officials at the department are responsible for rendering and photographing the virtual sculptures with digital technology. Additions to the collection are made based on their quality and impact. All paintings are the property of NuMuseum.","deptId":"7"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1abf30f6f179c878ec203","itemId":"3520001","title":"Nullem's Place","artist":{"_id":"63f199b10f6f179c878ec1a7","artistName":"Minobbiane","artistBiography":"Minobbiane is a rabbit who likes to write stories and gets inpiration from the city in which it lives.","artistStart":"Circa 2009","artistMedium":["Written"]},"exhibit":"","primaryImage":"https://correcthorsebatterystaple.onrender.com/3520001.png","links":[],"objectName":"Book","objectDate":"2019","medium":"Written","dimensions":[],"description":"A duck named Nullem isolates itself in a windowless building shaped like a concrete block located in an uninhabited desert. After years of complete isolation, a bell's chime awakens Nullem in the middle of the night. Nullem is no longer alone.","department":{"_id":"63f19cfc0f6f179c878ec1bc","deptTitle":"Literature","deptDescription":"NuMuseum's Literature Department (LD) maintains a collection of written work including stories and poems. All items in the LD are from the 21st century. Officials at the LD identify works to add to the NuMuseum collection by investigating their contents. The items in the LD are in a mix of digital and hand-written formats. It is not possible to see hand-written items in person because they are stored in the NuMuseum private collection.","deptId":"2"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1ab220f6f179c878ec1fe","itemId":"1270011","title":"Monkey in PVC Pipe","artist":{"_id":"63f199fd0f6f179c878ec1ab","artistName":"Standard PVC","artistBiography":"Standard PVC makes virtual abstact sculptures inspired by architectural forms. They are designed to look like they are made from different materials (eg PVC and bronze). There are plans to manufacture the works of Standard PVC based on their computer designs.","artistStart":"2022","artistMedium":["Digital"]},"exhibit":"NuuPVC++","primaryImage":"https://correcthorsebatterystaple.onrender.com/1270011.png","links":[],"objectName":"Virtual Sculpture (PVC)","objectDate":"2022","medium":"Digital","dimensions":[],"description":"The main highlight of the museum's virtual sculpture collection--Monkey in PVC Pipe--is an abstract sculpture designed to encourage viewers to think. Its title was inspired by the artist's sight of a monkey in a PVC pipe in an educational film. The title is connected to nothing about the sculpture other than the fact that it is a 'virtual PVC' sculpture.","department":{"_id":"63f19d110f6f179c878ec1c1","deptTitle":"Virtual Sculpture","deptDescription":"NuMuseum's Virtual Sculpture Department (VSD) is responsible for the digital collection and storage of digital three-dimensional artworks. All works in the VPD are stored in the 3MF format. Each of the virtual sculptures is depicted in PNG and/or JPEG image format. Officials at the department are responsible for rendering and photographing the virtual sculptures with digital technology. Additions to the collection are made based on their quality and impact. All paintings are the property of NuMuseum.","deptId":"7"},"isPublicDomain":false,"isFeatured":true},{"_id":"63f1ac430f6f179c878ec205","itemId":"3520011","title":"Searching and Viewing the City","artist":{"_id":"63f199b10f6f179c878ec1a7","artistName":"Minobbiane","artistBiography":"Minobbiane is a rabbit who likes to write stories and gets inpiration from the city in which it lives.","artistStart":"Circa 2009","artistMedium":["Written"]},"exhibit":"","primaryImage":"https://correcthorsebatterystaple.onrender.com/3520011.png","links":[],"objectName":"Book","objectDate":"2020","medium":"Written","dimensions":[],"description":"Pots--a gullible tourist elephant--wins a trip to New Duck (a large city). Residents of New Duck take advantage of Pots' gullible personality.","department":{"_id":"63f19cfc0f6f179c878ec1bc","deptTitle":"Literature","deptDescription":"NuMuseum's Literature Department (LD) maintains a collection of written work including stories and poems. All items in the LD are from the 21st century. Officials at the LD identify works to add to the NuMuseum collection by investigating their contents. The items in the LD are in a mix of digital and hand-written formats. It is not possible to see hand-written items in person because they are stored in the NuMuseum private collection.","deptId":"2"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1ac8c0f6f179c878ec207","itemId":"3520021","title":"ChimeSounds","artist":{"_id":"63f199b10f6f179c878ec1a7","artistName":"Minobbiane","artistBiography":"Minobbiane is a rabbit who likes to write stories and gets inpiration from the city in which it lives.","artistStart":"Circa 2009","artistMedium":["Written"]},"exhibit":"","primaryImage":"https://correcthorsebatterystaple.onrender.com/3520021.png","links":[],"objectName":"Poem","objectDate":"2020","medium":"Written","dimensions":[],"description":"This poem written in an unconventional format was inspired by the sound and art of the Delacorte Clock.","department":{"_id":"63f19cfc0f6f179c878ec1bc","deptTitle":"Literature","deptDescription":"NuMuseum's Literature Department (LD) maintains a collection of written work including stories and poems. All items in the LD are from the 21st century. Officials at the LD identify works to add to the NuMuseum collection by investigating their contents. The items in the LD are in a mix of digital and hand-written formats. It is not possible to see hand-written items in person because they are stored in the NuMuseum private collection.","deptId":"2"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a5dd0f6f179c878ec1db","itemId":"2100011","title":"Delacorte Clock Simplified","artist":{"_id":"63f199dd0f6f179c878ec1a9","artistName":"Quik the Artist","artistBiography":"Quik the Artist is a duck who thinks and draws in a two dimensional way. Quik the Artist resides in the dome of a tall and historical hotel building.","artistStart":"2020","artistMedium":["Painting","Digital"]},"exhibit":"","primaryImage":"https://correcthorsebatterystaple.onrender.com/2100011.png","links":[],"objectName":"Painting (B&W)","objectDate":"2023","medium":"Painting","dimensions":[20,30],"description":"This is a simple black and white representation of the Delacorte Clock.","department":{"_id":"63f19cf60f6f179c878ec1ba","deptTitle":"Painting","deptDescription":"NuMuseum's Painting Department (PD) is focused on physical paintings, drawings, illustrations and other forms of two-dimensional art made in the 21st century. Officials at the PD store, investigate, maintain and write about the works in the collection. It is currently not possible to see any items from the PD in person because they are stored in the NuMuseum private collection.","deptId":"0"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1ada30f6f179c878ec210","itemId":"2230011","title":"The Leathers","artist":{"_id":"63f1997d0f6f179c878ec1a5","artistName":"Anonymous","artistBiography":"Anonymous artists/designers designed several items in the NuMuseum--most notably those in the clothing collection.","artistStart":"ND","artistMedium":["Multiple"]},"exhibit":"Contemporary Clothing","primaryImage":"https://correcthorsebatterystaple.onrender.com/2230011.png","links":[],"objectName":"Pants","objectDate":"2022","medium":"Leather","dimensions":[110,30],"description":"These contemporary pants make a powerful--almost jarring--impact.","department":{"_id":"63f19cff0f6f179c878ec1bd","deptTitle":"Clothing","deptDescription":"NuMuseum's Clothing Department (CD) maintains a physical collection of rare, artistic and notable articles of clothing. Articles in the collection include dresses, pants, shirts and skirts. Officials at the CD do their best to ensure that the often rare or unconventional materials from which the collection items are made are not dirtied, damaged or torn. All items are in a private collection and used by the museum founder when travelling. Items may exit the collection occasionally because of reasons including fitting the museum founder poorly or being banned (eg for toxic scents) because of popular vote by museum officials.","deptId":"3"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1ad390f6f179c878ec20e","itemId":"2230001","title":"Rubber Suit (Black)","artist":{"_id":"63f1997d0f6f179c878ec1a5","artistName":"Anonymous","artistBiography":"Anonymous artists/designers designed several items in the NuMuseum--most notably those in the clothing collection.","artistStart":"ND","artistMedium":["Multiple"]},"exhibit":"Contemporary Clothing","primaryImage":"https://correcthorsebatterystaple.onrender.com/2230001.png","links":[],"objectName":"Poem","objectDate":"2022","medium":"Rubber","dimensions":[90,55],"description":"This contemporary piece of artistic clothing is comprised of a shirt connected to pants. Its construction from an unconventional nonporous material--black rubber--increases its visual appeal.","department":{"_id":"63f19cff0f6f179c878ec1bd","deptTitle":"Clothing","deptDescription":"NuMuseum's Clothing Department (CD) maintains a physical collection of rare, artistic and notable articles of clothing. Articles in the collection include dresses, pants, shirts and skirts. Officials at the CD do their best to ensure that the often rare or unconventional materials from which the collection items are made are not dirtied, damaged or torn. All items are in a private collection and used by the museum founder when travelling. Items may exit the collection occasionally because of reasons including fitting the museum founder poorly or being banned (eg for toxic scents) because of popular vote by museum officials.","deptId":"3"},"isPublicDomain":false,"isFeatured":true},{"_id":"63f1ae250f6f179c878ec212","itemId":"2230021","title":"Plastic Silhouettes (Clothing)","artist":{"_id":"63f1997d0f6f179c878ec1a5","artistName":"Anonymous","artistBiography":"Anonymous artists/designers designed several items in the NuMuseum--most notably those in the clothing collection.","artistStart":"ND","artistMedium":["Multiple"]},"exhibit":"Contemporary Clothing","primaryImage":"https://correcthorsebatterystaple.onrender.com/NotInCollection.png","links":[],"objectName":"Pants","objectDate":"2022","medium":"Rubber","dimensions":[110,30],"description":"These beige modern pants were the inspiration of the name of the Plastic Silhouettes exhibit. They are also called the Plastic Pants. The ends of the legs increase in diameter and resemble trumpets.","department":{"_id":"63f19cff0f6f179c878ec1bd","deptTitle":"Clothing","deptDescription":"NuMuseum's Clothing Department (CD) maintains a physical collection of rare, artistic and notable articles of clothing. Articles in the collection include dresses, pants, shirts and skirts. Officials at the CD do their best to ensure that the often rare or unconventional materials from which the collection items are made are not dirtied, damaged or torn. All items are in a private collection and used by the museum founder when travelling. Items may exit the collection occasionally because of reasons including fitting the museum founder poorly or being banned (eg for toxic scents) because of popular vote by museum officials.","deptId":"3"},"isPublicDomain":false,"isFeatured":false},{"_id":"63f1a5330f6f179c878ec1d9","itemId":"2100001","title":"Plastic Silhouettes: The Motion of a Strange Tree","artist":{"_id":"63f199dd0f6f179c878ec1a9","artistName":"Quik the Artist","artistBiography":"Quik the Artist is a duck who thinks and draws in a two dimensional way. Quik the Artist resides in the dome of a tall and historical hotel building.","artistStart":"2020","artistMedium":["Painting","Digital"]},"exhibit":"Plastic Silhouettes","primaryImage":"https://correcthorsebatterystaple.onrender.com/2100001.png","links":[],"objectName":"Painting (B&W)","objectDate":"2023","medium":"Painting","dimensions":[24,14.5],"description":"This abstract artwork depicts the life cycle of an imaginary plastic tree.","department":{"_id":"63f19cf60f6f179c878ec1ba","deptTitle":"Painting","deptDescription":"NuMuseum's Painting Department (PD) is focused on physical paintings, drawings, illustrations and other forms of two-dimensional art made in the 21st century. Officials at the PD store, investigate, maintain and write about the works in the collection. It is currently not possible to see any items from the PD in person because they are stored in the NuMuseum private collection.","deptId":"0"},"isPublicDomain":false,"isFeatured":true}]);
    if (items.length === 0) {
        return <div>ITEM LIST IS BLANK</div>;
    }
    return (
        <div>
            {items.map(function (item) {
                var {primaryImage,title,itemId} = item;
                return (
                        <div key={itemId}>
                            <div><img src={primaryImage} width='150px' /></div>
                            <div>{title}</div>
                        </div>
                        );
            })}
        </div>
            );
};

export default MainView;