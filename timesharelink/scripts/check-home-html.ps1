$ProgressPreference = 'SilentlyContinue'
$path = Join-Path $PSScriptRoot '..\.tmp-home.html'
$html = Get-Content -LiteralPath $path -Raw -Encoding UTF8

# All Korean needles via UTF-8 hex bytes (script stays ASCII-only)
$needles = @(
    @{ Name='title kr-brand (timesharelink in Hangul)'; Bytes=@(0xED,0x83,0x80,0xEC,0x9E,0x84,0xEC,0x89,0x90,0xEC,0x96,0xB4,0xEB,0xA7,0x81,0xED,0x81,0xAC) },
    @{ Name='H1 1wi geomjeung peullaetpom';             Bytes=@(0x31,0xEC,0x9C,0x84,0x20,0xEA,0xB2,0x80,0xEC,0xA6,0x9D,0x20,0xED,0x94,0x8C,0xEB,0x9E,0xAB,0xED,0x8F,0xBC) },
    @{ Name='alternateName';                            Bytes=[Text.Encoding]::UTF8.GetBytes('alternateName') },
    @{ Name='sameAs';                                   Bytes=[Text.Encoding]::UTF8.GetBytes('sameAs') },
    @{ Name='Topic7 TOP 20';                            Bytes=[Text.Encoding]::UTF8.GetBytes('TOP 20') },
    @{ Name='BreadcrumbList (should be MISS on home)';  Bytes=[Text.Encoding]::UTF8.GetBytes('BreadcrumbList') },
    @{ Name='topic id top-20-ranking-2026';             Bytes=[Text.Encoding]::UTF8.GetBytes('top-20-ranking-2026') },
    @{ Name='topic id brand-comparison-big3';           Bytes=[Text.Encoding]::UTF8.GetBytes('brand-comparison-big3') },
    @{ Name='topic id mobile-fast-access';              Bytes=[Text.Encoding]::UTF8.GetBytes('mobile-fast-access') },
    @{ Name='topic id bookmark-vs-collection';          Bytes=[Text.Encoding]::UTF8.GetBytes('bookmark-vs-collection') },
    @{ Name='logo ImageObject';                         Bytes=[Text.Encoding]::UTF8.GetBytes('ImageObject') }
)

foreach ($n in $needles) {
    $str = [Text.Encoding]::UTF8.GetString([byte[]]$n.Bytes)
    $found = $html.Contains($str)
    Write-Output ("{0,-55} : {1}" -f $n.Name, ($(if ($found) {'FOUND'} else {'MISS'})))
}
Write-Output ""
Write-Output ("HTML size: {0} bytes" -f $html.Length)
