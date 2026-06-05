$ProgressPreference = 'SilentlyContinue'

# percent-encoded Korean URLs to avoid script-encoding issues
$urls = @(
    @{ Tag = 'home';        Url = 'http://localhost:3000/' },
    @{ Tag = 'blog-index';  Url = 'http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8' },
    @{ Tag = 'post-01';     Url = 'http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8/%EA%B2%80%EC%A6%9D%EB%90%9C-%EC%A3%BC%EC%86%8C%EB%AA%A8%EC%9D%8C-vs-%EC%9D%BC%EB%B0%98' },
    @{ Tag = 'post-07';     Url = 'http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8/2026-%EB%A7%81%ED%81%AC%EB%AA%A8%EC%9D%8C-%EC%88%9C%EC%9C%84-TOP20' },
    @{ Tag = 'post-09';     Url = 'http://localhost:3000/%EB%B8%94%EB%A1%9C%EA%B7%B8/%EB%AA%A8%EB%B0%94%EC%9D%BC-%EB%B9%A0%EB%A5%B8%EC%A0%91%EC%86%8D' },
    @{ Tag = 'sitemap';     Url = 'http://localhost:3000/sitemap.xml' },
    @{ Tag = 'en-blog-redir'; Url = 'http://localhost:3000/blog' }
)

foreach ($u in $urls) {
    try {
        $r = Invoke-WebRequest -Uri $u.Url -UseBasicParsing -TimeoutSec 90 -MaximumRedirection 5
        Write-Output ("[{0,-15}] status={1} bytes={2}" -f $u.Tag, $r.StatusCode, $r.RawContentLength)
    } catch {
        $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 'N/A' }
        Write-Output ("[{0,-15}] ERR status={1}: {2}" -f $u.Tag, $status, $_.Exception.Message)
    }
}
