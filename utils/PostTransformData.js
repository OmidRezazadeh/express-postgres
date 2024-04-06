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
        posts: transformedData,
        meta:{
            total:data.length,
            current_page:2,
            per_page:3,
            next_page:4,
            

        }
    };

};