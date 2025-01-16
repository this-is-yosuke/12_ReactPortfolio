export default function Contact() {
    return (
        <div>
            <h1>Portfolio</h1>
            <article>
                An image wrapped in a link? (Think of the footer!) It's just an image, but onHover reveals the
                github link. The title appears only on hover...ok, probably conditional rendering. Looks like the
                link is also conditionally rendered, as opposed to the image being wrapped by an anchor. The demo
                also conditionally renders a github icon, too. I KNOW THE SOLUTION! ONMOUSEOVER AND ONMOUSELEAVE TO
                CHANGE STATE AND RENDER A DIFFERENT ELEMENT!
            </article>
            {/* 6 images that act as links to github repositories */}
            {/* Project 1 has image*/}
            <a href='https://github.com/dmiddleton92/diet-food-tracker-app' target='_blank'>
            <img src='ketoFoods.jpg' className='logo' alt='Link to my github page'></img>
            </a>
            {/* README has image*/}
            <a href='https://github.com/this-is-yosuke/readme-builder' target='_blank'>
            <img src='documents.png' className='logo' alt='Link to my github page'></img>
            </a>
            {/* MyFancyVehicle has image*/}
            <a href='https://github.com/this-is-yosuke/08_MyFancyVehicle' target='_blank'>
            <img src='truck.jpg' className='logo' alt='Link to my github page'></img>
            </a>
            {/* Rainshadow has image*/}
            <a href='https://github.com/this-is-yosuke/09_Rainshadow' target='_blank'>
            <img src='weather.jpg' className='logo' alt='Link to my github page'></img>
            </a>
            {/* REDVantage has image*/}
            <a href='https://github.com/this-is-yosuke/10_REDVantage' target='_blank'>
            <img src='BusinessManagement.jpg' className='logo' alt='Link to my github page'></img>
            </a>
            {/* Project 2 has image*/}
            <a href='https://github.com/this-is-yosuke/LockedOut' target='_blank'>
            <img src='escapeRoom.jpg' className='logo' alt='Link to my github page'></img>
            </a>


        </div>
    )
}