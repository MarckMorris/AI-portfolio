param(
  [Parameter(Mandatory=$true)][string]$Repo,
  [int]$Port = 8000
)

$ErrorActionPreference = "Stop"
$repoPath = Join-Path (Get-Location) $Repo
if (-not (Test-Path $repoPath)) { throw "Repo not found: $Repo" }
Set-Location $repoPath

# Mata procesos colgados
Get-Process python, uvicorn -ErrorAction SilentlyContinue | Stop-Process -Force

# Crea venv con Python 3.11 explícito
if (Test-Path ".\.venv") { Remove-Item -Recurse -Force .\.venv }
py -3.11 -m venv .venv
.\.venv\Scripts\Activate.ps1

python -V
python -m pip install -U pip
if (Test-Path ".\requirements.txt") { pip install -r requirements.txt } else { pip install fastapi uvicorn }

# Sanity: main existe
if (-not (Test-Path ".\app\main.py")) { throw "Missing app/main.py in $Repo" }

# Arranca usando el python de la venv (evita el 3.13)
python -m uvicorn app.main:app --host 0.0.0.0 --port $Port --reload
