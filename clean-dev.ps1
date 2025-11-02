# Script to clean Next.js dev server lock files
Write-Host "Cleaning Next.js dev server..." -ForegroundColor Yellow

# Stop all Node processes
Write-Host "Stopping all Node.js processes..." -ForegroundColor Cyan
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 2

# Remove lock file
Write-Host "Removing lock file..." -ForegroundColor Cyan
if (Test-Path ".next\dev\lock") {
    Remove-Item ".next\dev\lock" -Force -ErrorAction SilentlyContinue
    Write-Host "✓ Lock file removed" -ForegroundColor Green
} else {
    Write-Host "✓ No lock file found" -ForegroundColor Green
}

# Remove entire .next folder
Write-Host "Removing .next folder..." -ForegroundColor Cyan
if (Test-Path ".next") {
    Remove-Item ".next" -Recurse -Force -ErrorAction SilentlyContinue
    Write-Host "✓ .next folder removed" -ForegroundColor Green
} else {
    Write-Host "✓ No .next folder found" -ForegroundColor Green
}

Write-Host "`nCleanup complete! You can now run 'npm run dev'" -ForegroundColor Green

