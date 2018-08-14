using System;
using System.Linq;
using DataAccess;
using Logics;
using Logics.Interfaces;
using Microsoft.AspNetCore.Mvc;
using SovaDataBase;
using SovaApi.Models;

namespace sovafrontednd.Controllers
{
    [Route("api/posts")]
    public class PostController : Controller
    {
        public IPostService postservice;
        public ICommentsService commentsService;

        public PostController(IPostService service, ICommentsService commentsService)
        {
            this.postservice = service;

            this.commentsService = commentsService;
        }

        [HttpGet(Name = nameof(GetAllPosts))]
        public IActionResult GetAllPosts()
        {
            var posts = postservice.GetAllPost().ToList();

            var result = posts.Select(
                    x =>
                    {
                        var postListModel = new PostListModel
                        {
                            Title = x.Title,
                            id = x.Id,
                        };

                        return postListModel;
                    });



            return Ok(result);
        }


        [HttpGet("{id}", Name = nameof(GetPostById))]
        public IActionResult GetPostById(int id)
        {
            var post = postservice.GetPostById(id).Select(
                x =>
                {
                    var postModel = new PostModel
                    {
                        Title = x.Title,
                        Score = x.Score,
                        Body = x.Body,
                        CreationDate = x.CreationDate,
                        CloseDate = x.CloseDate,

                        UserName = x.User.Name,
                        Comments = x.Comments

                    };
                    return postModel;

                });
            return Ok(post);
        }

        [HttpGet("{userid}/posts")]
        public IActionResult GetAllPostForUser(int userid)
        {

            var postForUsers = postservice.GetAllPostForUser(userid)
                 .Select(x =>
                 {

                     var PostListModel = new PostListModel
                     {
                         Title = x.Title,

                     };

                     return PostListModel;

                 });

            return Ok(postForUsers);

        }
    }
}