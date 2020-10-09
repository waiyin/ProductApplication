using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProductAPI.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ProductAPI.Controllers
{
    [Route("v1/[controller]")]
    public class ProductController : Controller
    {
        readonly ProductContext context;
        public ProductController(ProductContext context)
        {
            this.context = context;
        }
        [HttpGet]
        public IEnumerable<Product> GetAllProducts()
        {
            return context.Products;
        }
        
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct(int id, [FromBody]Product product)
        {
            if (id != product.ID)
            {
                return BadRequest();
            }
            context.Entry(product).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(product);
        }

        [HttpGet("{id}")]
        public Product GetProduct([FromRoute]int id)
        {
            return context.Products.FirstOrDefault(q => q.ID == id);
        }



        [HttpPost]
        public async Task<IActionResult> AddNewProduct([FromBody]Product product)
        {
            context.Products.Add(product);
            await context.SaveChangesAsync();
            return Ok(product);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var product = context.Products.SingleOrDefault(q => q.ID == id);
            context.Entry(product).State = EntityState.Deleted;
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}