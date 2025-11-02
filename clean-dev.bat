@echo off
echo Cleaning Next.js dev server...
echo.

echo Stopping all Node.js processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 2 /nobreak >nul

echo Removing lock file...
if exist ".next\dev\lock" (
    del /F /Q ".next\dev\lock" >nul 2>&1
    echo Lock file removed
) else (
    echo No lock file found
)

echo Removing .next folder...
if exist ".next" (
    rmdir /S /Q ".next" >nul 2>&1
    echo .next folder removed
) else (
    echo No .next folder found
)

echo.
echo Cleanup complete! You can now run 'npm run dev'
pause

