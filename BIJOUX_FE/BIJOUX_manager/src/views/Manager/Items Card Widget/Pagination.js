import { get } from 'jquery';
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { get_account_list } from '../../../api/accounts/Account_Api';
import { CCol, CRow, CSpinner } from '@coreui/react';
import ModelCard from './ModelCard';
import { useLocation, useNavigate, } from 'react-router-dom';
import ModelBanner from './ModelBanner';
import Modal_Button from '../../component_items/Modal/ModalButton';
import ModelModify from '../Modal_body/model/ModelModify';



const data_ring = {
  "model_available": [
    {
      "id": 1,
      "name": "RING NÈ",
      "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
      "mounting_type": {
        "id": 1,
        "name": "Prong"
      },
      "mounting_style": {
        "id": 1,
        "name": "Solitaire"
      },
      "base_width": 2.0,
      "base_height": 1.5,
      "volume": 1.5,
      "production_price": 500.00,
      "profit_rate": 0.2,
      "model_diamond_shape": [
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          }
        },
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 1,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          },
          "Is_editable": true
        },
        {
          "id": 2,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 1,
          "model_id": 1,
          "metal": {
            "id": 1,
            "name": "Gold",
            "buy_price_per_gram": 50.00,
            "sale_price_per_gram": 60.00,
            "imageUrl": "https://example.com/metals/gold.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-20T08:30:00.000Z"
          },
          "is_main": true,
          "percentage": 90
        },
        {
          "id": 2,
          "model_id": 1,
          "metal": {
            "id": 2,
            "name": "Platinum",
            "buy_price_per_gram": 70.00,
            "sale_price_per_gram": 80.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 21.45,
            "deactivated": 0,
            "created": "2024-05-21T09:00:00.000Z"
          },
          "is_main": false,
          "percentage": 10
        }
      ],
      "isAvailable": true,
      "deactivated": 1
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/test/1716385601.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    }
  ],
  "model_unavailable": [
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },

  ]
}
const data_band = {
  "model_available": [
    {
      "id": 1,
      "name": "BAND NÈ",
      "imageUrl": "http://localhost:8000/image/Diamond/D_IF.jpg",
      "mounting_type": {
        "id": 1,
        "name": "Prong"
      },
      "mounting_style": {
        "id": 1,
        "name": "Solitaire"
      },
      "base_width": 2.0,
      "base_height": 1.5,
      "volume": 1.5,
      "production_price": 500.00,
      "profit_rate": 0.2,
      "model_diamond_shape": [
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          }
        },
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 1,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          },
          "Is_editable": true
        },
        {
          "id": 2,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 1,
          "model_id": 1,
          "metal": {
            "id": 1,
            "name": "Gold",
            "buy_price_per_gram": 50.00,
            "sale_price_per_gram": 60.00,
            "imageUrl": "https://example.com/metals/gold.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-20T08:30:00.000Z"
          },
          "is_main": true,
          "percentage": 90
        },
        {
          "id": 2,
          "model_id": 1,
          "metal": {
            "id": 2,
            "name": "Platinum",
            "buy_price_per_gram": 70.00,
            "sale_price_per_gram": 80.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 21.45,
            "deactivated": 0,
            "created": "2024-05-21T09:00:00.000Z"
          },
          "is_main": false,
          "percentage": 10
        }
      ],
      "isAvailable": true,
      "deactivated": 1
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/test/1716385601.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    }
  ],
  "model_unavailable": [
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": null,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 224.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },

  ]
}
const data_pendant = {
  "model_available": [
    {
      "id": 1,
      "name": "PENDANT NÈ",
      "imageUrl": "http://localhost:8000/image/Diamond/D_VS1.jpg",
      "mounting_type": {
        "id": 1,
        "name": "Prong"
      },
      "mounting_style": {
        "id": 1,
        "name": "Solitaire"
      },
      "base_width": 2.0,
      "base_height": 1.5,
      "volume": 1.5,
      "production_price": 500.00,
      "profit_rate": 0.2,
      "model_diamond_shape": [
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          }
        },
        {
          "model_id": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 1,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 1,
            "name": "Round",
            "drawing_path": "https://example.com/shapes/round.svg"
          },
          "Is_editable": true
        },
        {
          "id": 2,
          "model_id": 1,
          "diamond_size_min": 0.5,
          "diamond_size_max": 2.0,
          "count": 1,
          "diamond_shape": {
            "id": 2,
            "name": "Princess",
            "drawing_path": "https://example.com/shapes/princess.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 1,
          "model_id": 1,
          "metal": {
            "id": 1,
            "name": "Gold",
            "buy_price_per_gram": 50.00,
            "sale_price_per_gram": 60.00,
            "imageUrl": "https://example.com/metals/gold.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-20T08:30:00.000Z"
          },
          "is_main": true,
          "percentage": 90
        },
        {
          "id": 2,
          "model_id": 1,
          "metal": {
            "id": 2,
            "name": "Platinum",
            "buy_price_per_gram": 70.00,
            "sale_price_per_gram": 80.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 21.45,
            "deactivated": 0,
            "created": "2024-05-21T09:00:00.000Z"
          },
          "is_main": false,
          "percentage": 10
        }
      ],
      "isAvailable": true,
      "deactivated": 1
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/test/1716385601.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    },
    {
      "id": 2,
      "name": "Modern Ring",
      "imageUrl": "http://localhost:8000/image/Metal/3/main.jpg",
      "mounting_type": {
        "id": 2,
        "name": "Bezel"
      },
      "mounting_style": {
        "id": 2,
        "name": "Halo"
      },
      "base_width": 3.0,
      "base_height": 2.0,
      "volume": 2.5,
      "production_price": 700.00,
      "profit_rate": 0.3,
      "model_diamond_shape": [
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          }
        },
        {
          "model_id": 2,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 3,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 3,
            "name": "Oval",
            "drawing_path": "https://example.com/shapes/oval.svg"
          },
          "Is_editable": true
        },
        {
          "id": 4,
          "model_id": 2,
          "diamond_size_min": 0.7,
          "diamond_size_max": 1.5,
          "count": 1,
          "diamond_shape": {
            "id": 4,
            "name": "Cushion",
            "drawing_path": "https://example.com/shapes/cushion.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 3,
          "model_id": 2,
          "metal": {
            "id": 3,
            "name": "Silver",
            "buy_price_per_gram": 30.00,
            "sale_price_per_gram": 40.00,
            "imageUrl": "http://localhost:8000/image/Metal/4/main.jpg",
            "specific_weight": 10.49,
            "deactivated": 0,
            "created": "2024-05-22T11:30:00.000Z"
          },
          "is_main": true,
          "percentage": 85
        },
        {
          "id": 4,
          "model_id": 2,
          "metal": {
            "id": 4,
            "name": "Titanium",
            "buy_price_per_gram": 40.00,
            "sale_price_per_gram": 50.00,
            "imageUrl": "http://localhost:8000/image/Metal/5/main.jpg",
            "specific_weight": 4.50,
            "deactivated": 0,
            "created": "2024-05-23T12:00:00.000Z"
          },
          "is_main": false,
          "percentage": 15
        }
      ],
      "isAvailable": true,
      "deactivated": false
    }
  ],
  "model_unavailable": [
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },
    {
      "id": 3,
      "name": "Vintage Ring",
      "imageUrl": "http://localhost:8000/image/Metal/6/main.jpg",
      "mounting_type": {
        "id": 3,
        "name": "Tension"
      },
      "mounting_style": {
        "id": 3,
        "name": "Vintage"
      },
      "base_width": 2.5,
      "base_height": 1.8,
      "volume": 2.0,
      "model_diamond_shape": [
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          }
        },
        {
          "model_id": 3,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          }
        }
      ],
      "model_diamond": [
        {
          "id": 5,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 5,
            "name": "Marquise",
            "drawing_path": "https://example.com/shapes/marquise.svg"
          },
          "Is_editable": true
        },
        {
          "id": 6,
          "model_id": 3,
          "diamond_size_min": 0.8,
          "diamond_size_max": 2.5,
          "count": 1,
          "diamond_shape": {
            "id": 6,
            "name": "Emerald",
            "drawing_path": "https://example.com/shapes/emerald.svg"
          },
          "Is_editable": false
        }
      ],
      "model_metal": [
        {
          "id": 5,
          "model_id": 3,
          "metal": {
            "id": 5,
            "name": "Rose Gold",
            "buy_price_per_gram": 60.00,
            "sale_price_per_gram": 70.00,
            "imageUrl": "http://localhost:8000/image/Metal/1/main.jpg",
            "specific_weight": 19.32,
            "deactivated": 0,
            "created": "2024-05-24T10:00:00.000Z"
          },
          "is_main": true,
          "percentage": 95
        },
        {
          "id": 6,
          "model_id": 3,
          "metal": {
            "id": 6,
            "name": "Palladium",
            "buy_price_per_gram": 55.00,
            "sale_price_per_gram": 65.00,
            "imageUrl": "http://localhost:8000/image/Metal/2/main.jpg",
            "specific_weight": 12.02,
            "deactivated": 0,
            "created": "2024-05-25T14:00:00.000Z"
          },
          "is_main": false,
          "percentage": 5
        }
      ],
      "isAvailable": false,
      "deactivated": 0
    },

  ]
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function Models({ currentModels }) {
  //console.log("currentModels", currentModels)

  return (

    <CRow className='w-100 d-flex justify-content-center'>


      {currentModels && currentModels.map((item) => (
        <CCol className='m-2' sm={6} md={4} lg={4} xl={3} xxl={2}>

          <ModelCard {...item} />

        </CCol>

      ))}


    </CRow>

  );
}


export default function Pagination({ mounting_type, completed }) {
  const navigate = useNavigate();
  const query = useQuery();
  const location = useLocation();


  const [modelList, setModelList] = useState([]);

  const [loading, setLoading] = useState(true);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [sort, setSort] = useState(0);

  const [currentModels, setCurrentModels] = useState(null);
  const [pageCount, setPageCount] = useState(0);


  const [itemOffset, setItemOffset] = useState(0);


  useEffect(() => {
    const page = parseInt(query.get('page')) || 1;
    const style_id = parseInt(query.get('style_id')) || '';

    const newOffset = (page - 1) * itemsPerPage;
    
    //setItemsPerPage(4)
    setItemOffset(newOffset);
    setSort(style_id)

  }, [query, itemsPerPage]);

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true)
    const setAttribute = async () => {
      //alert('set 1')
      //lấy dữ liệu của mounting_type và completed để lấy mảng tương ứng
      await get_account_list({ signal });
      await get_account_list({ signal });
      await get_account_list({ signal });
      await get_account_list({ signal });
      await get_account_list({ signal });
      await get_account_list({ signal });

      var data = null;
      if (mounting_type.id == 1) {
        data = data_ring
        //alert(mounting_type.id)
      } else if (mounting_type.id == 2) {
        data = data_band
        //alert(mounting_type.id)
      } else if (mounting_type.id == 3) {
        data = data_pendant
        //alert(mounting_type.id)
      }


      //console.log("data", data)


      if (completed) {
        await get_account_list(data);
        //alert('complated')
        setModelList(data.model_available)
      } else {
        await get_account_list(data);
        //alert('incomplated')
        setModelList(data.model_unavailable)
      }

      setLoading(false)
    }

    setAttribute()
    return () => {
      controller.abort();
    };

  }, [mounting_type]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    //console.log("sort", sort)
    setLoading(true)
    const re_render = async () => {
      //alert('set 2')

      await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });

      var data = null;
      if (mounting_type.id == 1) {
        data = data_ring
        //alert(mounting_type.id)
      } else if (mounting_type.id == 2) {
        data = data_band
        //alert(mounting_type.id)
      } else if (mounting_type.id == 3) {
        data = data_pendant
        //alert(mounting_type.id)
      }

      var list = completed ? data.model_available : data.model_unavailable;


      if (sort != 0) {
        list = list.filter((item) => {  return sort != 0 ? item.id == sort : item })
      }

      setModelList(list)

      const endOffset = itemOffset + itemsPerPage;


      setCurrentModels(list.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(list.length / itemsPerPage));
      setLoading(false);
    }
    re_render()

    return () => {
      controller.abort();
    };

  }, [itemOffset, itemsPerPage, mounting_type]);


  const itemsPerPageFromBanner = (itemsPerPage) => {
    setItemsPerPage(itemsPerPage);
  };

  useEffect(() => {

    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true)
    const re_render = async () => {
      //alert('set 3')

      await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      // await get_account_list({ signal });
      var data = null;
      if (mounting_type.id == 1) {
        data = data_ring
      } else if (mounting_type.id == 2) {
        data = data_band
      } else if (mounting_type.id == 3) {
        data = data_pendant
      }

      const list = (completed ? data.model_available : data.model_unavailable).filter((item) => {  return sort != 0 ? item.id == sort : item });

      setModelList(list)

      const endOffset = itemOffset + itemsPerPage;


      setCurrentModels(list.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(list.length / itemsPerPage));
      setLoading(false);
    }
    re_render()

    return () => {
      controller.abort();
    };

  }, [sort, mounting_type])

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage % modelList.length;
    setItemOffset(newOffset);
    navigate((sort != 0 ? `?style_id=${sort}` : '?') + `&page=${event.selected + 1}`);
  };
  const handleSort = (style_id) => {
    if (style_id != 0) {
      navigate(`?style_id=${style_id}`);

      setItemsPerPage(20)
      setItemOffset(0)
      setSort(style_id)

    } else { 
      const pathWithoutQuery = location.pathname;
      navigate(pathWithoutQuery, { replace: true });
      window.location.reload();
    }

  }
  const handleModelAdd = () => {
    const pathWithoutQuery = location.pathname;
    navigate(pathWithoutQuery, { replace: true });
    window.location.reload();
  }

  return (
    <div className='d-flex flex-column align-items-center h-100'>
      <CRow className='w-100'>
        <CCol md={6}>
          <ModelBanner currentStyle={sort} currentItemsPerPage={itemsPerPage} itemsPerPageFromBanner={itemsPerPageFromBanner} handleSort={handleSort} />

        </CCol>
        <CCol md={6} className='d-flex justify-content-end'>
          <div className='w-50'>
            <Modal_Button
              disabled={false}
              title={"Add New " + (mounting_type.name || 'Model ?')}
              content={<span className='text-light fw-bold'>Add New Model</span>}
              color={"info"} >
              <ModelModify type={'add'} mounting_type={mounting_type} handleModelAdd={handleModelAdd} />
            </Modal_Button>
          </div>
        </CCol>
      </CRow>

      {loading
        ?
        <div className="d-flex justify-content-center align-items-center h-100" style={{ minHeight: '50vh' }}><CSpinner color="primary" /></div>
        :
        <Models currentModels={currentModels} />
      }

      <ReactPaginate
        previousLabel="< previous"
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination  mt-5"
        containerStyle={{ marginTop: '400px' }}
        activeClassName="active"
        renderOnZeroPageCount={null}
        forcePage={parseInt(query.get('page')) - 1 || 0}
      />
    </div>
  );
}