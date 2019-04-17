/* eslint-disable max-len */
import React from 'react'
import http from '../../services/_http'
import EventForm from '../shared-components/dmi-mch-event-form/src'

const EventFormWrapper = () => (
  <EventForm
    id={8504}
    context={{ http }}
    // context={{
    //   http: {
    //     get: (uri) => {
    //       if (uri === '/msvc/v1/events/attributes/?attributeType=EVENT_TYPE') {
    //         return {
    //           data: {
    //             items: [
    //               {
    //                 id: -8,
    //                 type: 'Type',
    //                 title: 'Other'
    //               },
    //               {
    //                 id: -7,
    //                 type: 'Type',
    //                 title: 'Openings & receptions'
    //               },
    //               {
    //                 id: -5,
    //                 type: 'Type',
    //                 title: 'Labs & lounges'
    //               }
    //             ],
    //             total: 11,
    //             hasMore: true,
    //             offset: 0,
    //             limit: 10
    //           },
    //           ok: true
    //         }
    //       }
    //       if (uri === '/msvc/v1/accounts/mine') {
    //         return {
    //           // Simulating an AXIOS response
    //           data: [
    //             {
    //               id: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               type: '102900001',
    //               typeDescription: 'Gallery',
    //               name: 'Fantasia Test'
    //             }
    //           ],
    //           ok: true
    //         }
    //       }
    //       if (uri === '/msvc/v1/accounts/mine/d70b4757-9a7a-e211-80f2-00155d350211/addresses') {
    //         return {
    //           // Simulating an AXIOS response
    //           data: [
    //             {
    //               accountId: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               addressCity: 'Roma',
    //               addressLine1: '103a Via Giulia',
    //               addressPostalCode: '00186',
    //               countryId: '4b08c4c0-d242-e211-9367-00155d350208',
    //               emailAddress: 'fernsehturm@mailinator.com',
    //               locationId: 'f1952032-032e-e911-a983-000d3ab9a49f',
    //               telephone1: '132456',
    //               name: 'via Giulia',
    //               previewAddress: 'Fantasia Test\n103a Via Giulia\n00186 Roma\nItaly',
    //               isGallerySpace: true,
    //               isOfficeSpace: false,
    //               publicOpeningTimes: '1-2',
    //               latitude: 41.898308,
    //               longitude: 12.466336,
    //               legalName: 'test',
    //               placeId: 'ChIJaUKbZENgLxMRv6smYBSB_Us',
    //               mapUrl: 'https://maps.google.com/?q=Via+Giulia,+103,+00186+Roma+RM,+Italy&ftid=0x132f6043649b4269:0x4bfd81146026abbf',
    //               formattedAddress: 'Via Giulia, 103, 00186 Roma RM, Italy'
    //             },
    //             {
    //               accountId: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               addressCity: 'Phnom Penh',
    //               addressLine1: 'Preah Moha Ksatreiyani Kossamak Avenue (106)',
    //               addressPostalCode: '123',
    //               countryId: 'cf07c4c0-d242-e211-9367-00155d350208',
    //               locationId: '9f492470-bff3-e811-a978-000d3ab9add5',
    //               name: 'DMI Phnom Penh',
    //               previewAddress: 'Fantasia Test\nPreah Moha Ksatreiyani Kossamak Avenue (106)\n123 Phnom Penh\nCambodia',
    //               isGallerySpace: true,
    //               isOfficeSpace: false,
    //               publicOpeningTimes: '08:00',
    //               latitude: 11.5744,
    //               longitude: 104.92674,
    //               placeId: 'ChIJ7VlCZEVRCTERz3AqPyecu3E',
    //               mapUrl: 'https://maps.google.com/?cid=8195315639308153039',
    //               formattedAddress: 'Preah Moha Ksatreiyani Kossamak Ave (106), Phnom Penh, Cambodia'
    //             },
    //             {
    //               accountId: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               addressCity: 'Berlin',
    //               addressLine1: '1A Panoramastraße',
    //               addressLine2: 'Mitte',
    //               addressPostalCode: '10178',
    //               countryId: '1b08c4c0-d242-e211-9367-00155d350208',
    //               emailAddress: 'gallerytest@artbasel.com',
    //               locationId: '853ed3a7-d0d7-e611-80ee-021dd8b71cd3',
    //               telephone1: '+88888888888888',
    //               name: 'London, UK',
    //               previewAddress: 'Fantasia Test\n1A Panoramastraße\nMitte\n10178 Berlin\nGermany',
    //               isGallerySpace: false,
    //               isOfficeSpace: true,
    //               publicOpeningTimes: '9am - 5pm',
    //               latitude: 52.520817,
    //               longitude: 13.409419,
    //               legalName: 'DMI',
    //               placeId: 'ChIJdTjciR9OqEcRCcHTrPJmfNg',
    //               mapUrl: 'https://maps.google.com/?q=Panoramastra%C3%9Fe+1A,+10178+Berlin,+Germany&ftid=0x47a84e1f89dc3875:0xd87c66f2acd3c109',
    //               formattedAddress: 'Panoramastraße 1A, 10178 Berlin, Germany'
    //             },
    //             {
    //               accountId: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               addressCity: 'Berlin',
    //               addressLine1: '1A Panoramastraße',
    //               addressPostalCode: '10178',
    //               countryId: '1b08c4c0-d242-e211-9367-00155d350208',
    //               emailAddress: 'fernsehturm@mailinator.com',
    //               locationId: '0cd691f5-65c1-e811-a973-000d3ab9a49f',
    //               telephone1: '132456',
    //               name: 'Berlin Fernsehturm',
    //               previewAddress: 'Fantasia Test\n1A Panoramastraße\n10178 Berlin\nGermany',
    //               isGallerySpace: true,
    //               isOfficeSpace: false,
    //               publicOpeningTimes: '1-3',
    //               latitude: 52.520817,
    //               longitude: 13.409419,
    //               legalName: 's',
    //               placeId: 'ChIJdTjciR9OqEcRCcHTrPJmfNg',
    //               mapUrl: 'https://maps.google.com/?q=Panoramastra%C3%9Fe+1A,+10178+Berlin,+Germany&ftid=0x47a84e1f89dc3875:0xd87c66f2acd3c109',
    //               formattedAddress: 'Panoramastraße 1A, 10178 Berlin, Germany'
    //             },
    //             {
    //               accountId: 'd70b4757-9a7a-e211-80f2-00155d350211',
    //               addressCity: 'Minato-ku',
    //               addressLine1: 'Higashiazabu',
    //               addressPostalCode: '106-0044',
    //               countryId: '5108c4c0-d242-e211-9367-00155d350208',
    //               locationId: '767ad5e7-8664-e611-80e9-021dd8b71cd3',
    //               name: 'Zürich',
    //               previewAddress: 'Fantasia Test\nHigashiazabu\n106-0044 Minato-ku\nJapan',
    //               isGallerySpace: true,
    //               isOfficeSpace: false,
    //               publicOpeningTimes: 'Monday',
    //               latitude: 35.65764,
    //               longitude: 139.740236,
    //               legalName: 'Art Basel',
    //               placeId: 'ChIJoRVfepiLGGARW07PtPfhMAk',
    //               mapUrl: 'https://maps.google.com/?cid=662277599230119515',
    //               formattedAddress: '1F, 2 Chome-12-4 Higashiazabu, Minato-ku, Tōkyō-to 106-0044, Japan'
    //             }
    //           ],
    //           ok: true
    //         }
    //       }
    //       return {}
    //     }
    //   }
    // }}
  />
)

export default EventFormWrapper
