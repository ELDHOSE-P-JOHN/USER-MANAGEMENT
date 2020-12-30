using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using usermanagementAPI.Models;

namespace usermanagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userdetailsController : ControllerBase
    {
        private readonly userdetailcontext _context;

        public userdetailsController(userdetailcontext context)
        {
            _context = context;
        }

        // GET: api/userdetails
        [HttpGet]
        public async Task<ActionResult<IEnumerable<userdetail>>> Getuserdetails()
        {
            return await _context.userdetails.ToListAsync();
        }

        // GET: api/userdetails/5
        [HttpGet("{id}")]
        public async Task<ActionResult<userdetail>> Getuserdetail(int id)
        {
            var userdetail = await _context.userdetails.FindAsync(id);

            if (userdetail == null)
            {
                return NotFound();
            }

            return userdetail;
        }

        // PUT: api/userdetails/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> Putuserdetail(int id, userdetail userdetail)
        {
            if (id != userdetail.userid)
            {
                return BadRequest();
            }

            _context.Entry(userdetail).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!userdetailExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/userdetails
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<userdetail>> Postuserdetail(userdetail userdetail)
        {
            _context.userdetails.Add(userdetail);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getuserdetail", new { id = userdetail.userid }, userdetail);
        }

        // DELETE: api/userdetails/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> Deleteuserdetail(int id)
        {
            var userdetail = await _context.userdetails.FindAsync(id);
            if (userdetail == null)
            {
                return NotFound();
            }

            _context.userdetails.Remove(userdetail);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool userdetailExists(int id)
        {
            return _context.userdetails.Any(e => e.userid == id);
        }
    }
}
