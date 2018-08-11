using DataAccess;
using DomainModels;
using Logics.Interfaces;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Xml.Linq;
using SovaApi.Models;
using Logics;

namespace SovaApi.Controllers
{
    [Route("/api/users")]
    public class UsersController : Controller
    {
        public IUserServices UserServices;

        public IPostService postService;


        public UsersController(IUserServices UserServices, IPostService postService)
        {
            this.UserServices = UserServices;
   
            this.postService = postService;
        }

        [HttpGet]
        public IActionResult GetAllUsers()
        {
            var users = UserServices.GetAllUser().ToList();

            var result = users.Select(x => {
                var userslist = new userListModel { id = x.Id, Name = x.Name, Location = x.Location };
                userslist.LinkUrl = Url.Link(nameof(GetUserById), new { x.Id });
                return userslist;
            });
            return Ok(result);
        }

        [HttpGet("{id}" , Name =nameof(GetUserById))]
        public IActionResult GetUserById(int id)
        {
            var User = UserServices.GetUserById(id).Select(
                x =>
                {

                    var userModel = new UserModel
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Age = x.Age,
                        Location = x.Location,
                        CreationDate = x.CreationDate

                    };
                    return userModel;

                });

            return Ok(User);
        }

       




    }
}
