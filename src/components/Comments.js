const filterSort = (text) => {
    setFilters({ ...filters, sort: text,ratings : null,
        delivery : null, })
 };

 const filterRatings = (text) => {
    setFilters({ ...filters, sort: null,ratings : text,
        delivery : null, })
 }

 const filterDelivery = (text,index) => {
    setFilters({ ...filters, sort: null,ratings : null,
        delivery : text, checked : [...filters.checked , !filters.checked[0]] })
 }

 const sortedData = filters.sort ? filterRestaurants.sort((a,b) => 
 filters.sort === "Cost: Low to High"? a.data?.costForTwo
      - b.data?.costForTwo : b.data?.costForTwo
      - a.data?.costForTwo )
      : filterRestaurants;

const ratingsData = filters.ratings ? filterRestaurants.sort((a,b) => 
b.data?.avgRating - a.data?.avgRating)
     : sortedData;

const filteredData = filters.delivery ? filterRestaurants.sort((a,b) => 
a.data?.deliveryTime - b.data?.deliveryTime)
     : ratingsData;

     <div className="sorting">
        <div className = "length">16 Restaurants</div>
        <div className = "sorting-names">
        <label>
          <input
            type="radio" name = "features"
            onChange={() => filterDelivery("Delivery Time",1)}
          /> Delivery Time
        </label> 
        <label>
          <input
            type="radio" name = "features"
            onChange={() => filterRatings("Ratings")}
          />  Ratings
        </label> 
         <label>
          <input
            type="radio" name = "features"
            onChange={() => filterSort("Cost: Low to High")}
          /> Low to High
        </label>
        <label>
          <input
            type="radio" name = "features"
            onChange={() => filterSort("Cost: High to Low")}
          /> High To Low
        </label>
        </div>
    </div>