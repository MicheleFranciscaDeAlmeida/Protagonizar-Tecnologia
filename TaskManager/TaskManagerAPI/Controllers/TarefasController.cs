using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using TaskManagerAPI.Data;
using TaskManagerAPI.Models;

namespace TaskManagerAPI.Controllers;

public interface ITarefasController
{
    IActionResult Create(Tarefa tarefa);
    IActionResult Get();
    Task<IActionResult> Update(int id, Tarefa tarefa);
}

[ApiController]
[Route("api/[controller]")]
public class TarefasController : ControllerBase, ITarefasController
{
    private readonly AppDbContext _context;

    public TarefasController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_context.Tarefas.ToList());
    }

    [HttpPost]
    public IActionResult Create(Tarefa tarefa)
    {
        _context.Tarefas.Add(tarefa);
        _context.SaveChanges();
        return CreatedAtAction(nameof(Get), new { id = tarefa.Id }, tarefa);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Tarefa tarefa)
    {
        if (id != tarefa.Id)
        {
            return BadRequest();
        }

        _context.Entry(tarefa).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!_context.Tarefas.Any(e => e.Id == id))
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

    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var tarefa = await _context.Tarefas.FindAsync(id);
        if (tarefa == null)
        {
            return NotFound();
        }

        _context.Tarefas.Remove(tarefa);
        await _context.SaveChangesAsync();

        return NoContent();
    }
}