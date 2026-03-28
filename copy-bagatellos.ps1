$source = "C:\Users\paulo\Documents\construbay 2026 marketing\209 Marion Ave - Bagatellos\Photos-3-001"
$dest = "C:\Users\paulo\construbay-web\public\images\gallery\bagatellos"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$files = Get-ChildItem "$source\*" -Include *.jpg,*.jpeg,*.png,*.JPG,*.JPEG,*.PNG
$i = 1
foreach ($file in $files) {
    $newName = "bagatellos-" + $i.ToString("D2") + $file.Extension.ToLower()
    Copy-Item $file.FullName "$dest\$newName"
    Write-Host $newName
    $i++
}
Write-Host "Copied $($files.Count) photos"
