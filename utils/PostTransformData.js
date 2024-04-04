exports.transformData = (data) => {

    const transformedData = data.map((item) => {
        const user = item.author;
        return {
            id: item.id,
            title: item.title,
            description: item.description,
            user_data: {
                id: user.id,
                name: user.name,
                email: user.email
            }
        }
    });
    return {
        posts: transformedData
    };

};