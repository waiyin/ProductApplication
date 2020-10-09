using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProductAPI.Model
{
    public class Product
    {
        public int ID { get; set; }
        public string Name { get; set; }
        public string Price { get; set; }
    }

}
