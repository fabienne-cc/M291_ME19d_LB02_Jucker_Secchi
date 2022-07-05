let baseUrl = 'http://localhost:3000/v1';

export async function getProducts() {
    return await fetch(`${baseUrl}/products`)
        .then(async (response) => {
            return await response.json();
        })
        .then(async (data) => {
            return data;
        })
        .catch((error) => {
            console.log(error);
        });
}