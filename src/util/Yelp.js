const apiKey = 'm7_iJCDgWrmOHKTDN1WIypcopDeBpYm52QvzXWxV26Yk6Gx6BjtNFoTXq9pfO1P4Fv-aQuM-49LZJi6CZGfz0lX4vdbomRlI75fjo-8rKa65OoeRBut20yZDcTsfWnYx';

const Yelp = {
  search(term, location, sortBy) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
        return response.json()
      }).then(jsonResponse => {
        if (jsonResponse.businesses) {
          return jsonResponse.businesses.map(business => {
            return {
              id: business.id,
              imageSrc: business.image_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories.title,
              rating: business.rating,
              reviewCount: business.review_count
            }
          });
        }
      });
  }
};

export default Yelp;