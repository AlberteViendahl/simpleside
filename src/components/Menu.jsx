const Menu = () => {
    return ( 
        <section>
            <nav className="flex gap-8 p-4 bg-lightblue">
                <ul className="bg-background p-2 text-lightblue rounded-15 hover:bg-purple cursor-pointer"><a href="/page.js">Home</a></ul>
                <ul className="bg-background p-2 text-lightblue rounded-15 hover:bg-purple cursor-pointer"><a href="#">Product</a></ul>
            </nav>
        </section>
     );
}
 
export default Menu;