import {getRandomArrayElements} from '../utils.js';

const COUNT_POINTS = 5
const points = [
  {
    "id": "08cf77dc-f0b7-4623-8c58-d20dcf1a3857",
    "base_price": 1036,
    "date_from": "2026-03-09T17:12:04.970Z",
    "date_to": "2026-03-11T15:29:04.970Z",
    "destination": "43b80c1b-3c93-40a7-89c4-cc6f682527f4",
    "is_favorite": false,
    "offers": [
      "18063b2b-ca93-4235-9ee3-797e0157c710",
      "e649cb83-c2ee-4f5d-9b6b-30a3077f2b1c",
      "61ac7226-b2c2-41b6-85ff-232a32c93253",
      "f5eb6198-8a5b-4662-af15-07c5b345c852",
      "e90ec8bc-36e4-467d-9106-4ff22a78b01f",
      "0484c7ad-7e90-4118-840c-2c13066e87fe"
    ],
    "type": "ship"
  },
  {
    "id": "1127c283-f3a7-4aab-aa8b-ff1c4117095e",
    "base_price": 877,
    "date_from": "2026-03-12T19:00:04.970Z",
    "date_to": "2026-03-14T19:05:04.970Z",
    "destination": "71271525-c051-4b9d-8008-51beeb57088a",
    "is_favorite": false,
    "offers": [],
    "type": "taxi"
  },
  {
    "id": "c46fcc51-323d-44a5-bcf2-38441fafc025",
    "base_price": 7500,
    "date_from": "2026-03-15T12:55:04.970Z",
    "date_to": "2026-03-16T14:30:04.970Z",
    "destination": "7e43ca4d-1419-4ea2-9502-cf1b1b4ee820",
    "is_favorite": false,
    "offers": [],
    "type": "sightseeing"
  },
  {
    "id": "5fc8c7c2-785b-4ade-89b6-1f69c5244cae",
    "base_price": 9191,
    "date_from": "2026-03-17T04:19:04.970Z",
    "date_to": "2026-03-18T12:51:04.970Z",
    "destination": "bba785b0-e21e-4e30-826d-9a6390329d38",
    "is_favorite": true,
    "offers": [
      "2a962115-6e5d-4600-afaa-0d9367e99ed5"
    ],
    "type": "restaurant"
  },
  {
    "id": "e10d3c0e-8c98-4cf0-b77d-ff04427891de",
    "base_price": 6257,
    "date_from": "2026-03-20T01:22:04.970Z",
    "date_to": "2026-03-20T08:47:04.970Z",
    "destination": "71271525-c051-4b9d-8008-51beeb57088a",
    "is_favorite": false,
    "offers": [
      "dd7b7a90-cfd9-4877-8b22-6becaf53c03c",
      "5c0f2cec-aeac-494e-ae37-6aed435e881d",
      "d4451c60-000e-4d1a-9eaa-fc7085d7331e"
    ],
    "type": "train"
  },
  {
    "id": "b6f20435-3d59-4ab7-8f04-768b61519161",
    "base_price": 100,
    "date_from": "2026-03-20T15:26:04.970Z",
    "date_to": "2026-03-22T12:02:04.970Z",
    "destination": "71271525-c051-4b9d-8008-51beeb57088a",
    "is_favorite": false,
    "offers": [
      "ca5cef3e-b4b0-4ace-bcfc-f257f094432b"
    ],
    "type": "drive"
  },
  {
    "id": "b4f869e0-0c3f-4016-a31e-4a17fbadd109",
    "base_price": 3959,
    "date_from": "2026-03-23T23:53:04.970Z",
    "date_to": "2026-03-24T11:13:04.970Z",
    "destination": "828c9614-c5dd-44c0-893b-0c4ad137d913",
    "is_favorite": true,
    "offers": [
      "ca5cef3e-b4b0-4ace-bcfc-f257f094432b"
    ],
    "type": "drive"
  },
  {
    "id": "93316d0d-16c5-43b7-a27d-042ef21a5697",
    "base_price": 7160,
    "date_from": "2026-03-25T06:23:04.970Z",
    "date_to": "2026-03-25T23:13:04.970Z",
    "destination": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "is_favorite": false,
    "offers": [
      "df5afecd-0ff7-4a4a-9586-35849676a247",
      "068082b3-58d3-41eb-bac2-bbf6b7ea88fd",
      "e80ab2be-6c8e-433f-9381-803100b00ad5",
      "598ac183-e45b-42e1-97bd-1a794c406167",
      "0039b1ae-da5e-4419-a681-ecf115534e71"
    ],
    "type": "flight"
  },
  {
    "id": "06de6eec-31b1-4e2a-ab01-1e4f343d45bd",
    "base_price": 6823,
    "date_from": "2026-03-26T07:32:04.970Z",
    "date_to": "2026-03-27T12:03:04.970Z",
    "destination": "cd6686d3-6386-4296-8c05-ec48d0278713",
    "is_favorite": true,
    "offers": [
      "61ac7226-b2c2-41b6-85ff-232a32c93253",
      "f5eb6198-8a5b-4662-af15-07c5b345c852",
      "e90ec8bc-36e4-467d-9106-4ff22a78b01f",
      "0484c7ad-7e90-4118-840c-2c13066e87fe"
    ],
    "type": "ship"
  },
  {
    "id": "919be3e9-389f-40c0-a061-239ccab9a763",
    "base_price": 9541,
    "date_from": "2026-03-27T19:55:04.970Z",
    "date_to": "2026-03-28T22:52:04.970Z",
    "destination": "828c9614-c5dd-44c0-893b-0c4ad137d913",
    "is_favorite": true,
    "offers": [
      "2a962115-6e5d-4600-afaa-0d9367e99ed5"
    ],
    "type": "restaurant"
  },
  {
    "id": "d7e54ac8-47e7-40e7-bb70-0748e0618eb9",
    "base_price": 8980,
    "date_from": "2026-03-29T11:14:04.970Z",
    "date_to": "2026-03-31T07:15:04.970Z",
    "destination": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "is_favorite": true,
    "offers": [
      "95839af9-c10d-4b7b-9b05-3dd0dce5a4c7",
      "ca5cef3e-b4b0-4ace-bcfc-f257f094432b"
    ],
    "type": "drive"
  },
  {
    "id": "0f5bb499-630d-4469-981b-a2db815f3d7a",
    "base_price": 9882,
    "date_from": "2026-04-01T00:01:04.970Z",
    "date_to": "2026-04-02T09:36:04.970Z",
    "destination": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "is_favorite": false,
    "offers": [
      "c9bdb626-29f2-4a96-a5dd-7cb235bbca00",
      "adfa93e4-118f-4b61-b81a-44e3046a73b0",
      "c417e6c4-33bf-4da2-a68c-55e4af9fef08",
      "f19fb78e-8e4a-437a-a0b4-0aec4b3f81b9"
    ],
    "type": "taxi"
  },
  {
    "id": "0c5d029e-6cb5-4339-a973-363502c3ec07",
    "base_price": 50,
    "date_from": "2026-04-02T22:11:04.970Z",
    "date_to": "2026-04-04T02:39:04.970Z",
    "destination": "74e341cf-4de5-43ee-a195-e9541ac644e4",
    "is_favorite": true,
    "offers": [],
    "type": "ship"
  },
  {
    "id": "290fa74a-34cd-47a4-aa58-7770f5714f02",
    "base_price": 1802,
    "date_from": "2026-04-05T02:48:04.970Z",
    "date_to": "2026-04-05T23:35:04.970Z",
    "destination": "7e43ca4d-1419-4ea2-9502-cf1b1b4ee820",
    "is_favorite": true,
    "offers": [
      "bab3dc2d-2a22-42c7-8c95-b8891152f9c5",
      "858fd488-36c1-41da-80b0-fdaca88bd30e",
      "11aac99f-1855-4897-a516-075c6347bf5e",
      "c11d8052-1dc0-4065-8686-2d8aaf28f2f0",
      "4d28fa2b-6d23-4b5f-bbdb-363754063df2"
    ],
    "type": "check-in"
  },
  {
    "id": "1b5b30fc-2148-4d01-b81f-3cbb3db3c1b5",
    "base_price": 5047,
    "date_from": "2026-04-07T05:28:04.970Z",
    "date_to": "2026-04-07T12:15:04.970Z",
    "destination": "828c9614-c5dd-44c0-893b-0c4ad137d913",
    "is_favorite": false,
    "offers": [
      "f5eb6198-8a5b-4662-af15-07c5b345c852",
      "e90ec8bc-36e4-467d-9106-4ff22a78b01f",
      "0484c7ad-7e90-4118-840c-2c13066e87fe"
    ],
    "type": "ship"
  },
  {
    "id": "1490e29c-a0cc-454c-b32d-0bace4524998",
    "base_price": 6488,
    "date_from": "2026-04-08T12:05:04.970Z",
    "date_to": "2026-04-09T01:49:04.970Z",
    "destination": "cd6686d3-6386-4296-8c05-ec48d0278713",
    "is_favorite": true,
    "offers": [
      "c417e6c4-33bf-4da2-a68c-55e4af9fef08",
      "f19fb78e-8e4a-437a-a0b4-0aec4b3f81b9"
    ],
    "type": "taxi"
  },
  {
    "id": "8fc5bd35-400d-436b-b391-e681a0421c71",
    "base_price": 7400,
    "date_from": "2026-04-09T20:01:04.970Z",
    "date_to": "2026-04-11T07:53:04.970Z",
    "destination": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "is_favorite": true,
    "offers": [],
    "type": "flight"
  },
  {
    "id": "23dfbbde-d1dc-492b-ae06-b484dddb1dcb",
    "base_price": 2416,
    "date_from": "2026-04-11T22:25:04.970Z",
    "date_to": "2026-04-13T17:30:04.970Z",
    "destination": "c0451e23-a675-4244-b1cb-5eb0f39ca21c",
    "is_favorite": false,
    "offers": [
      "df5afecd-0ff7-4a4a-9586-35849676a247",
      "068082b3-58d3-41eb-bac2-bbf6b7ea88fd",
      "e80ab2be-6c8e-433f-9381-803100b00ad5",
      "598ac183-e45b-42e1-97bd-1a794c406167",
      "0039b1ae-da5e-4419-a681-ecf115534e71"
    ],
    "type": "flight"
  },
  {
    "id": "4709f96c-b5e7-4677-9907-04ddbe154fc4",
    "base_price": 427,
    "date_from": "2026-04-14T23:46:04.970Z",
    "date_to": "2026-04-16T02:26:04.970Z",
    "destination": "74e341cf-4de5-43ee-a195-e9541ac644e4",
    "is_favorite": true,
    "offers": [
      "adfa93e4-118f-4b61-b81a-44e3046a73b0",
      "c417e6c4-33bf-4da2-a68c-55e4af9fef08",
      "f19fb78e-8e4a-437a-a0b4-0aec4b3f81b9"
    ],
    "type": "taxi"
  },
  {
    "id": "e78ec592-1f1d-497e-b105-1a72d3c9817a",
    "base_price": 2834,
    "date_from": "2026-04-16T17:48:04.970Z",
    "date_to": "2026-04-17T18:07:04.970Z",
    "destination": "74e341cf-4de5-43ee-a195-e9541ac644e4",
    "is_favorite": true,
    "offers": [
      "996653ce-f90f-4735-a925-e6ee8f3e36d3",
      "8485f432-bf75-4db1-8a0c-f8d680beba26",
      "a3470bd9-7b10-48cb-b2a8-37a5c08f44a1"
    ],
    "type": "bus"
  },
  {
    "id": "09b24444-4b3b-415b-9612-f15b57c8d1b6",
    "base_price": 2473,
    "date_from": "2026-04-19T01:38:04.970Z",
    "date_to": "2026-04-19T08:33:04.970Z",
    "destination": "bba785b0-e21e-4e30-826d-9a6390329d38",
    "is_favorite": true,
    "offers": [
      "8485f432-bf75-4db1-8a0c-f8d680beba26",
      "a3470bd9-7b10-48cb-b2a8-37a5c08f44a1"
    ],
    "type": "bus"
  },
  {
    "id": "cb9c3cb3-edbb-4382-a6a6-4fbc2911e050",
    "base_price": 933,
    "date_from": "2026-04-20T03:29:04.970Z",
    "date_to": "2026-04-21T09:49:04.970Z",
    "destination": "bba785b0-e21e-4e30-826d-9a6390329d38",
    "is_favorite": false,
    "offers": [
      "c9bdb626-29f2-4a96-a5dd-7cb235bbca00",
      "adfa93e4-118f-4b61-b81a-44e3046a73b0",
      "c417e6c4-33bf-4da2-a68c-55e4af9fef08",
      "f19fb78e-8e4a-437a-a0b4-0aec4b3f81b9"
    ],
    "type": "taxi"
  },
  {
    "id": "945b3acb-cdcc-481b-95cf-9b3338a60309",
    "base_price": 5158,
    "date_from": "2026-04-23T08:23:04.970Z",
    "date_to": "2026-04-24T21:40:04.970Z",
    "destination": "71271525-c051-4b9d-8008-51beeb57088a",
    "is_favorite": true,
    "offers": [
      "df5afecd-0ff7-4a4a-9586-35849676a247",
      "068082b3-58d3-41eb-bac2-bbf6b7ea88fd",
      "e80ab2be-6c8e-433f-9381-803100b00ad5",
      "598ac183-e45b-42e1-97bd-1a794c406167",
      "0039b1ae-da5e-4419-a681-ecf115534e71"
    ],
    "type": "flight"
  },
  {
    "id": "89334c68-11e4-4793-8c44-28bdbe0d23d4",
    "base_price": 2250,
    "date_from": "2026-04-26T00:18:04.970Z",
    "date_to": "2026-04-28T00:26:04.970Z",
    "destination": "828c9614-c5dd-44c0-893b-0c4ad137d913",
    "is_favorite": true,
    "offers": [
      "5c0f2cec-aeac-494e-ae37-6aed435e881d",
      "d4451c60-000e-4d1a-9eaa-fc7085d7331e"
    ],
    "type": "train"
  },
  {
    "id": "80331390-d552-4c96-9dc3-7bffbce461e4",
    "base_price": 8357,
    "date_from": "2026-04-29T13:13:04.970Z",
    "date_to": "2026-05-01T08:55:04.970Z",
    "destination": "7e43ca4d-1419-4ea2-9502-cf1b1b4ee820",
    "is_favorite": false,
    "offers": [],
    "type": "flight"
  }
];

const getRandomPoints = () => getRandomArrayElements(points, COUNT_POINTS);

export {getRandomPoints};