$base = Resolve-Path -LiteralPath (Join-Path $PSScriptRoot '..')
Get-ChildItem -LiteralPath $base.Path -Filter '.tmp-*.html' -Force -ErrorAction SilentlyContinue | ForEach-Object {
    Remove-Item -LiteralPath $_.FullName -Force
    Write-Output ("Removed: {0}" -f $_.Name)
}
