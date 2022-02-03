import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";

const showFancyboxOnHash = (result) => {
    const gallery_options = { slug: "gallery", startIndex: 0 };
    const { hash, slug, index } = NativeFancybox.Plugins.Hash.getParsedURL();

    if (hash && slug === gallery_options.slug) {
        gallery_options.startIndex = index - 1;
        NativeFancybox.show(result, gallery_options);
    }
}

export default showFancyboxOnHash;