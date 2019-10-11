// Link.react.test.js
import React from 'react';
import LinkTo from './LinkTo';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
    debugger;
    const getLinkElement = (tree: any) => {
        // Note: from the DOM structure, <a> is a child of the current tree
        var linkTo = tree.children.find((item: any, index: any, array: any) => {
            console.debug(item);
            if (item.props.id === 'linkTo')
                return item;
        });
        return linkTo;
    };
    const component = renderer.create(
        <LinkTo page="http://www.facebook.com">Facebook</LinkTo>,
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // Note: from the DOM structure, <a> is a child of the current tree
    // var linkTo = tree.children.find((item, index, array) => {
    //     console.debug(item);
    //     if (item.props.id==='linkTo')
    //         return item;
    // });
    var linkTo = getLinkElement(tree);

    // manually trigger the callback
    linkTo.props.onMouseEnter();

    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // manually trigger the callback
    linkTo = getLinkElement(tree);
    linkTo.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();


    //   // re-rendering
    //   tree = component.toJSON();
    //   expect(tree).toMatchSnapshot();

    //   // manually trigger the callback
    //   tree.props.onMouseLeave();
    //   // re-rendering
    //   tree = component.toJSON();
    //   expect(tree).toMatchSnapshot();
});