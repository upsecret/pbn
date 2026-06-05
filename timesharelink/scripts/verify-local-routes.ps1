$ProgressPreference = 'SilentlyContinue'
$ErrorActionPreference = 'Continue'

$urls = @(
    'http://localhost:3000/',
    'http://localhost:3000/%EB%A7%81%ED%81%AC%EB%AA%A8%EC%9D%8C',
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%EA%B2%80%EC%A6%9D',
    'http://localhost:3000/%EA%B2%80%EC%A6%9D%EB%A1%9C%EA%B7%B8',
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%EB%A7%81%ED%81%AC%EC%A0%9C%EB%B3%B4',
    'http://localhost:3000/%EC%A3%BC%EC%86%8C%ED%82%B9',
    'http://localhost:3000/%EC%97%AC%EA%B8%B0%EC%97%AC'
)

foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u -UseBasicParsing -TimeoutSec 60 -MaximumRedirection 5
        Write-Output ("OK status={0} bytes={1} url={2}" -f $r.StatusCode, $r.RawContentLength, $u)
    } catch {
        $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 'N/A' }
        Write-Output ("ERR status={0} url={1} msg={2}" -f $status, $u, $_.Exception.Message)
    }
}
