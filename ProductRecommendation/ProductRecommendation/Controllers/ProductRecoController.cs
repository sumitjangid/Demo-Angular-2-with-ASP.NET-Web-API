using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ProductRecoAccess;

namespace ProductRecommendation.Controllers
{
    public class ProductRecoController : ApiController
    {
        public IEnumerable<ProductRecommender> Get()
        {
            using (ProductRecoEntities entities = new ProductRecoEntities())
            {
                return entities.ProductRecommenders.ToList();
            }
        }

        public ProductRecommender Get(int id)
        {
            using (ProductRecoEntities entities = new ProductRecoEntities())
            {
                return entities.ProductRecommenders.FirstOrDefault(p => p.Id == id);
            }
        }
    }
}
