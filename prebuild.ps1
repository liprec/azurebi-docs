(Get-Content "$(Build.Repository.LocalPath)\theme\partials\head.tmpl.partial").replace('[BuildNumber]', '$(Build.BuildNumber)') | Set-Content "$(Build.Repository.LocalPath)\theme\partials\head.tmpl.partial"