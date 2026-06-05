$ProgressPreference = 'SilentlyContinue'
$r = Invoke-WebRequest -Uri 'http://localhost:3000/' -UseBasicParsing -TimeoutSec 60
$html = $r.Content

$checks = @{
    'New title (kr brand)'        = '타임쉐어링크'
    'H1 keyword (1위)'             = '1위 검증 플랫폼'
    'Org alternateName'           = 'alternateName'
    'Org sameAs'                  = 'sameAs'
    'Topic 7 (TOP 20)'            = 'TOP 20'
    'Topic 8 (Big3)'              = '3대 사이트'
    'Topic 9 (mobile)'            = '모바일에서 주소모음'
    'Topic 10 (bookmark)'         = '북마크와 주소모음'
    'Breadcrumb schema absent on home (expected)' = 'BreadcrumbList'
}

foreach ($k in $checks.Keys) {
    $needle = $checks[$k]
    $found = $html.Contains($needle)
    Write-Output ("{0,-50} : {1}  (needle='{2}')" -f $k, ($(if ($found) {'FOUND'} else {'MISS'})), $needle)
}
Write-Output ""
Write-Output ("HTML size: {0} bytes" -f $html.Length)
