using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DomainModels;
using Logics;
using Logics.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace SovaApi.Controllers
{
    [Route("api/Search")]
    public class SearchController : Controller
    {
      

        public ISearchService searchService;



        public SearchController(ISearchService searchService)
        {
           
 
            this.searchService = searchService;
        }

        [HttpGet("{search}", Name = nameof(GetAllSearchResults))]
        public IActionResult GetAllSearchResults(string search)
        {
            var searches = searchService.GetSearchResult(search);

           
            return Ok(searches);

        }

      



    }
}
