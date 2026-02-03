var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        "AllowAngular",
        policy => policy.WithOrigins("https://localhost:4200").AllowAnyMethod().AllowAnyHeader()
    );
});

var app = builder.Build();

app.UseCors("AllowAngular");

app.MapGet("/", () => "API do Flint rodando");

app.Run();
