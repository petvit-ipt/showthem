//скрипт шукає конкретне слово і підсвічує саме його в видимій юзеру частині хтмл
(function() {
    // Find all text nodes containing the word "Google" within visible elements
    const textNodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        if (node.parentElement && node.parentElement.offsetHeight > 0 && node.parentElement.offsetWidth > 0) {
            textNodes.push(node);
        }
    }

    // Highlight each occurrence of the word "Google" within visible text nodes
    textNodes.forEach(textNode => {
        const textContent = textNode.textContent;
        const regex = /Google/g; // Using word boundary to match only whole word "Google"
        let match;
        let offset = 0;
        const fragment = document.createDocumentFragment();
        while ((match = regex.exec(textContent)) !== null) {
            const matchIndex = match.index;
            const matchEndIndex = matchIndex + match[0].length;
            const matchKey = `${matchIndex}-${matchEndIndex}`;

            const beforeText = textContent.substring(offset, matchIndex);
            const matchText = textContent.substring(matchIndex, matchEndIndex);
            offset = matchEndIndex;

            if (beforeText) {
                fragment.appendChild(document.createTextNode(beforeText));
            }

            const span = document.createElement('span');
            span.style.backgroundColor = 'yellow';
            span.textContent = matchText;
            fragment.appendChild(span);
        }

        const afterText = textContent.substring(offset);
        if (afterText) {
            fragment.appendChild(document.createTextNode(afterText));
        }

        textNode.parentElement.replaceChild(fragment, textNode);
    });
})();
