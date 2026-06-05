$ProgressPreference = 'SilentlyContinue'

$sitemapUrl = 'https://www.timesharelink.com/sitemap.xml'

$endpoints = @(
    @{ Name = 'Google';  Url = "https://www.google.com/ping?sitemap=$sitemapUrl" },
    @{ Name = 'Bing';    Url = "https://www.bing.com/ping?sitemap=$sitemapUrl" },
    @{ Name = 'Yandex';  Url = "https://webmaster.yandex.com/ping?sitemap=$sitemapUrl" }
)

foreach ($e in $endpoints) {
    try {
        $r = Invoke-WebRequest -Uri $e.Url -UseBasicParsing -Method GET -TimeoutSec 20
        Write-Output ("[{0}] StatusCode={1}" -f $e.Name, $r.StatusCode)
    } catch {
        $status = if ($_.Exception.Response) { [int]$_.Exception.Response.StatusCode } else { 'N/A' }
        Write-Output ("[{0}] ERROR: status={1}, msg={2}" -f $e.Name, $status, $_.Exception.Message)
    }
}
