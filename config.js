var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoienVja2VyY28iLCJhIjoiY2tiOXdkMGV6MDAzZDJxbWR3aGlwbGdxaSJ9.mry03UEb-u_NYiS2MT3t7g',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: '5 San Antonio Mexican restaurants with great enchiladas to comfort you in these coronavirus times',
    // subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By Mike Sutter',
    footer: 'Mike Sutter is a food and drink reporter and restaurant critic in the San Antonio and Bexar County area. To read more from Mike, become a subscriber. msutter@express-news.net | Twitter: @fedmanwalking | Instagram: @fedmanwalking <br> Design by Ryan Serpico.',
    chapters: [
        {
            id: 'blanco',
            title: 'Blanco Cafe',
            image: 'images/blanco.jpg',
            description: 'Blanco Cafe’s cheese enchiladas are the Tex-Mex template: red corn tortillas, processed cheese in radioactive shades of yellow, chile con carne with a warm mahogany glow. Nothing fancy, just a couple of them served hot with rice, refried beans, a crispy taco and handmade flour tortillas for $8.29. Blanco’s had more than <br> <hr> 45 years to get it right. And it’s right on. 1720 Blanco Road, dine-in and takeout, 210-732-6480, Facebook: @BlancoCafeSA.',
            location: {
                center: [-98.50754, 29.46211],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'jacala',
            title: 'Jacala Mexican Restaurant',
            image: '/Users/rserpico/Downloads/storytelling-master/src/vanilla-js/images/jacala.jpg',
            description: 'When this 1949 Tex-Mex standard-bearer came on the real estate market a few weeks ago, the regulars panicked, a staffer told me. For now, everything’s staying the same, or as close to the same as COVID-19 will allow. Disposable menus, disposable tablecloths, disposable paper salsa boats. <br> <hr> What’s indisposable are enchiladas draped in rich chili gravy with a blanket of melted cheese, finished in the broiler to create enchilada alchemy. During lunch from 11 a.m. to 3 p.m. Monday through Friday, two enchiladas with rice, beans, flour tortillas, iced tea and one of the city’s best puffy tacos costs just $8.99. 606 West Ave., dine-in and takeout, 210-732-5222, jacala.com.',
            location: {
                center: [-98.52577, 29.46818],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'tlahco',
            title: 'Tlahco Mexican Kitchen',
            image: '/Users/rserpico/Downloads/storytelling-master/src/vanilla-js/images/tlahco.jpg',
            description: 'Tlahco hit the ground running in September as one of the city’s best Mexican restaurants. Even in the turmoil since then, it’s found a balance between Mexican and Tex-Mex with cheese enchiladas both unexpected and familiar. <br> <hr> A terra cotta plate of enchiladas rojas ($9) starts with the high-gloss melt of Oaxaca cheese then finishes with warm red salsa and fried potatoes. For something more intriguing, try enmoladas ($9), rolled corn tortillas filled with queso fresco in a cloak of dark mole both smoky and sweet. 6702 San Pedro Ave., dine-in and takeout, 210-455-0135, tlahcokitchen.com.',
            location: {
                center: [-98.49869, 29.50061],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'manhattan',
            title: 'Mexican Manhattan',
            image: '/Users/rserpico/Downloads/storytelling-master/src/vanilla-js/images/manhattan.jpg',
            description: 'From the street side, Mexican Manhattan looks like a beat-down cafe, its old neon flickering against a more modern skyline. On the River Walk side, it’s a shaded second-story veranda soaking in the sights and sounds of the movable fiesta below, however muted that party may be right now. <br> <hr> This is boilerplate Tex-Mex at tourist prices, but it’s fun and reliable, with a Manhattan Dinner ($14.15) bringing gooey cheese enchiladas in shiny brown gravy with a supporting cast of refried beans, a plain guacamole salad, fresh flour tortillas and Spanish rice covered in diner-style chili. 110 Soledad St., dine-in and takeout, 210-223-3913, mexicanmanhattan.com.',
            location: {
                center: [-98.49271, 29.42534],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'barrios',
            title: 'Los Barrios Mexican Restaurant',
            image: '/Users/rserpico/Downloads/storytelling-master/src/vanilla-js/images/barrios.jpg',
            description: 'Los Barrios knows how to take care of its fans. The abbreviated menu doesn’t mention its celebrated enchilada variety plate. But they’ll make it for you anyway, starting with a classic Tex-Mex cheese enchilada in chili gravy, then rotating through a wagon wheel of enchiladas with tangy verde sauce, smoky mole poblano, sweet ranchera sauce and roasted red pepper sauce ($16.49). <br> <hr> In the little mercado up front, pick up a flashy Mexican embroidery face mask for $10. 4223 Blanco Road, dine-in and takeout, 210-732-6017, losbarriosrestaurant.com.',
            location: {
                center: [-98.50823, 29.48587],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
