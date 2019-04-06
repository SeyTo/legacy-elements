import EventItem from './Events/EventItem'
import CourseItem from './Course/CourseItem'
import ExamItem from './Exam/ExamItem'
import PasswordForm from './forms/PasswordForm'
import ContentCreator from './forms/ContentCreator/ContentCreator'

export default function registerGeneric (vue) {
  vue.component('EventItem', EventItem)
  vue.component('CourseItem', CourseItem)
  vue.component('ExamItem', ExamItem)
  vue.component('PasswordForm', PasswordForm)
  vue.component('ContentCreator', ContentCreator)
}
