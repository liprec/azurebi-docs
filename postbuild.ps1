$sitemap = [System.Xml.XmlDocument](Get-Content _site\sitemap.xml);
$stylesheetPI = $sitemap.CreateProcessingInstruction("xml-stylesheet", "type='text/xsl' href='//azurebi-docs.jppp.org/sitemap.xsl'");
$sitemap.InsertAfter($stylesheetPI, $sitemap.FirstChild);
$sitemap.Save((Resolve-Path "_site\sitemap.xml"));