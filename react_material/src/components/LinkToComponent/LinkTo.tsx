import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

export default class LinkTo extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        return (
            <Typography>
                <Link
                    id='linkTo'
                    className={this.state.class}
                    href={this.props.page || '#'}
                    onMouseEnter={this._onMouseEnter}
                    onMouseLeave={this._onMouseLeave}
                >
                    {this.props.children}
                </Link>
            </Typography>
            // <a
            //     className={this.state.class}
            //     href={this.props.page || '#'}
            //     onMouseEnter={this._onMouseEnter}
            //     onMouseLeave={this._onMouseLeave}
            // >
            //     {this.props.children}
            // </a>

        );
    }
}