import { StyleSheet, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import Config from 'react-native-config'
import JobCard from '../../components/JobCard'
import useJobs from '../../hooks/useJobs'
import Footer from '../../components/Footer'
import { FavoritedList } from '../../context/FavoritedContext/FavoritedSlice'
import { useDispatch } from 'react-redux'

const Jobs = ({ navigation }) => {
    const [page, setPage] = useState(1)
    const dispatch = useDispatch()
    const { data, loading, error } = useJobs(`${Config.JOBS_PAGE_URL}?page=${page}`)

    useEffect(() => {
        dispatch(FavoritedList())
    }, [])

    const handleJobSelect = (id) => {
        navigation.navigate("Detail", { id })
    }
    const renderJobs = ({ item }) => <JobCard job={item} onSelect={() => handleJobSelect(item.id)} />

    const handelIncrement = () => {
        if (page === 50) { return }
        setPage(prev => prev + 1)
    }
    const handelDecrement = () => {
        if (page === 1) { return }
        setPage(prev => prev - 1)
    }

    if (loading) {
        return <Text>Loading...</Text>
    }

    if (error) {
        return <Text>{error}</Text>
    }


    return (
        <FlatList
            style={{ marginBottom: 40 }}
            keyExtractor={(item) => item.id}
            data={data.results}
            renderItem={renderJobs}
            ListFooterComponent={<Footer
                increment={() => handelIncrement()}
                decrement={() => handelDecrement()}
                page={page} />}
        />
    )
}

export default Jobs

const styles = StyleSheet.create({})