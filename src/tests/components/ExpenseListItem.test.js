import React from "react";
import { shallow } from 'enzyme';
import ExpenseListItem from "../../components/ExepnseListItem";
import expenses from "../fixtures/expenses";

test('should render expense list item with fixture data', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
});