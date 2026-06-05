$ProgressPreference = 'SilentlyContinue'
$r = Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 60
$outPath = Join-Path $PSScriptRoot '..\..\timesharelink\.tmp-home.html'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText((Resolve-Path -LiteralPath (Split-Path $outPath -Parent)).Path + '\.tmp-home.html', $r.Content, $utf8NoBom)
Write-Output ("Saved {0} bytes" -f $r.Content.Length)
