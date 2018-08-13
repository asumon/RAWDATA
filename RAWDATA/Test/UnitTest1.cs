using System.Linq;
using Xunit;
using SovaDataBase;
using System;

namespace Test
{

    public class UnitTest1
    {
        
       
        [Fact]
        public void CheckPostsNumber()
        {

            var postService = new PostService();
            var checkPost = GetAllPost();
            Assert.Equal(2237, checkPost.Count());

        }

        private object GetAllPost()
        {
            throw new NotImplementedException();
        }

        [Fact]
        public void CheckUserNameById()
        {
            
            var userService = new UserServices();
            var UserById = userService.GetUserById(1).ToList();
            Assert.Equal("Jeff Atwood", UserById[0].Name);
        }
        [Fact]
        public void CheckUserPost()
        {

            var PostService = new PostService();
            var PostById = PostService.GetPostById(19).ToList();
            Assert.Equal(164, PostById[0].Score);

        }


        [Fact]
        public void KeySearchMustReturnSearchResults()
        {

            var ss = new SearchService();
            var result = ss.GetSearchResult("what is abs");
            Assert.Single(result);

        }

    }
}
