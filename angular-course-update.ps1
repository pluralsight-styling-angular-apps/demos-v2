Write-Host "`n============== Installing Node Modules =============="
npm install

Write-Host "`n============== Updating Angular =============="
# ng update @angular/core@15 @angular/cli@15
ng update @angular/core @angular/cli

Write-Host "`n============== Serving App =============="
npm start
