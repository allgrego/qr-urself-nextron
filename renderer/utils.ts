export const downloadButtonId = "download-button"

export const exportSvg = (elementId: string) => {
    const svgData = document.getElementById(elementId)

    //get svg source.
    const serializer = new XMLSerializer();
    let source = serializer.serializeToString(svgData);

    //add name spaces.
    if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
        source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
    }
    if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
        source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
    }

    //add xml declaration
    source = '<?xml version="1.0" standalone="no"?>\r\n' + source;

    //convert svg source to URI data scheme.
    const url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);

    const downloadLink = document.getElementById(downloadButtonId)

    if (!downloadLink) return

    //set url value to a element's href attribute.
    downloadLink.setAttribute('href', url);
    //you can download svg file by right click menu.
}