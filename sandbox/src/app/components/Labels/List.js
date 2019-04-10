import PropTypes from 'prop-types'
import shortid from 'shortid'
import Link from 'next/link'

import { Container, Input, Table, CustomDropdown } from 'dmi-ui/components'
import LabelsWrapper from './list.styles'
import { labelsReducer } from '../../reducers'
import { configLabels, addLabelsValues, filterOptions } from './list.helpers'
import { cmsPageUrl } from '../../utils'
import { TableSort } from '../Common/Table'

const { useReducer, useState } = React

const LabelsList = ({ labelsData }) => {
  // labels data
  const { labels } = getEnvConfig.mch
  const configLabelsData = configLabels(labels)
  const labelsObj = addLabelsValues(configLabelsData, labelsData)
  labelsObj.forEach((o) => {
    o.key = o.key.split('.').pop() // eslint-disable-line no-param-reassign
  })

  // state
  const initialState = { labels: labelsObj }
  const [key, setKey] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')

  // reducer
  const [state, dispatch] = useReducer(labelsReducer, initialState)

  // dispatch
  const dispatchSortBy = (category) => {
    dispatch({
      type: 'sortBy',
      category,
      allLabels: configLabelsData
    })
  }
  const dispatchFilterBy = (e) => {
    setType(e.value)
    setKey('')
    setDescription('')
    setValue('')
    dispatch({
      type: 'filterBy',
      category: e.value,
      allLabels: configLabelsData
    })
  }
  const dispatchSearchBy = (e) => {
    const { name } = e.target
    dispatch({
      type: 'searchBy',
      category: name,
      value: e.target.value,
      allLabels: configLabelsData,
      entityId: type !== 'all' ? type : null
    })
  }

  const handleSearchOnChange = (e) => {
    switch (e.target.name) {
      case 'key':
        setKey(e.target.value)
        break
      case 'description':
        setDescription(e.target.value)
        break
      default:
        setValue(e.target.value)
    }
  }

  const handleSearchOnFocus = (e) => {
    switch (e.target.name) {
      case 'key':
        if (!key) {
          description !== '' && setDescription('')
          value !== '' && setValue('')
        }
        break
      case 'description':
        if (!description) {
          key !== '' && setKey('')
          value !== '' && setValue('')
        }
        break
      default:
        if (!value) {
          key !== '' && setKey('')
          description !== '' && setDescription('')
        }
    }
  }

  return (
    <LabelsWrapper>
      <Container>
        <Table fullwidth>
          {/* Table Head */}
          <Table.Head>
            <Table.Row>
              {/* Sort Entity */}
              <Table.Heading onClick={() => dispatchSortBy('entityId')}>
                <TableSort sortBy={state.sortBy} isAscending={state.isAscending} entity='entityId' text='Type' />
              </Table.Heading>
              {/* Sort Key */}
              <Table.Heading onClick={() => dispatchSortBy('key')}>
                <TableSort sortBy={state.sortBy} isAscending={state.isAscending} entity='key' text='Key' />
              </Table.Heading>
              {/* Sort Description */}
              <Table.Heading onClick={() => dispatchSortBy('description')}>
                <TableSort
                  sortBy={state.sortBy}
                  isAscending={state.isAscending}
                  entity='description'
                  text='Description'
                />
              </Table.Heading>
              {/* Sort Value */}
              <Table.Heading onClick={() => dispatchSortBy('value')}>
                <TableSort sortBy={state.sortBy} isAscending={state.isAscending} entity='value' text='Value' />
              </Table.Heading>
            </Table.Row>
            <Table.Row>
              {/* Filter Type */}
              <Table.Heading>
                <CustomDropdown
                  options={filterOptions(labels)}
                  onChange={dispatchFilterBy}
                  name='filter'
                  value={type || filterOptions(labels)[0]}
                  className='transparent max-content'
                />
              </Table.Heading>
              {/* Search Key */}
              <Table.Heading>
                <Input
                  onFocus={e => handleSearchOnFocus(e)}
                  type='text'
                  name='key'
                  value={key}
                  onChange={handleSearchOnChange}
                  placeholder='Search'
                  onKeyUp={dispatchSearchBy}
                />
              </Table.Heading>
              {/* Search Description */}
              <Table.Heading>
                <Input
                  onFocus={e => handleSearchOnFocus(e)}
                  type='text'
                  name='description'
                  value={description}
                  onChange={handleSearchOnChange}
                  placeholder='Search'
                  onKeyUp={dispatchSearchBy}
                />
              </Table.Heading>
              {/* Search Value */}
              <Table.Heading>
                <Input
                  onFocus={e => handleSearchOnFocus(e)}
                  type='text'
                  name='value'
                  value={value}
                  onChange={handleSearchOnChange}
                  placeholder='Search'
                  onKeyUp={dispatchSearchBy}
                />
              </Table.Heading>
            </Table.Row>
          </Table.Head>

          {/* Table Body */}
          <Table.Body>
            {state.labels.map((item) => {
              const page = '/labels/edit'
              const url = `${page}/${item.entityId}/${item.key}`
              return (
                <Table.Row key={shortid.generate()}>
                  <Table.Cell className='ellipsis'>
                    <Link href={cmsPageUrl(url, page)} as={url}>
                      <a>{item.entityId}</a>
                    </Link>
                  </Table.Cell>
                  <Table.Cell className='ellipsis'>
                    <Link href={cmsPageUrl(url, page)} as={url}>
                      <a>{item.key}</a>
                    </Link>
                  </Table.Cell>
                  <Table.Cell className='ellipsis'>
                    <Link href={cmsPageUrl(url, page)} as={url}>
                      <a>{item.description}</a>
                    </Link>
                  </Table.Cell>
                  <Table.Cell className='ellipsis'>
                    <Link href={cmsPageUrl(url, page)} as={url}>
                      <a>{item.value}</a>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              )
            })}
          </Table.Body>
        </Table>
      </Container>
    </LabelsWrapper>
  )
}

LabelsList.propTypes = {
  data: PropTypes.array,
  labelsData: PropTypes.array
}

export default LabelsList
