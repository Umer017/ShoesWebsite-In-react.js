import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top:15%;
  height: 80vh;
  @media (max-width: 768px) {
    margin-top:30%
  }
  @media (max-width: 500px) {
    margin-top:40%
  }
  @media (max-width: 300px) {
    margin-top:50%
  }
`;

const Form = styled.form`
  width: 400px;
  padding: 50px;
  background-color: #f8f8f8;
  border-radius: 8px;
  z-index: 1;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const AppContainer = styled.div`
  position: relative;
  z-index: 0;
`;

const ShoeForm = () => {
  const [formData, setFormData] = useState({
    image: '',
    title: '',
    price: '',
    category: '',
    subcategory: '',
    features: [],
    reviews: [],
    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [features, setFeatures] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [images, setImages] = useState([]);

  const handleFeaturesChange = (e) => {
    const { value } = e.target;
    setFeatures(value.split(',').map((feature) => feature.trim()));
  };

  const handleReviewsChange = (e) => {
    const { name, value } = e.target;
    setReviews((prevReviews) => ({
      ...prevReviews,
      [name]: value,
    }));
  };

  const handleAddReview = () => {
    setReviews((prevReviews) => [
      ...prevReviews,
      { user: '', comment: '', rating: 0 },
    ]);
  };

  const handleReviewChange = (index, field, value) => {
    setReviews((prevReviews) => {
      const updatedReviews = [...prevReviews];
      updatedReviews[index][field] = value;
      return updatedReviews;
    });
  };

  const handleImagesChange = (e) => {
    const { files } = e.target;
    const imagesArray = Array.from(files).map((file) => file.name);
    setImages(imagesArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios
    //   .post('/api/shoes', formData)
    //   .then((response) => {
    //     // Handle the success response
    //     console.log('Shoe created:', response.data);
    //   })
    //   .catch((error) => {
    //     // Handle the error response
    //     console.error('Error creating shoe:', error);
    //   });
  };

  return (
    <AppContainer>
      <FormContainer>
        <Form onSubmit={handleSubmit}>
          <Label>
            Image:
            <Input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Title:
            <Input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Price:
            <Input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Category:
            <Input
              type="text"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Subcategory:
            <Input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
            />
          </Label>
          <Label>
            Features:
            <Input
              type="text"
              name="features"
              value={features.join(', ')}
              onChange={handleFeaturesChange}
            />
          </Label>

          {reviews.map((review, index) => (
            <div key={index}>
              <Label>
                User:
                <Input
                  type="text"
                  name={`user-${index}`}
                  value={review.user}
                  onChange={(e) =>
                    handleReviewChange(index, 'user', e.target.value)
                  }
                />
              </Label>
              <Label>
                Comment:
                <Input
                  type="text"
                  name={`comment-${index}`}
                  value={review.comment}
                  onChange={(e) =>
                    handleReviewChange(index, 'comment', e.target.value)
                  }
                />
              </Label>
              <Label>
                Rating:
                <Input
                  type="number"
                  name={`rating-${index}`}
                  value={review.rating}
                  onChange={(e) =>
                    handleReviewChange(index, 'rating', e.target.value)
                  }
                />
              </Label>
            </div>
          ))}
          <Button type="button" onClick={handleAddReview}>
            Add Review
          </Button>

          <Label>
            Images:
            <Input
              type="file"
              name="images"
              onChange={handleImagesChange}
              multiple
            />
          </Label>

          {/* Add fields for other properties (features, reviews, images) */}
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </AppContainer>
  );
};

export default ShoeForm;
