import EventItem from './Events/EventItem/EventItem'
import CourseItem from './Course/CourseItem/CourseItem'

export default function registerGeneric (vue) {
  vue.component('event-item', EventItem)
  vue.component('course-item', CourseItem)
}
