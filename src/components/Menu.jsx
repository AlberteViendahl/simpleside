const Menu = () => {
    return ( 
        <section>
            <nav className="flex gap-8 p-4 ">
                <ul className="bg-lightblue p-2 text-background rounded hover:bg-purple"><a href="/page.js">Home</a></ul>
                <ul className="bg-lightblue p-2 text-background rounded hover:bg-purple"><a href="#">Product</a></ul>
            </nav>
        </section>
     );
}
 
export default Menu;