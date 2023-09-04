import CatalogItem from "./catalogItems/CatalogItem";

const Catalog = (props) => {

    const { games } = props

    return (
        <section id="catalog-page">
            


            {games.length > 0
                ? <h1>All Games</h1> 
                : <h3 className="no-articles">No articles yet</h3>
            }
            {games.map(x => <CatalogItem game={x} />)}

        </section>
    );
}

export default Catalog;