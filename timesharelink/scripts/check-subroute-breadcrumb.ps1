$ProgressPreference = 'SilentlyContinue'
$urls = @(
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%EA%B2%80%EC%A6%9D',
    'http://localhost:3000/%EB%A7%81%ED%81%AC%EB%AA%A8%EC%9D%8C',
    'http://localhost:3000/%EA%B2%80%EC%A6%9D%EB%A1%9C%EA%B7%B8',
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%EB%A7%81%ED%81%AC%EC%A0%9C%EB%B3%B4',
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%ED%82%B9'
)
foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 60
        $hasBC = $r.Content.Contains('BreadcrumbList')
        Write-Output ("{0,-90} BreadcrumbList: {1}" -f $u, ($(if ($hasBC) {'FOUND'} else {'MISS'})))
    } catch {
        Write-Output ("{0} -> ERROR: {1}" -f $u, $_.Exception.Message)
    }
}
