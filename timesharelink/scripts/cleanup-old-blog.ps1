$base = Join-Path $PSScriptRoot '..\lib\blog-topics'
$cmp  = Join-Path $PSScriptRoot '..\components\BlogTopicSection.jsx'

if (Test-Path -LiteralPath $base) {
    Remove-Item -LiteralPath $base -Recurse -Force
    Write-Output ("Removed dir: {0}" -f $base)
} else {
    Write-Output ("Dir not present: {0}" -f $base)
}

if (Test-Path -LiteralPath $cmp) {
    Remove-Item -LiteralPath $cmp -Force
    Write-Output ("Removed file: {0}" -f $cmp)
} else {
    Write-Output ("File not present: {0}" -f $cmp)
}
