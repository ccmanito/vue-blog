<script>
export default {
    name: 'sideLink',
    functional: true,
    props: {
        to: {
            required: true
        }
    },
    render(h, context) {
        const { to } = context.props
        const vnodes = []
        const isExternal = /^(https?:|mailto:|tel:)/.test(to.path)
        if (isExternal) {
            vnodes.push(<a href={to.path} target='_blank'>{context.children}</a>)
        } else {
            vnodes.push(<router-link to={{ 'name': to.name }}>{context.children}</router-link>)
        }
        return vnodes
    }
}
</script>
