$ProgressPreference = 'SilentlyContinue'
$urls = @(
    @{ Tag='blog-index'; Path='.tmp-blog-index.html'; Url='http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8' },
    @{ Tag='post-01';    Path='.tmp-blog-post1.html'; Url='http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8/%EA%B2%80%EC%A6%9D%EB%90%9C-%EC%A3%BC%EC%86%8C%EB%AA%A8%EC%9D%8C-vs-%EC%9D%BC%EB%B0%98' }
)
foreach ($u in $urls) {
    $r = Invoke-WebRequest -Uri $u.Url -UseBasicParsing -TimeoutSec 60
    $out = Join-Path $PSScriptRoot ("..\" + $u.Path)
    $utf8 = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText((Resolve-Path -LiteralPath (Split-Path $out -Parent)).Path + '\' + (Split-Path $out -Leaf), $r.Content, $utf8)
    Write-Output ("[{0}] {1} bytes -> {2}" -f $u.Tag, $r.Content.Length, $u.Path)
}

$indexPath = Join-Path $PSScriptRoot '..\.tmp-blog-index.html'
$postPath  = Join-Path $PSScriptRoot '..\.tmp-blog-post1.html'
$idx = Get-Content -LiteralPath $indexPath -Raw -Encoding UTF8
$pst = Get-Content -LiteralPath $postPath  -Raw -Encoding UTF8

$blogType = '"@type":"Blog"'
$bp       = '"@type":"BlogPosting"'
$bc       = '"@type":"BreadcrumbList"'
$h1Index  = [Text.Encoding]::UTF8.GetString([byte[]]@(0xEC,0xA3,0xBC,0xEC,0x86,0x8C,0xEB,0xAA,0xA8,0xEC,0x9D,0x8C,0xC2,0xB7,0xEB,0xA7,0x81,0xED,0x81,0xAC,0xEB,0xAA,0xA8,0xEC,0x9D,0x8C,0x20,0xEC,0x8B,0xAC,0xEC,0xB8,0xB5,0x20,0xEA,0xB0,0x80,0xEC,0x9D,0xB4,0xEB,0x93,0x9C))
$h1Post   = [Text.Encoding]::UTF8.GetString([byte[]]@(0xEA,0xB2,0x80,0xEC,0xA6,0x9D,0xEB,0x90,0x9C,0x20,0xEC,0xA3,0xBC,0xEC,0x86,0x8C,0xEB,0xAA,0xA8,0xEC,0x9D,0x8C))  # 검증된 주소모음

Write-Output ""
Write-Output ("INDEX Blog schema: {0}" -f ($(if ($idx.Contains($blogType)) {'FOUND'} else {'MISS'})))
Write-Output ("INDEX BreadcrumbList: {0}" -f ($(if ($idx.Contains($bc)) {'FOUND'} else {'MISS'})))
Write-Output ("INDEX BlogPosting items: {0}" -f ([regex]::Matches($idx, [regex]::Escape($bp)).Count))
Write-Output ("INDEX H1 keyword: {0}" -f ($(if ($idx.Contains($h1Index)) {'FOUND'} else {'MISS'})))
Write-Output ("POST  BlogPosting schema: {0}" -f ($(if ($pst.Contains($bp)) {'FOUND'} else {'MISS'})))
Write-Output ("POST  BreadcrumbList (3 levels): {0}" -f ($(if ($pst.Contains($bc)) {'FOUND'} else {'MISS'})))
Write-Output ("POST  H1 contains 검증된 주소모음: {0}" -f ($(if ($pst.Contains($h1Post)) {'FOUND'} else {'MISS'})))
